import type { Lang, Localized, Profile, ProfileId } from '../types';

export const PROFILE_ORDER: ProfileId[] = [
  'strategic-creator',
  'analytical-explorer',
  'adaptive-builder',
  'independent-thinker',
  'collaborative-visionary',
];

interface RawProfile {
  name: Localized;
  shortDescription: Localized;
  description: Localized;
  traits: Localized<[string, string, string]>;
  insight: Localized;
  suggestion: Localized;
}

const raw: Record<ProfileId, RawProfile> = {
  'strategic-creator': {
    name: { en: 'The Strategic Creator', tr: 'Stratejik Yaratıcı' },
    shortDescription: {
      en: 'You pair bold ideas with a plan to make them real.',
      tr: 'Cesur fikirleri, onları gerçeğe dönüştürecek bir planla buluşturuyorsun.',
    },
    description: {
      en: 'You see possibilities others miss and instinctively think about how to shape them into something that works. Imagination gives you direction, and structure gives you momentum.',
      tr: 'Başkalarının gözden kaçırdığı olasılıkları görüyor ve içgüdüsel olarak onları işe yarayan bir şeye nasıl dönüştüreceğini düşünüyorsun. Hayal gücü sana yön, yapı ise ivme kazandırıyor.',
    },
    traits: {
      en: ['Visionary', 'Structured', 'Inventive'],
      tr: ['Vizyoner', 'Planlı', 'Yenilikçi'],
    },
    insight: {
      en: 'Your answers suggest you are happiest when an idea has both room to breathe and a path to follow. You tend to start from what could exist, then work backward to the steps that get you there.',
      tr: 'Yanıtların, bir fikrin hem nefes alacak alana hem de izlenecek bir yola sahip olduğunda en mutlu olduğunu gösteriyor. Var olabilecek olandan yola çıkıp oraya götürecek adımlara geriye doğru ilerleme eğilimindesin.',
    },
    suggestion: {
      en: 'Protect time to explore before you plan, and share early drafts sooner. Feedback on a rough version often improves a strategy faster than more planning.',
      tr: 'Plan yapmadan önce keşfetmeye zaman ayır ve ilk taslaklarını daha erken paylaş. Kaba bir taslağa gelen geri bildirim, bir stratejiyi çoğu zaman daha fazla planlamadan daha hızlı geliştirir.',
    },
  },
  'analytical-explorer': {
    name: { en: 'The Analytical Explorer', tr: 'Analitik Kâşif' },
    shortDescription: {
      en: 'You follow curiosity until things make sense.',
      tr: 'Her şey anlam kazanana kadar merakını takip ediyorsun.',
    },
    description: {
      en: 'You are driven to understand how things work, and you trust evidence, patterns and careful investigation. Complex problems feel like invitations rather than obstacles.',
      tr: 'Şeylerin nasıl işlediğini anlamak seni harekete geçiriyor; kanıta, örüntülere ve titiz araştırmaya güveniyorsun. Karmaşık problemler sana engel değil, davet gibi geliyor.',
    },
    traits: {
      en: ['Curious', 'Analytical', 'Thorough'],
      tr: ['Meraklı', 'Analitik', 'Titiz'],
    },
    insight: {
      en: 'Your answers point to someone who builds confidence through understanding. You like to look closely before you commit, and technology often acts as your lens for exploring.',
      tr: 'Yanıtların, özgüvenini anlayarak inşa eden birine işaret ediyor. Karar vermeden önce yakından bakmayı seviyorsun ve teknoloji çoğu zaman keşfetmek için kullandığın mercek oluyor.',
    },
    suggestion: {
      en: 'Set a decision deadline for each investigation. Turning your findings into one small action keeps your curiosity moving the world, not only your notes.',
      tr: 'Her araştırma için bir karar tarihi belirle. Bulgularını küçük bir eyleme dönüştürmek, merakının yalnızca notlarını değil dünyayı da ilerletmesini sağlar.',
    },
  },
  'adaptive-builder': {
    name: { en: 'The Adaptive Builder', tr: 'Uyumlu Yapıcı' },
    shortDescription: {
      en: 'You learn by doing and ship what works.',
      tr: 'Yaparak öğreniyor ve işe yarayanı hayata geçiriyorsun.',
    },
    description: {
      en: 'You prefer momentum to perfection. You try things, learn from what happens and adjust quickly, which makes you dependable when plans change.',
      tr: 'Mükemmellik yerine ivmeyi tercih ediyorsun. Bir şeyler deniyor, olandan öğreniyor ve hızla ayak uyduruyorsun; bu da planlar değiştiğinde seni güvenilir kılıyor.',
    },
    traits: {
      en: ['Practical', 'Adaptable', 'Results-driven'],
      tr: ['Pratik', 'Uyumlu', 'Sonuç odaklı'],
    },
    insight: {
      en: 'Your answers show a preference for hands-on progress. You trust experiments over speculation and take real satisfaction in work that other people actually use.',
      tr: 'Yanıtların, elle tutulur ilerlemeyi tercih ettiğini gösteriyor. Varsayımlar yerine deneylere güveniyor ve başkalarının gerçekten kullandığı işlerden gerçek bir tatmin alıyorsun.',
    },
    suggestion: {
      en: 'Step back now and then to choose a direction on purpose. A clear long-term theme helps your fast iterations add up to something larger.',
      tr: 'Ara sıra geri çekilip yönünü bilinçli olarak seç. Net bir uzun vadeli tema, hızlı denemelerinin daha büyük bir bütüne dönüşmesine yardımcı olur.',
    },
  },
  'independent-thinker': {
    name: { en: 'The Independent Thinker', tr: 'Bağımsız Düşünür' },
    shortDescription: {
      en: 'You do your best work guided by your own compass.',
      tr: 'En iyi işini kendi pusulanın rehberliğinde yapıyorsun.',
    },
    description: {
      en: 'You value depth, autonomy and personal standards. You think things through carefully and prefer to move in a direction you have chosen yourself.',
      tr: 'Derinliğe, özerkliğe ve kişisel standartlara değer veriyorsun. Konuları dikkatle düşünüyor ve kendi seçtiğin yönde ilerlemeyi tercih ediyorsun.',
    },
    traits: {
      en: ['Reflective', 'Self-directed', 'Principled'],
      tr: ['Düşünceli', 'Özyönelimli', 'İlkeli'],
    },
    insight: {
      en: 'Your answers suggest you recharge through focus and form conclusions on your own terms. Your values are strong, and they quietly shape how you work and how you use technology.',
      tr: 'Yanıtların, odaklanarak enerji topladığını ve sonuçlara kendi koşullarında vardığını gösteriyor. Değerlerin güçlü ve bunlar nasıl çalıştığını ve teknolojiyi nasıl kullandığını sessizce şekillendiriyor.',
    },
    suggestion: {
      en: 'Invite one trusted person into your thinking earlier than feels natural. Outside perspectives can sharpen your ideas without costing you independence.',
      tr: 'Güvendiğin bir kişiyi düşünce sürecine doğal gelenden daha erken dahil et. Dışarıdan bakış açıları, bağımsızlığından ödün vermeden fikirlerini keskinleştirebilir.',
    },
  },
  'collaborative-visionary': {
    name: { en: 'The Collaborative Visionary', tr: 'İş Birlikçi Vizyoner' },
    shortDescription: {
      en: 'You turn shared purpose into shared progress.',
      tr: 'Ortak amacı ortak ilerlemeye dönüştürüyorsun.',
    },
    description: {
      en: 'You are energized by people, possibilities and purpose. You tend to see how individual strengths fit together, and you help others see where the group could go.',
      tr: 'İnsanlar, olasılıklar ve amaç seni enerjiyle dolduruyor. Bireysel güçlerin nasıl bir araya geldiğini görme eğilimindesin ve başkalarının grubun nereye gidebileceğini görmesine yardım ediyorsun.',
    },
    traits: {
      en: ['Empathetic', 'Inspiring', 'Connected'],
      tr: ['Empatik', 'İlham verici', 'Bağlantılı'],
    },
    insight: {
      en: 'Your answers show that conversation and shared goals fuel you. You learn and solve problems best with others, and meaningful impact matters more to you than individual credit.',
      tr: 'Yanıtların, sohbetin ve ortak hedeflerin seni beslediğini gösteriyor. Başkalarıyla birlikte en iyi öğreniyor ve sorunları en iyi onlarla çözüyorsun; anlamlı etki senin için bireysel takdirden daha önemli.',
    },
    suggestion: {
      en: 'Pair your big picture with a few concrete milestones. Making the next step visible helps people turn your inspiration into action.',
      tr: 'Büyük resmini birkaç somut kilometre taşıyla eşleştir. Bir sonraki adımı görünür kılmak, insanların ilhamını eyleme dönüştürmesine yardımcı olur.',
    },
  },
};

export function getProfile(id: ProfileId, lang: Lang): Profile {
  const r = raw[id];
  return {
    id,
    name: r.name[lang],
    shortDescription: r.shortDescription[lang],
    description: r.description[lang],
    traits: r.traits[lang],
    insight: r.insight[lang],
    suggestion: r.suggestion[lang],
  };
}
