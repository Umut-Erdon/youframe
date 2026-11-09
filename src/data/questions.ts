import type { Lang, Question } from '../types';

/**
 * Each answer contributes to the three dimensions (0–3) and has an affinity
 * with one or more identity profiles. Nothing here is random.
 */
export const questions: Question[] = [
  {
    id: 'motivation',
    prompt: 'What motivates you the most?',
    hint: 'Pick the one that feels most like you, not the one that sounds best.',
    options: [
      {
        id: 'create',
        label: 'Creating something that didn’t exist before',
        detail: 'Ideas, products, stories, systems',
        scores: { personal: 2, professional: 1, digital: 2 },
        affinity: { 'strategic-creator': 3, 'adaptive-builder': 1 },
      },
      {
        id: 'understand',
        label: 'Understanding how things truly work',
        detail: 'Patterns, causes, first principles',
        scores: { personal: 1, professional: 1, digital: 3 },
        affinity: { 'analytical-explorer': 3, 'independent-thinker': 1 },
      },
      {
        id: 'people',
        label: 'Helping people grow and succeed together',
        detail: 'Impact that is shared',
        scores: { personal: 3, professional: 2, digital: 0 },
        affinity: { 'collaborative-visionary': 3, 'adaptive-builder': 1 },
      },
      {
        id: 'freedom',
        label: 'Earning the freedom to do things my own way',
        detail: 'Autonomy and mastery',
        scores: { personal: 3, professional: 1, digital: 1 },
        affinity: { 'independent-thinker': 3, 'strategic-creator': 1 },
      },
    ],
  },
  {
    id: 'problem',
    prompt: 'When facing a difficult problem, what do you usually do first?',
    hint: 'Think about your first instinct, before you overthink it.',
    options: [
      {
        id: 'strategy',
        label: 'Map the situation and design a strategy',
        detail: 'Goals, steps, priorities',
        scores: { personal: 1, professional: 3, digital: 1 },
        affinity: { 'strategic-creator': 3, 'analytical-explorer': 1 },
      },
      {
        id: 'research',
        label: 'Research and gather evidence before deciding',
        detail: 'Data, sources, comparisons',
        scores: { personal: 0, professional: 2, digital: 3 },
        affinity: { 'analytical-explorer': 3, 'independent-thinker': 1 },
      },
      {
        id: 'experiment',
        label: 'Try a quick experiment and adjust as I go',
        detail: 'Prototype, test, learn',
        scores: { personal: 1, professional: 2, digital: 2 },
        affinity: { 'adaptive-builder': 3, 'strategic-creator': 1 },
      },
      {
        id: 'talk',
        label: 'Talk it through with people I trust',
        detail: 'Perspectives and shared thinking',
        scores: { personal: 2, professional: 2, digital: 0 },
        affinity: { 'collaborative-visionary': 3, 'adaptive-builder': 1 },
      },
    ],
  },
  {
    id: 'environment',
    prompt: 'What kind of environment helps you perform at your best?',
    hint: 'Where do you do your clearest thinking?',
    options: [
      {
        id: 'quiet',
        label: 'A quiet space with deep, uninterrupted focus',
        detail: 'Solitude and depth',
        scores: { personal: 3, professional: 1, digital: 1 },
        affinity: { 'independent-thinker': 3, 'analytical-explorer': 1 },
      },
      {
        id: 'team',
        label: 'A lively team that bounces ideas around',
        detail: 'Energy from other people',
        scores: { personal: 2, professional: 3, digital: 0 },
        affinity: { 'collaborative-visionary': 3, 'strategic-creator': 1 },
      },
      {
        id: 'fast',
        label: 'A flexible setup where I can build and ship fast',
        detail: 'Tools, speed, momentum',
        scores: { personal: 1, professional: 2, digital: 3 },
        affinity: { 'adaptive-builder': 3, 'strategic-creator': 1 },
      },
      {
        id: 'inspiring',
        label: 'An inspiring space with room to experiment',
        detail: 'Freedom to explore ideas',
        scores: { personal: 2, professional: 1, digital: 2 },
        affinity: { 'strategic-creator': 3, 'analytical-explorer': 1 },
      },
    ],
  },
  {
    id: 'learning',
    prompt: 'How do you prefer learning something new?',
    hint: 'Choose the way that actually sticks for you.',
    options: [
      {
        id: 'read',
        label: 'Reading and researching in depth',
        detail: 'Books, papers, long-form sources',
        scores: { personal: 2, professional: 1, digital: 2 },
        affinity: { 'analytical-explorer': 2, 'independent-thinker': 2 },
      },
      {
        id: 'build',
        label: 'Learning by building something hands-on',
        detail: 'Projects over theory',
        scores: { personal: 1, professional: 2, digital: 3 },
        affinity: { 'adaptive-builder': 3, 'strategic-creator': 1 },
      },
      {
        id: 'discuss',
        label: 'Discussing with others or being mentored',
        detail: 'Conversation and feedback',
        scores: { personal: 2, professional: 3, digital: 0 },
        affinity: { 'collaborative-visionary': 3, 'adaptive-builder': 1 },
      },
      {
        id: 'plan',
        label: 'Following a structured plan toward a clear goal',
        detail: 'Milestones and progress',
        scores: { personal: 0, professional: 3, digital: 1 },
        affinity: { 'strategic-creator': 2, 'analytical-explorer': 1, 'adaptive-builder': 1 },
      },
    ],
  },
  {
    id: 'technology',
    prompt: 'What role does technology play in your daily life?',
    hint: 'Be honest about how you really use it.',
    options: [
      {
        id: 'toolkit',
        label: 'A creative toolkit for making and sharing ideas',
        detail: 'Design, writing, building, publishing',
        scores: { personal: 1, professional: 1, digital: 3 },
        affinity: { 'strategic-creator': 3, 'adaptive-builder': 1 },
      },
      {
        id: 'lens',
        label: 'A lens I constantly use to explore and question',
        detail: 'Search, data, new tools',
        scores: { personal: 1, professional: 1, digital: 3 },
        affinity: { 'analytical-explorer': 3, 'independent-thinker': 1 },
      },
      {
        id: 'bridge',
        label: 'A bridge to people, communities and conversations',
        detail: 'Connection and collaboration',
        scores: { personal: 2, professional: 2, digital: 2 },
        affinity: { 'collaborative-visionary': 3, 'adaptive-builder': 1 },
      },
      {
        id: 'intentional',
        label: 'A tool I use deliberately and keep in its place',
        detail: 'Intentional, often offline',
        scores: { personal: 3, professional: 1, digital: 0 },
        affinity: { 'independent-thinker': 3, 'collaborative-visionary': 1 },
      },
    ],
  },
  {
    id: 'satisfaction',
    prompt: 'What gives you the greatest satisfaction?',
    hint: 'Think about the moments you remember afterward.',
    options: [
      {
        id: 'idea',
        label: 'Seeing a bold idea come to life',
        detail: 'From vision to reality',
        scores: { personal: 1, professional: 2, digital: 2 },
        affinity: { 'strategic-creator': 3, 'adaptive-builder': 1 },
      },
      {
        id: 'solve',
        label: 'Cracking a complex problem others couldn’t',
        detail: 'Clarity from complexity',
        scores: { personal: 1, professional: 2, digital: 3 },
        affinity: { 'analytical-explorer': 3, 'independent-thinker': 1 },
      },
      {
        id: 'together',
        label: 'Bringing people together around a shared purpose',
        detail: 'Alignment and belonging',
        scores: { personal: 3, professional: 2, digital: 1 },
        affinity: { 'collaborative-visionary': 3, 'independent-thinker': 1 },
      },
      {
        id: 'deliver',
        label: 'Delivering something people actually use',
        detail: 'Real-world results',
        scores: { personal: 1, professional: 3, digital: 2 },
        affinity: { 'adaptive-builder': 3, 'collaborative-visionary': 1 },
      },
    ],
  },
];

/* ---------------------------------------------------------------------------
   Turkish copy. Keyed by question id → { prompt, hint, options by option id }.
   Scores and affinities always come from the data above, so scoring is
   identical in both languages.
   ------------------------------------------------------------------------ */

interface QuestionText {
  prompt: string;
  hint: string;
  options: Record<string, { label: string; detail: string }>;
}

const tr: Record<string, QuestionText> = {
  motivation: {
    prompt: 'Seni en çok ne motive eder?',
    hint: 'Kulağa en iyi gelen değil, sana en çok benzeyen seçeneği işaretle.',
    options: {
      create: { label: 'Daha önce var olmayan bir şey yaratmak', detail: 'Fikirler, ürünler, hikâyeler, sistemler' },
      understand: { label: 'Şeylerin gerçekte nasıl işlediğini anlamak', detail: 'Örüntüler, nedenler, ilk ilkeler' },
      people: { label: 'İnsanların birlikte gelişmesine ve başarmasına yardım etmek', detail: 'Paylaşılan etki' },
      freedom: { label: 'İşleri kendi yöntemimle yapma özgürlüğünü kazanmak', detail: 'Özerklik ve ustalık' },
    },
  },
  problem: {
    prompt: 'Zor bir problemle karşılaştığında genellikle önce ne yaparsın?',
    hint: 'Fazla düşünmeden önceki ilk içgüdünü hatırla.',
    options: {
      strategy: { label: 'Durumu haritalayıp bir strateji tasarlarım', detail: 'Hedefler, adımlar, öncelikler' },
      research: { label: 'Karar vermeden önce araştırır, kanıt toplarım', detail: 'Veri, kaynaklar, karşılaştırmalar' },
      experiment: { label: 'Hızlı bir deney yapar, ilerledikçe ayarlarım', detail: 'Prototip, test, öğrenme' },
      talk: { label: 'Güvendiğim insanlarla konuşurum', detail: 'Farklı bakış açıları ve ortak düşünme' },
    },
  },
  environment: {
    prompt: 'Hangi ortam en iyi performansı göstermene yardımcı olur?',
    hint: 'En net nerede düşünürsün?',
    options: {
      quiet: { label: 'Kesintisiz, derin odaklanmaya uygun sessiz bir alan', detail: 'Yalnızlık ve derinlik' },
      team: { label: 'Fikirlerin havada uçuştuğu canlı bir ekip', detail: 'Diğer insanlardan gelen enerji' },
      fast: { label: 'Hızlıca üretip yayına alabileceğim esnek bir düzen', detail: 'Araçlar, hız, ivme' },
      inspiring: { label: 'Deney yapmaya yer olan ilham verici bir alan', detail: 'Fikirleri keşfetme özgürlüğü' },
    },
  },
  learning: {
    prompt: 'Yeni bir şeyi nasıl öğrenmeyi tercih edersin?',
    hint: 'Gerçekten aklında kalan yolu seç.',
    options: {
      read: { label: 'Derinlemesine okuyarak ve araştırarak', detail: 'Kitaplar, makaleler, uzun içerikler' },
      build: { label: 'Uygulamalı bir şey inşa ederek', detail: 'Teori yerine projeler' },
      discuss: { label: 'Başkalarıyla tartışarak veya mentörlük alarak', detail: 'Sohbet ve geri bildirim' },
      plan: { label: 'Net bir hedefe giden yapılandırılmış bir planı izleyerek', detail: 'Kilometre taşları ve ilerleme' },
    },
  },
  technology: {
    prompt: 'Teknoloji günlük hayatında nasıl bir rol oynuyor?',
    hint: 'Onu gerçekte nasıl kullandığın konusunda dürüst ol.',
    options: {
      toolkit: { label: 'Fikir üretmek ve paylaşmak için yaratıcı bir araç seti', detail: 'Tasarım, yazı, geliştirme, yayıncılık' },
      lens: { label: 'Keşfetmek ve sorgulamak için sürekli kullandığım bir mercek', detail: 'Arama, veri, yeni araçlar' },
      bridge: { label: 'İnsanlara, topluluklara ve sohbetlere açılan bir köprü', detail: 'Bağlantı ve iş birliği' },
      intentional: { label: 'Bilinçli kullandığım ve yerinde tuttuğum bir araç', detail: 'Kasıtlı, çoğu zaman çevrimdışı' },
    },
  },
  satisfaction: {
    prompt: 'Sana en büyük tatmini ne verir?',
    hint: 'Sonradan hatırladığın anları düşün.',
    options: {
      idea: { label: 'Cesur bir fikrin hayata geçtiğini görmek', detail: 'Vizyondan gerçeğe' },
      solve: { label: 'Başkalarının çözemediği karmaşık bir problemi çözmek', detail: 'Karmaşıklıktan netliğe' },
      together: { label: 'İnsanları ortak bir amaç etrafında bir araya getirmek', detail: 'Uyum ve aidiyet' },
      deliver: { label: 'İnsanların gerçekten kullandığı bir şey ortaya koymak', detail: 'Gerçek dünya sonuçları' },
    },
  },
};

/** Questions with prompt/hint/labels in the requested language. */
export function getQuestions(lang: Lang): Question[] {
  if (lang === 'en') return questions;
  return questions.map((q) => {
    const text = tr[q.id];
    return {
      ...q,
      prompt: text.prompt,
      hint: text.hint,
      options: q.options.map((o) => ({ ...o, ...text.options[o.id] })),
    };
  });
}
