import { Briefcase, Globe, User } from 'lucide-react';
import type { Dimension } from '../types';

const icons = {
  personal: User,
  professional: Briefcase,
  digital: Globe,
} as const;

interface Props {
  dimension: Dimension;
  size?: number;
}

export default function DimensionIcon({ dimension, size = 20 }: Props) {
  const Icon = icons[dimension];
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
}
