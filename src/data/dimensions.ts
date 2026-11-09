import type { Dimension, Lang, Localized } from '../types';

export interface DimensionMeta {
  label: string;
  short: string;
  color: string;
  description: string;
  strength: string;
  growth: string;
}

export const DIMENSIONS: Dimension[] = ['personal', 'professional', 'digital'];

interface RawMeta {
  color: string;
  label: Localized;
  short: Localized;
  description: Localized;
  strength: Localized;
  growth: Localized;
}

const raw: Record<Dimension, RawMeta> = {
  personal: {
    color: '#c084fc',
    label: { en: 'Personal Identity', tr: 'Kişisel Kimlik' },
    short: { en: 'Personal', tr: 'Kişisel' },
    description: {
      en: 'Your values, motivations and the way you make sense of the world.',
      tr: 'Değerlerin, motivasyonların ve dünyayı anlamlandırma biçimin.',
    },
    strength: {
      en: 'Your personal dimension leads: your values and inner compass are your clearest source of direction.',
      tr: 'Kişisel boyutun öne çıkıyor: değerlerin ve iç pusulan, yönünü bulmanın en net kaynağın.',
    },
    growth: {
      en: 'Your personal dimension has the most room to grow, so set aside time to reflect on what you value, not only on what you produce.',
      tr: 'Gelişime en açık alanın kişisel boyutun; bu yüzden yalnızca ne ürettiğini değil, neye değer verdiğini düşünmeye de zaman ayır.',
    },
  },
  professional: {
    color: '#60a5fa',
    label: { en: 'Professional Identity', tr: 'Profesyonel Kimlik' },
    short: { en: 'Professional', tr: 'Profesyonel' },
    description: {
      en: 'How you work, collaborate and turn ideas into results.',
      tr: 'Nasıl çalıştığın, nasıl iş birliği yaptığın ve fikirleri sonuca nasıl dönüştürdüğün.',
    },
    strength: {
      en: 'Your professional dimension leads: you naturally think in terms of outcomes, roles and progress.',
      tr: 'Profesyonel boyutun öne çıkıyor: doğal olarak sonuçlar, roller ve ilerleme açısından düşünüyorsun.',
    },
    growth: {
      en: 'Your professional dimension has the most room to grow, so practice turning ideas into clear commitments and visible outcomes.',
      tr: 'Gelişime en açık alanın profesyonel boyutun; bu yüzden fikirleri net taahhütlere ve görünür sonuçlara dönüştürmeyi alıştır.',
    },
  },
  digital: {
    color: '#2dd4bf',
    label: { en: 'Digital Identity', tr: 'Dijital Kimlik' },
    short: { en: 'Digital', tr: 'Dijital' },
    description: {
      en: 'How you create, learn and show up in connected spaces.',
      tr: 'Bağlantılı alanlarda nasıl ürettiğin, öğrendiğin ve kendini nasıl var ettiğin.',
    },
    strength: {
      en: 'Your digital dimension leads: you are comfortable using technology to create, learn and explore.',
      tr: 'Dijital boyutun öne çıkıyor: üretmek, öğrenmek ve keşfetmek için teknolojiyi rahatça kullanıyorsun.',
    },
    growth: {
      en: 'Your digital dimension has the most room to grow, so try one new tool or online space that supports a goal you care about.',
      tr: 'Gelişime en açık alanın dijital boyutun; bu yüzden önemsediğin bir hedefi destekleyen yeni bir araç ya da çevrimiçi alan dene.',
    },
  },
};

export function getDimensionMeta(dimension: Dimension, lang: Lang): DimensionMeta {
  const r = raw[dimension];
  return {
    color: r.color,
    label: r.label[lang],
    short: r.short[lang],
    description: r.description[lang],
    strength: r.strength[lang],
    growth: r.growth[lang],
  };
}
