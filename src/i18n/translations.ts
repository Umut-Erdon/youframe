import type { Lang } from '../types';

const en = {
  docTitle: 'YOUFRAME — Discover What Makes You, You.',
  docDescription:
    'YOUFRAME — Discover What Makes You, You. Answer 6 questions and explore your personal, professional and digital identity.',

  // Navbar
  homeAria: 'YOUFRAME home',
  restart: 'Restart',
  langAria: 'Language',

  // Landing
  fact1: '6 questions',
  fact2: '60–90 seconds',
  fact3: 'Personalized identity report',
  fact4: 'No registration required',
  eyebrow: 'Identity discovery',
  heroTitleA: 'Discover What ',
  heroTitleB: 'Makes You, You.',
  heroLede:
    'Your identity is more than a title. Explore your personal, professional and digital dimensions through a short interactive experience.',
  discover: 'Discover My Identity',
  viewSaved: 'View my saved result',
  frameLabel: 'YOU',
  dimensionsAria: 'Identity dimensions',
  fineLanding:
    'YOUFRAME is an informal self-reflection experience, not a scientifically validated personality test.',

  // Quiz
  back: 'Back',
  next: 'Next',
  seeResults: 'See my results',
  questionOf: 'Question {n} of {total}',
  questionWord: 'Question',
  ofWord: 'of',
  errChoose: 'Choose an answer to continue.',
  errBuild: 'We couldn’t build your report. Please check your answers and try again.',
  errMissing: 'Some answers are missing.',

  // Analyzing
  analyzingTitle: 'Building your identity profile…',
  analyzingText: 'Looking at how your answers fit together.',
  noResult: 'We couldn’t find your result.',
  startAgain: 'Start again',

  // Results
  yourIdentity: 'Your YOUFRAME identity',
  traitsAria: 'Characteristic traits',
  scoresAria: 'Dimension scores',
  identityShape: 'Your identity shape',
  personalInsight: 'Personal insight',
  devSuggestion: 'Development suggestion',
  shareTitle: 'Share your result',
  shareInfo:
    'Download your card as a 1080×1350 image, or copy a ready-made caption. There is no public page for your result, so your answers stay on this device.',
  creatingImage: 'Creating image…',
  downloadPng: 'Download PNG',
  copyText: 'Copy result text',
  shareLinkedIn: 'Share on LinkedIn',
  resultTextAria: 'Result text',
  okDownload: 'Your share card was downloaded as a PNG.',
  errImage: 'We couldn’t create the image. Please try again.',
  okCopied: 'Result text copied to your clipboard.',
  errCopy: 'Copying was blocked by your browser. Select the text below and copy it manually.',
  liBlockedCopied:
    'Your browser blocked the LinkedIn window, but the text is copied. Paste it into a new post.',
  liBlocked: 'Your browser blocked the LinkedIn window. Use “Copy result text” instead.',
  liOkCopied:
    'LinkedIn opened with your text. It is also copied; attach the PNG card to your post.',
  liOk: 'LinkedIn opened with your text. Attach the PNG card to your post.',
  storageFailed: 'Your browser blocked local storage, so this result won’t be remembered next time.',
  fineResults:
    'YOUFRAME is an informal self-reflection experience, not a scientifically validated personality test. Use it as a conversation starter, not a verdict.',
  restartAssessment: 'Restart assessment',

  // Score card / chart
  scoreAria: '{name} score {value} out of 100',
  chartAria: 'Identity chart.',

  // Share card
  scIdentityProfile: 'Identity profile',
  scMyIdentity: 'My identity is',
  scTagline: 'Discover What Makes You, You.',
  scFooter: 'A short self-reflection experience · youframe',

  // Share text
  shareLine1: 'I just explored my identity with YOUFRAME: {name}.',
  shareLine2: 'Discover what makes you, you. It takes about 60–90 seconds and needs no sign-up.',
  shareTags: '#YOUFRAME #SelfReflection',
} as const;

export type UiKey = keyof typeof en;

const tr: Record<UiKey, string> = {
  docTitle: 'YOUFRAME — Seni Sen Yapan Şeyi Keşfet.',
  docDescription:
    'YOUFRAME — Seni Sen Yapan Şeyi Keşfet. 6 soruyu yanıtla; kişisel, profesyonel ve dijital kimliğini keşfet.',

  homeAria: 'YOUFRAME ana sayfa',
  restart: 'Yeniden başla',
  langAria: 'Dil',

  fact1: '6 soru',
  fact2: '60–90 saniye',
  fact3: 'Kişiselleştirilmiş kimlik raporu',
  fact4: 'Kayıt gerekmez',
  eyebrow: 'Kimlik keşfi',
  heroTitleA: 'Seni ',
  heroTitleB: 'Sen Yapan Şeyi Keşfet.',
  heroLede:
    'Kimliğin bir unvandan çok daha fazlası. Kısa ve etkileşimli bir deneyimle kişisel, profesyonel ve dijital yönlerini keşfet.',
  discover: 'Kimliğimi Keşfet',
  viewSaved: 'Kayıtlı sonucumu gör',
  frameLabel: 'SEN',
  dimensionsAria: 'Kimlik boyutları',
  fineLanding:
    'YOUFRAME, bilimsel olarak doğrulanmış bir kişilik testi değil; gayriresmi bir kendini tanıma deneyimidir.',

  back: 'Geri',
  next: 'İleri',
  seeResults: 'Sonuçlarımı gör',
  questionOf: 'Soru {n} / {total}',
  questionWord: 'Soru',
  ofWord: '/',
  errChoose: 'Devam etmek için bir yanıt seç.',
  errBuild: 'Raporun oluşturulamadı. Lütfen yanıtlarını kontrol edip tekrar dene.',
  errMissing: 'Bazı yanıtlar eksik.',

  analyzingTitle: 'Kimlik profilin oluşturuluyor…',
  analyzingText: 'Yanıtlarının birbirine nasıl uyduğuna bakıyoruz.',
  noResult: 'Sonucun bulunamadı.',
  startAgain: 'Baştan başla',

  yourIdentity: 'Senin YOUFRAME kimliğin',
  traitsAria: 'Karakteristik özellikler',
  scoresAria: 'Boyut puanları',
  identityShape: 'Kimlik şeklin',
  personalInsight: 'Kişisel içgörü',
  devSuggestion: 'Gelişim önerisi',
  shareTitle: 'Sonucunu paylaş',
  shareInfo:
    'Kartını 1080×1350 görsel olarak indir ya da hazır bir paylaşım metni kopyala. Sonucun için herkese açık bir sayfa yoktur; yanıtların bu cihazda kalır.',
  creatingImage: 'Görsel oluşturuluyor…',
  downloadPng: 'PNG indir',
  copyText: 'Sonuç metnini kopyala',
  shareLinkedIn: 'LinkedIn’de paylaş',
  resultTextAria: 'Sonuç metni',
  okDownload: 'Paylaşım kartın PNG olarak indirildi.',
  errImage: 'Görsel oluşturulamadı. Lütfen tekrar dene.',
  okCopied: 'Sonuç metni panoya kopyalandı.',
  errCopy: 'Tarayıcın kopyalamayı engelledi. Aşağıdaki metni seçip elle kopyala.',
  liBlockedCopied:
    'Tarayıcın LinkedIn penceresini engelledi ama metin kopyalandı. Yeni bir gönderiye yapıştırabilirsin.',
  liBlocked: 'Tarayıcın LinkedIn penceresini engelledi. Bunun yerine “Sonuç metnini kopyala” seçeneğini kullan.',
  liOkCopied:
    'LinkedIn metninle birlikte açıldı. Metin ayrıca kopyalandı; PNG kartı gönderine ekle.',
  liOk: 'LinkedIn metninle birlikte açıldı. PNG kartı gönderine ekle.',
  storageFailed:
    'Tarayıcın yerel depolamayı engelledi, bu yüzden sonucun bir sonraki sefer hatırlanmayacak.',
  fineResults:
    'YOUFRAME, bilimsel olarak doğrulanmış bir kişilik testi değil; gayriresmi bir kendini tanıma deneyimidir. Bir hüküm olarak değil, sohbet başlatıcı olarak kullan.',
  restartAssessment: 'Testi yeniden başlat',

  scoreAria: '{name} puanı: 100 üzerinden {value}',
  chartAria: 'Kimlik grafiği.',

  scIdentityProfile: 'Kimlik profili',
  scMyIdentity: 'Benim kimliğim',
  scTagline: 'Seni Sen Yapan Şeyi Keşfet.',
  scFooter: 'Kısa bir kendini tanıma deneyimi · youframe',

  shareLine1: 'YOUFRAME ile kimliğimi keşfettim: {name}.',
  shareLine2: 'Seni sen yapan şeyi keşfet. Yaklaşık 60–90 saniye sürer, kayıt gerekmez.',
  shareTags: '#YOUFRAME #KendiniTanı',
};

export const ui: Record<Lang, Record<UiKey, string>> = { en, tr };
