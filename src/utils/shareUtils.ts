import { getDimensionMeta, DIMENSIONS } from '../data/dimensions';
import { ui } from '../i18n/translations';
import { composeReport } from './scoringEngine';
import type { AssessmentResult, Lang } from '../types';

export const SHARE_CARD_WIDTH = 1080;
export const SHARE_CARD_HEIGHT = 1350;

/** The site's own address, only when it is a real public one (never localhost). */
function publicSiteUrl(): string | null {
  try {
    const { origin, hostname } = window.location;
    if (!/^https?:/.test(origin)) return null;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.local')) {
      return null;
    }
    return origin;
  } catch {
    return null;
  }
}

export function buildShareText(result: AssessmentResult, lang: Lang): string {
  const { profile } = composeReport(result, lang);
  const strings = ui[lang];
  const scoreLine = DIMENSIONS.map(
    (d) => `${getDimensionMeta(d, lang).short} ${result.scores[d]}`,
  ).join(' · ');
  const url = publicSiteUrl();
  return [
    strings.shareLine1.replace('{name}', profile.name),
    scoreLine,
    profile.shortDescription,
    strings.shareLine2,
    url ? url : null,
    strings.shareTags,
  ]
    .filter(Boolean)
    .join('\n\n');
}

/** Copies text, falling back to a hidden textarea where the Clipboard API is blocked. */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy path */
  }
  try {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0;';
    document.body.appendChild(area);
    area.select();
    area.setSelectionRange(0, text.length);
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  } catch {
    return false;
  }
}

/**
 * Opens LinkedIn's post composer with the prepared text. There is no public
 * result URL (no backend), so the text is also copied as a fallback.
 */
export async function shareOnLinkedIn(text: string): Promise<{ copied: boolean; opened: boolean }> {
  const copied = await copyText(text);
  const url = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text)}`;
  const win = window.open(url, '_blank', 'noopener,noreferrer');
  return { copied, opened: win !== null };
}

export function slugify(value: string): string {
  return value
    .replace(/İ/g, 'i')
    .replace(/ı/g, 'i')
    .toLowerCase()
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/â/g, 'a')
    .replace(/î/g, 'i')
    .replace(/û/g, 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Renders the share card element to a 1080×1350 PNG and downloads it. */
export async function downloadCardPng(node: HTMLElement, name: string): Promise<void> {
  const { toPng } = await import('html-to-image');
  const dataUrl = await toPng(node, {
    width: SHARE_CARD_WIDTH,
    height: SHARE_CARD_HEIGHT,
    pixelRatio: 1,
    cacheBust: true,
    backgroundColor: '#060a17',
  });
  const link = document.createElement('a');
  link.download = `youframe-${slugify(name)}.png`;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
