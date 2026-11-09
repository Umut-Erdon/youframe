import { useId } from 'react';
import { getDimensionMeta, DIMENSIONS } from '../data/dimensions';
import { useLanguage } from '../i18n/LanguageContext';
import { useAnimatedValue } from '../hooks/useAnimatedValue';
import type { Dimension, DimensionScores } from '../types';

interface Props {
  scores: DimensionScores;
  animate?: boolean;
  className?: string;
}

const CX = 200;
const CY = 168;
const R = 100;
const ANGLES: Record<Dimension, number> = { personal: -90, professional: 30, digital: 150 };
const RINGS = [25, 50, 75, 100];

function polar(dimension: Dimension, percent: number): [number, number] {
  const rad = (ANGLES[dimension] * Math.PI) / 180;
  const r = (R * percent) / 100;
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)];
}

function toPoints(percentFor: (d: Dimension) => number): string {
  return DIMENSIONS.map((d) => polar(d, percentFor(d)).map((n) => n.toFixed(1)).join(',')).join(' ');
}

const ANCHOR: Record<Dimension, 'start' | 'middle' | 'end'> = {
  personal: 'middle',
  professional: 'start',
  digital: 'end',
};

export default function IdentityChart({ scores, animate = true, className }: Props) {
  const { t, lang } = useLanguage();
  const uid = useId().replace(/:/g, '');
  const progress = useAnimatedValue(1, 1100, 250, animate);
  const shown = (d: Dimension) => scores[d] * progress;

  return (
    <svg
      className={className}
      viewBox="0 0 400 320"
      role="img"
      aria-label={`${t('chartAria')} ${DIMENSIONS.map((d) => `${getDimensionMeta(d, lang).short} ${scores[d]}`).join(', ')}.`}
    >
      <defs>
        <linearGradient id={`fill-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a78bfa" stopOpacity="0.55" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id={`stroke-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c4b5fd" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
      </defs>

      {RINGS.map((ring) => (
        <polygon
          key={ring}
          points={toPoints(() => ring)}
          fill="none"
          stroke="rgba(148,163,255,0.16)"
          strokeWidth={ring === 100 ? 1.2 : 1}
        />
      ))}
      {DIMENSIONS.map((d) => {
        const [x, y] = polar(d, 100);
        return <line key={d} x1={CX} y1={CY} x2={x} y2={y} stroke="rgba(148,163,255,0.16)" />;
      })}

      <polygon
        points={toPoints(shown)}
        fill={`url(#fill-${uid})`}
        stroke={`url(#stroke-${uid})`}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {DIMENSIONS.map((d) => {
        const [x, y] = polar(d, shown(d));
        return (
          <circle
            key={d}
            cx={x}
            cy={y}
            r="5.5"
            fill={getDimensionMeta(d, lang).color}
            stroke="#060a17"
            strokeWidth="2"
          />
        );
      })}

      {DIMENSIONS.map((d) => {
        const rad = (ANGLES[d] * Math.PI) / 180;
        const lx = CX + (R + 24) * Math.cos(rad);
        const ly = CY + (R + 24) * Math.sin(rad);
        const dy = d === 'personal' ? -14 : 8;
        return (
          <text key={d} x={lx} y={ly + dy} textAnchor={ANCHOR[d]} fill="#cbd5f5" fontSize="14" fontWeight="600">
            {getDimensionMeta(d, lang).short}
            <tspan x={lx} dy="17" fill={getDimensionMeta(d, lang).color} fontSize="15" fontWeight="700">
              {scores[d]}
            </tspan>
          </text>
        );
      })}
    </svg>
  );
}
