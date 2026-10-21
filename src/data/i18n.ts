export type Language = "en" | "ar" | "fr" | "zh";

export interface LanguageMeta {
  code: Language;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
  speechLang: string;
}

export const languages: Record<Language, LanguageMeta> = {
  en: { code: "en", name: "English", nativeName: "English", dir: "ltr", speechLang: "en-US" },
  ar: { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl", speechLang: "ar-TN" },
  fr: { code: "fr", name: "French", nativeName: "Français", dir: "ltr", speechLang: "fr-FR" },
  zh: { code: "zh", name: "Chinese", nativeName: "中文", dir: "ltr", speechLang: "zh-CN" },
};

export interface LocalizedStoryContent {
  chapterTitle: string;
  title: string;
  subtitle: string;
  body: string;
  fact: string;
  location: string;
  coordinates: string;
  readingTime: string;
  heroAlt: string;
  galleryAlt?: string[];
  videoTitle?: string;
  videoLanguage?: string;
  videoTranscript?: string;
  videoCaptions?: string;
}

export interface SiteDictionary {
  brand: { country: string; beyond: string };
  nav: {
    artwork: string;
    stories: string;
    voices: string;
    atlas: string;
    about: string;
    skipLink: string;
    menuOpen: string;
    menuClose: string;
    langSelectLabel: string;
    primaryNav: string;
  };
  hero: {
    contextBadge: string;
    posterAlt: string;
    contextDate: string;
    titleMain: string;
    titleEmp: string;
    tagline: string;
    intro: string;
    exploreBtn: string;
    artworkBtn: string;
    posterCap1: string;
    posterCap2: string;
    scrollPrompt: string;
  };
  threshold: {
    tag: string;
    title1: string;
    title2: string;
    note: string;
  };
  artwork: {
    tag: string;
    entryCount: string;
    title: string;
    desc: string;
    canvasAria: string;
    storyIndexAria: string;
    openStoryAria: string;
  };
  storiesIntro: {
    tag: string;
    title1: string;
    title2: string;
    desc1: string;
    desc2: string;
  };
  ancient: {
    tag: string;
    title: string;
    lead: string;
    readCarthageBtn: string;
    compareDesc: string;
    engravingLabel: string;
    carthageTodayLabel: string;
    romanAfricaTag: string;
    romanAfricaTitle: string;
    romanAfricaDesc: string;
    elJemBtn: string;
  };
  factInterlude: {
    tag: string;
    text: string;
    note: string;
  };
  cities: {
    tag: string;
    title: string;
    medinaLead: string;
    medinaBtn: string;
    kairouanTag: string;
    kairouanTitle: string;
    kairouanBtn: string;
    sidiTag: string;
    sidiTitle: string;
    sidiBtn: string;
  };
  land: {
    tag: string;
    title: string;
    desc: string;
    btn: string;
  };
  olives: {
    tag: string;
    title: string;
    desc: string;
    btn: string;
  };
  hands: {
    tag: string;
    title1: string;
    title2: string;
    lead: string;
    btn: string;
    docRoom: string;
    docTitle: string;
    docSubtitle: string;
  };
  clothing: {
    tag: string;
    title: string;
    lead: string;
    btn: string;
  };
  table: {
    tag: string;
    title: string;
    lead: string;
    quote: string;
    btn: string;
  };
  living: {
    tag: string;
    title: string;
    lead: string;
    btn: string;
  };
  voices: {
    tag: string;
    title: string;
    playAria: string;
    stopAria: string;
    sampleTitle: string;
    voiceMeta: string;
    note: string;
  };
  atlas: {
    tag: string;
    title: string;
    desc: string;
    mapAria: string;
  };
  closing: {
    tag: string;
    quote: string;
    title1: string;
    title2: string;
    imageAlt: string;
  };
  footer: {
    leadTag: string;
    leadTitle1: string;
    leadTitle2: string;
    about1: string;
    about2: string;
    creditsSummary: string;
    recordsSuffix: string;
  };
  dialog: {
    close: string;
    readSuffix: string;
    listen: string;
    stop: string;
    voiceBadge: string;
    sourcesTitle: string;
    place: string;
    coordinates: string;
    reference: string;
  };
  docVideo: {
    readTranscript: string;
    hideTranscript: string;
    transcriptHeading: string;
    transcriptNote: string;
    browserWarning: string;
  };
}

export const dictionaries: Record<Language, SiteDictionary> = {
  en: {
    brand: { country: "تونس", beyond: "Beyond the Frame" },
    nav: {
      artwork: "The artwork",
      stories: "Stories",
      voices: "Listen",
      atlas: "Atlas",
      about: "About",
      skipLink: "Skip to cultural stories",
      menuOpen: "Menu",
      menuClose: "Close",
      langSelectLabel: "Select language",
      primaryNav: "Primary navigation",
    },
    hero: {
      contextBadge: "A cultural exhibition",
      contextDate: "ENSIT · Tunisia · 2026",
      titleMain: "Tunisia",
      titleEmp: "Beyond the Frame",
      tagline: "One country. A thousand stories.",
      intro: "From the ancient shores of Carthage to the villages of the Sahara, every corner of Tunisia carries a story. Step through the artwork and meet the people, places and living traditions that shape our home.",
      exploreBtn: "Explore the stories",
      artworkBtn: "Enter the artwork",
      posterCap1: "The cultural poster",
      posterCap2: "AI-assisted artwork · The Architects",
      posterAlt: "Illustrated cultural poster combining Hannibal, Carthage, Kairouan Great Mosque, El Jem amphitheatre, Sidi Bou Said, traditional dress, couscous, pottery, carpets, and southern architecture",
      scrollPrompt: "Cross the frame",
    },
    threshold: {
      tag: "See · Explore · Experience",
      title1: "The artwork is the invitation.",
      title2: "The people are the story.",
      note: "Real places. Real hands. Real histories.",
    },
    artwork: {
      tag: "Discover the artwork",
      entryCount: "11 points of entry",
      title: "Every detail opens a door.",
      desc: "Select a marker on the poster or use the photographic index. Both lead to the same complete stories.",
      canvasAria: "Interactive cultural poster",
      storyIndexAria: "Stories in the poster",
      openStoryAria: "Open story:",
    },
    storiesIntro: {
      tag: "The stories of Tunisia",
      title1: "A small country",
      title2: "with a long memory.",
      desc1: "Tunisia has always faced outward—toward Africa, the Mediterranean and the wider world.",
      desc2: "Six chapters follow the traces left in stone, earth, cloth, music and shared meals.",
    },
    ancient: {
      tag: "Before the empires",
      title: "The sea remembers.",
      lead: "Carthage was a city of sailors, traders, makers and diplomats long before its ruins became an image.",
      readCarthageBtn: "Read the story of Carthage",
      compareDesc: "Slide between a nineteenth-century European engraving and the archaeological landscape today. They are not aligned photographs of the same viewpoint; together they show how every era frames the past differently.",
      engravingLabel: "1836 engraving",
      carthageTodayLabel: "Carthage today",
      romanAfricaTag: "Roman Africa",
      romanAfricaTitle: "Stone built to hold a city’s roar.",
      romanAfricaDesc: "At El Jem, engineering and spectacle still rise above the modern town. At the Bardo, mosaics preserve a different intimacy: fish, boats, food and the rhythms of ordinary life.",
      elJemBtn: "Step inside El Jem",
    },
    factInterlude: {
      tag: "Did you know?",
      text: "The word Africa may first have named the land around ancient Carthage before it came to name a continent.",
      note: "Its exact linguistic origin remains debated by historians.",
    },
    cities: {
      tag: "Cities of memory",
      title: "Follow the light through the medina.",
      medinaLead: "The Medina of Tunis is not a backdrop. It is a lived city of homes, workshops, mosques, schools and neighbours.",
      medinaBtn: "Walk into the Medina",
      kairouanTag: "Courtyard, column, shade",
      kairouanTitle: "Kairouan",
      kairouanBtn: "Enter the Great Mosque story",
      sidiTag: "Threshold, colour, sea",
      sidiTitle: "Sidi Bou Said",
      sidiBtn: "Read beyond the blue door",
    },
    land: {
      tag: "The land and its people",
      title: "Built with the climate.",
      desc: "In the south, earth architecture answers heat, distance and movement. In the olive country, cultivation follows a different rhythm across north, Sahel, Sfax and farther south.",
      btn: "Travel south",
    },
    olives: {
      tag: "Across Tunisia",
      title: "Under the olive tree",
      desc: "The olive is not only Cap Bon. Groves shape the Sahel, the vast agricultural landscape of Sfax, northern hills and southern ground. The harvest is ecology, labour, trade and family memory at once.",
      btn: "Explore the olive story",
    },
    hands: {
      tag: "Made by hand",
      title1: "Not just the object.",
      title2: "The person who makes it.",
      lead: "Technique lives in posture, pressure and repetition—the movements one pair of hands teaches another.",
      btn: "Meet the hands that remember",
      docRoom: "Documentary room",
      docTitle: "Earth, fire, memory",
      docSubtitle: "Women potters of Sejnane · 1:32",
    },
    clothing: {
      tag: "Worn histories",
      title: "A country cannot be dressed in one costume.",
      lead: "Jebba, sefsari, barnous, chechia, wedding dress: each carries a region, an occasion and a chain of skilled labour.",
      btn: "Explore regional dress",
    },
    table: {
      tag: "At the Tunisian table",
      title: "Food is a gathering.",
      lead: "Before the plate comes work: peppers drying in the sun, grain rolled by hand, broth steaming, oil poured, a table made ready for others.",
      quote: "“It is prepared together, offered and remembered.”",
      btn: "Sit at the table",
    },
    living: {
      tag: "A culture still alive",
      title: "Heritage is not a display case.",
      lead: "Languages, Malouf, festivals, contemporary design and renewed craft practices keep the inheritance moving. Young Tunisians do not merely preserve culture. They reinterpret it.",
      btn: "Listen to a living culture",
    },
    voices: {
      tag: "Listen to Tunisia",
      title: "Let the story meet your ears.",
      playAria: "Play browser narration of the Medina story",
      stopAria: "Stop browser narration",
      sampleTitle: "The medina is alive",
      voiceMeta: "English · Synthesized browser voice · Optional",
      note: "Follow the story while your device reads. This is clearly labeled synthesized speech—not a human recording.",
    },
    atlas: {
      tag: "Cultural atlas",
      title: "Every story has a place.",
      desc: "Geography is not an index. It explains why architecture, materials, food and daily life differ across the country.",
      mapAria: "A geographic guide locating twelve featured Tunisian places; equivalent place buttons appear alongside.",
    },
    closing: {
      tag: "A country is more than its borders.",
      quote: "It lives in the hands that shape its crafts, in the stories passed between generations, in the places that remember, and in the people who carry those memories forward.",
      title1: "This is Tunisia.",
      title2: "And its story continues.",
      imageAlt: "A Tunisian woman sorting fresh olives after harvest",
    },
    footer: {
      leadTag: "Thank you for discovering our home.",
      leadTitle1: "Created with Love by",
      leadTitle2: "The Architects",
      about1: "This independent cultural experience accompanies a poster created by a student team from ENSIT, Tunisia, for the GCD4F 2026 Global Finals in Beijing.",
      about2: "Photography and film are authentic, locally hosted and individually credited. Historical interpretation links to source institutions inside each story.",
      creditsSummary: "Photography, film and license credits",
      recordsSuffix: "records",
    },
    dialog: {
      close: "Close story",
      readSuffix: "read",
      listen: "Listen to this story",
      stop: "Stop narration",
      voiceBadge: "Optional synthesized English voice",
      sourcesTitle: "Sources and place",
      place: "Place",
      coordinates: "Coordinates",
      reference: "Reference",
    },
    docVideo: {
      readTranscript: "Read transcript",
      hideTranscript: "Hide transcript",
      transcriptHeading: "Contextual transcript",
      transcriptNote: "This is a contextual description, not a verbatim translation of speech.",
      browserWarning: "Your browser does not support HTML video. The transcript remains available below.",
    },
  },

  ar: {
    brand: { country: "تونس", beyond: "ما وراء الإطار" },
    nav: {
      artwork: "اللوحة التفاعلية",
      stories: "القصص",
      voices: "استمع",
      atlas: "الأطلس",
      about: "عن المعرض",
      skipLink: "الانتقال إلى القصص الثقافية",
      menuOpen: "القائمة",
      menuClose: "إغلاق",
      langSelectLabel: "اختر اللغة",
      primaryNav: "التنقل الرئيسي",
    },
    hero: {
      contextBadge: "معرض ثقافي",
      contextDate: "المدرسة العليا للمهندسين بتونس · تونس · 2026",
      titleMain: "تونس",
      titleEmp: "ما وراء الإطار",
      tagline: "بلد واحد.. ألف حكاية وحكاية.",
      intro: "من شواطئ قرطاج العريقة إلى قرى الصحراء وواحاتها، يحمل كل ركن في تونس حكاية ملهمة. اعبر تفاصيل اللوحة وتعرف على الناس والأماكن والتقاليد الحية التي تشكل هويتنا.",
      exploreBtn: "استكشف القصص",
      artworkBtn: "تأمل اللوحة",
      posterCap1: "الملصق الثقافي التفاعلي",
      posterCap2: "عمل فني بدعم الذكاء الاصطناعي · The Architects",
      posterAlt: "ملصق ثقافي فني يجمع بين حنبعل، آثار قرطاج، جامع القيروان الكبير، قصر الجم، سيدي بوسعيد، الأزياء التقليدية، الكسكسي، الفخار، السجاد وعمارة الجنوب",
      scrollPrompt: "اعبر الإطار",
    },
    threshold: {
      tag: "تأمل · استكشف · عش التجربة",
      title1: "اللوحة هي الدعوة.",
      title2: "والناس هم الحكاية.",
      note: "أماكن حقيقية. أيادٍ أصيلة. تاريخ لا ينضب.",
    },
    artwork: {
      tag: "اكتشف تفاصيل اللوحة",
      entryCount: "11 نقطة استكشاف",
      title: "كل تفصيل يفتح باباً.",
      desc: "اختر علامة على اللوحة أو تصفح الفهرس المصور. كلاهما يقودك إلى القصص الثقافية المكتملة.",
      canvasAria: "ملصق ثقافي تفاعلي",
      storyIndexAria: "فهرس القصص في اللوحة",
      openStoryAria: "افتح قصة:",
    },
    storiesIntro: {
      tag: "قصص من أرض تونس",
      title1: "بلد صغير المساحة..",
      title2: "عظيم الذاكرة والتاريخ.",
      desc1: "كانت تونس دوماً نافذة مفتوحة على الأفق: نحو إفريقيا والمتوسط والعالم بأسره.",
      desc2: "ستة فصول تقتفي أثر الحجر والتراب والنسيج والنغم وموائد الكرم المشتركة.",
    },
    ancient: {
      tag: "قبل الإمبراطوريات",
      title: "البحر لا ينسى.",
      lead: "كانت قرطاج حاضرة للملاحين والتجار والصناع والدبلوماسيين قبل أن تصبح أطلالها مجرد صورة في الذاكرة.",
      readCarthageBtn: "اقرأ حكاية قرطاج",
      compareDesc: "حرّك الفاصل بين نقش أوروبي من عام 1836 والمشهد الأثري لقرطاج اليوم. إنهما مشهدان يبرزان كيف تعيد كل حقبة تأمل التاريخ.",
      engravingLabel: "نقش عام 1836",
      carthageTodayLabel: "قرطاج اليوم",
      romanAfricaTag: "إفريقيا الرومانية",
      romanAfricaTitle: "حجارة شُيّدت لتحتضن هدير مدينة بأكملها.",
      romanAfricaDesc: "في الجم، لا تزال عبقرية العمارة وهيبة المسرح تعلوان فوق المدينة الحديثة. وفي متحف باردو، تحفظ الفسيفساء دفء الحياة اليومية: الأسماك، المراكب، وإيقاع العيش.",
      elJemBtn: "ادخل إلى مدرج الجم",
    },
    factInterlude: {
      tag: "هل تعلم؟",
      text: "كلمة «إفريقيا» أُطلقت أولاً على الأراضي المحيطة بقرطاج القديمة قبل أن تُطلق على القارة بأسرها.",
      note: "لا يزال أصلها اللغوي الدقيق موضع بحث وتأمل بين المؤرخين.",
    },
    cities: {
      tag: "مدن الذاكرة",
      title: "تتبع مسار الضوء عبر أزقة المدينة.",
      medinaLead: "المدينة العتيقة بتونس ليست متحفاً صامتاً، بل هي نسيج حي نابض بالبيوت، والورش، والمساجد، والمدارس، والجيرة الطيبة.",
      medinaBtn: "تجوّل في المدينة العتيقة",
      kairouanTag: "أفنية وأعمدة وظلال",
      kairouanTitle: "القيروان",
      kairouanBtn: "اكتشف قصة جامع عقبة",
      sidiTag: "عتبات وزرقة وبحر",
      sidiTitle: "سيدي بوسعيد",
      sidiBtn: "اكتشف ما وراء الباب الأزرق",
    },
    land: {
      tag: "الأرض وأهلها",
      title: "عمارة تصافح المناخ.",
      desc: "في الجنوب، تستجيب العمارة الطينية للحرارة والبعد والترحال. وفي بلاد الزيتون، تتبع الفلاحة إيقاعاً متناغماً يمتد من الشمال إلى الساحل وصفاقس وأعماق الجنوب.",
      btn: "ارتحل نحو الجنوب",
    },
    olives: {
      tag: "في ربوع تونس",
      title: "تحت ظلال الزيتون",
      desc: "شجرة الزيتون ليست حكراً على الوطن القبلي، بل تغطي غاباتها ربوع الساحل وصفاقس وتلال الشمال والجنوب. موسم الجني يجمع بين البيئة، والجهد، والتجارة، والذاكرة العائلية.",
      btn: "اكتشف قصة الزيتون",
    },
    hands: {
      tag: "صُنع بأيدٍ أصيلة",
      title1: "ليست العبرة بالقطعة وحدها،",
      title2: "بل بالإنسان الذي يبدعها.",
      lead: "المهارة تسكن في تناسق الحركة والضغط والتكرار الصبور—حركات تتناقلها الأيدي من جيل إلى جيل.",
      btn: "تعرف على الأيادي الصانعة",
      docRoom: "قاعة الأفلام الوثائقية",
      docTitle: "تراب، ونار، وذاكرة",
      docSubtitle: "خزافات سجنان · 1:32 دقيقة",
    },
    clothing: {
      tag: "أزياء تروي التاريخ",
      title: "لا يمكن تلخيص بلد كامل في ثوب واحد.",
      lead: "الجبة، والسفساري، والبرنوس، والشاشية، وكسوة العرس: كل منها يحمل هوية جهة، ومناسبة خاصة، وبراعة صانع متفرد.",
      btn: "استكشف الأزياء التراثية",
    },
    table: {
      tag: "على المائدة التونسية",
      title: "الطعام بهجة ولقاء.",
      lead: "قبل أن يُقدَّم الصحن، هناك جهد ودقة: فلفل يجف تحت شمس الضحى، وقمح يُفتل باليد، ومرق يفوح شذاه، وزيت صافٍ ينسكب، ومائدة تفتح ذراعيها للجميع.",
      quote: "«يُعد في كنف المشاركة، ويُقدم بمحبة، ويظل محفوراً في الذاكرة.»",
      btn: "اجلس إلى المائدة",
    },
    living: {
      tag: "ثقافة تنبض بالحياة",
      title: "التراث ممارسة مستمرة لا مجرد واجهة عرض.",
      lead: "اللغات، والمألوف، والمهرجانات، والتصميم المعاصر، والحرف المتجددة تجعل الإرث حياً متدفقاً. شباب تونس لا يكتفون بالحفاظ على التراث، بل يعيدون صياغته بروح الحاضر.",
      btn: "استمع إلى نبض الثقافة الحية",
    },
    voices: {
      tag: "استمع إلى تونس",
      title: "دع الحكاية تلامس مسامعك.",
      playAria: "تشغيل القراءة الصوتية لقصة المدينة العتيقة",
      stopAria: "إيقاف القراءة الصوتية",
      sampleTitle: "المدينة العتيقة تنبض بالحياة",
      voiceMeta: "العربية · قراءة صوتية اصطناعية عبر المتصفح · اختياري",
      note: "تابع القراءة بينما يتلو جهازك أحداث القصة. هذه قراءة صوتية بالذكاء الاصطناعي مدمجة في المتصفح.",
    },
    atlas: {
      tag: "الأطلس الثقافي",
      title: "لكل حكاية موطن ومستقر.",
      desc: "الجغرافيا ليست مجرد خريطة، بل هي التي تفسر تباين العمارة، والمواد، والمأكولات، ونمط الحياة اليومية عبر ربوع البلاد.",
      mapAria: "دليل جغرافي يحدد اثني عشر موقعاً تونسياً بارزاً مع روابط للاستكشاف.",
    },
    closing: {
      tag: "الوطن أكبر من حدوده.",
      quote: "إنه يحيى في الأيادي التي تبدع الصنائع، وفي الحكايات المتناقلة بين الأجيال، وفي الأماكن التي تحفظ الود، وفي القلوب التي تحمل المشعل نحو الغد.",
      title1: "هذه هي تونس.",
      title2: "وحكايتها تتجدد كل يوم.",
      imageAlt: "امرأة تونسية تنقي حبات الزيتون الطازجة يدوياً بعد الجني",
    },
    footer: {
      leadTag: "شكراً لزيارتكم واكتشافكم لتونس.",
      leadTitle1: "صُنع بكل فخر واعتزاز بواسطة",
      leadTitle2: "The Architects",
      about1: "هذه التجربة الثقافية المستقلة ترافق الملصق الفني الذي صممه فريق طلابي من المدرسة العليا للمهندسين بتونس (ENSIT) لنهائيات مسابقة GCD4F 2026 في بكين.",
      about2: "جميع الصور والتسجيلات أصلية وموثقة ومستضافة محلياً مع ذكر كامل الحقوق. الترابطات التاريخية تستند إلى مراجع ومؤسسات توثيقية معتمدة.",
      creditsSummary: "قائمة حقوق وتراخيص الصور والأفلام والمصادر",
      recordsSuffix: "مادة موثقة",
    },
    dialog: {
      close: "إغلاق القصة",
      readSuffix: "قراءة",
      listen: "استمع إلى القصة",
      stop: "إيقاف القراءة",
      voiceBadge: "صوت اصطناعي تفاعلي للمتصفح",
      sourcesTitle: "المصادر والموقع",
      place: "المكان",
      coordinates: "الإحداثيات",
      reference: "المرجع والتوثيق",
    },
    docVideo: {
      readTranscript: "قراءة النص الوصفي",
      hideTranscript: "إخفاء النص الوصفي",
      transcriptHeading: "النص الوصفي للمشهد",
      transcriptNote: "هذا نص وصفي للأبعاد البصرية والثقافية، وليس ترجمة حرفية للحوار.",
      browserWarning: "متصفحك لا يدعم تشغيل الفيديو المباشر. النص الوصفي متاح بالأسفل.",
    },
  },

  fr: {
    brand: { country: "Tunisie", beyond: "Au-delà du cadre" },
    nav: {
      artwork: "L'œuvre",
      stories: "Récits",
      voices: "Écouter",
      atlas: "Atlas",
      about: "À propos",
      skipLink: "Aller aux récits culturels",
      menuOpen: "Menu",
      menuClose: "Fermer",
      langSelectLabel: "Choisir la langue",
      primaryNav: "Navigation principale",
    },
    hero: {
      contextBadge: "Une exposition culturelle",
      contextDate: "ENSIT · Tunisie · 2026",
      titleMain: "Tunisie",
      titleEmp: "Au-delà du cadre",
      tagline: "Un pays. Mille récits.",
      intro: "Des rivages antiques de Carthage aux villages du Sahara, chaque recoin de Tunisie abrite une histoire. Franchissez les contours de l'œuvre et rencontrez les visages, les lieux et les traditions vivantes qui forgent notre terre.",
      exploreBtn: "Explorer les récits",
      artworkBtn: "Entrer dans l'œuvre",
      posterCap1: "L'affiche culturelle",
      posterCap2: "Œuvre assistée par IA · The Architects",
      posterAlt: "Affiche culturelle illustrée associant Hannibal, Carthage, la Grande Mosquée de Kairouan, l'amphithéâtre d'El Jem, Sidi Bou Saïd, le costume traditionnel, le couscous, la poterie et le Sud",
      scrollPrompt: "Franchir le cadre",
    },
    threshold: {
      tag: "Voir · Explorer · Ressentir",
      title1: "L'œuvre est une invitation.",
      title2: "Les êtres en sont l'histoire.",
      note: "Vrais lieux. Vrais gestes. Vraies mémoires.",
    },
    artwork: {
      tag: "Découvrir l'affiche",
      entryCount: "11 points d'entrée",
      title: "Chaque détail ouvre une porte.",
      desc: "Sélectionnez un repère sur l'affiche ou parcourez l'index photographique. Tous deux mènent aux récits complets.",
      canvasAria: "Affiche culturelle interactive",
      storyIndexAria: "Index des récits sur l'affiche",
      openStoryAria: "Ouvrir le récit :",
    },
    storiesIntro: {
      tag: "Les récits de Tunisie",
      title1: "Un petit pays",
      title2: "à la mémoire immense.",
      desc1: "La Tunisie a toujours été tournée vers le large — vers l'Afrique, la Méditerranée et le monde.",
      desc2: "Six chapitres suivent les empreintes laissées dans la pierre, la terre, le tissage, la musique et les mets partagés.",
    },
    ancient: {
      tag: "Avant les empires",
      title: "La mer se souvient.",
      lead: "Carthage fut une métropole de marins, de marchands, d'artisans et de diplomates bien avant que ses ruines ne deviennent un symbole.",
      readCarthageBtn: "Lire l'histoire de Carthage",
      compareDesc: "Glissez entre une gravure européenne du XIXe siècle et le site archéologique d'aujourd'hui. Deux regards qui révèlent comment chaque époque réinterprète le passé.",
      engravingLabel: "Gravure de 1836",
      carthageTodayLabel: "Carthage aujourd'hui",
      romanAfricaTag: "L'Afrique romaine",
      romanAfricaTitle: "Des pierres taillées pour porter la clameur d'une cité.",
      romanAfricaDesc: "À El Jem, l'ingénierie et le spectacle surplombent toujours la ville moderne. Au Bardo, les mosaïques préservent une intimité rare : poissons, barques et scènes de vie quotidienne.",
      elJemBtn: "Pénétrer dans El Jem",
    },
    factInterlude: {
      tag: "Le saviez-vous ?",
      text: "Le terme « Afrique » désignait à l'origine les terres entourant l'antique Carthage avant d'embrasser l'ensemble du continent.",
      note: "Son étymologie exacte demeure un sujet d'étude et de débat parmi les historiens.",
    },
    cities: {
      tag: "Cités de mémoire",
      title: "Suivre la lumière à travers la médina.",
      medinaLead: "La Médina de Tunis n'est pas un décor figé. C'est une cité vivante de foyers, d'ateliers, de mosquées, d'écoles et de solidarités.",
      medinaBtn: "Parcourir la Médina",
      kairouanTag: "Cour, colonne, ombre",
      kairouanTitle: "Kairouan",
      kairouanBtn: "Découvrir la Grande Mosquée",
      sidiTag: "Seuil, azur, mer",
      sidiTitle: "Sidi Bou Saïd",
      sidiBtn: "Passer la porte bleue",
    },
    land: {
      tag: "La terre et ses gens",
      title: "Bâtir avec le climat.",
      desc: "Dans le Sud, l'architecture de terre répond à la chaleur, à l'immensité et aux déplacements. Dans le pays oléicole, la culture suit un rythme continu du Nord au Sahel, à Sfax et au Sud.",
      btn: "Voyager vers le Sud",
    },
    olives: {
      tag: "À travers la Tunisie",
      title: "Sous l'olivier",
      desc: "L'olivier ne se résume pas au Cap Bon. Ses vergers façonnent le Sahel, les immenses plaines de Sfax, les collines du Nord et les étendues méridionales. La récolte allie écologie, labeur, échange et mémoire familiale.",
      btn: "Découvrir l'histoire de l'olivier",
    },
    hands: {
      tag: "Façonné à la main",
      title1: "Pas seulement l'objet.",
      title2: "La personne qui le façonne.",
      lead: "La maîtrise vit dans la posture, la pression et la répétition — ces gestes qu'une paire de mains transmet à une autre.",
      btn: "Rencontrer les mains de la mémoire",
      docRoom: "Salle documentaire",
      docTitle: "Terre, feu, mémoire",
      docSubtitle: "Les femmes potières de Sejnane · 1:32",
    },
    clothing: {
      tag: "Mémoires tissées",
      title: "Un pays ne saurait s'habiller d'un seul habit.",
      lead: "Jebba, sefsari, burnous, chéchia, parure nuptiale : chacun reflète un terroir, un rituel et une longue chaîne d'artisans experts.",
      btn: "Explorer le costume traditionnel",
    },
    table: {
      tag: "À la table tunisienne",
      title: "Le repas est un rassemblement.",
      lead: "Avant l'assiette vient le labeur : piments séchant au soleil, semoule roulée à la main, bouillon fumant, huile dorée et table dressée pour l'hôte.",
      quote: "« On le prépare ensemble, on l'offre de grand cœur, et on s'en souvient. »",
      btn: "Prendre place à table",
    },
    living: {
      tag: "Une culture vivante",
      title: "Le patrimoine n'est pas une vitrine.",
      lead: "Langues, malouf, festivals, design contemporain et renouveau artisanal maintiennent l'héritage en mouvement. La jeunesse tunisienne réinvente sa culture avec passion.",
      btn: "Écouter une culture vivante",
    },
    voices: {
      tag: "Écouter la Tunisie",
      title: "Laissez l'histoire parler à vos oreilles.",
      playAria: "Lancer la narration vocale du récit de la Médina",
      stopAria: "Arrêter la narration vocale",
      sampleTitle: "La médina est vivante",
      voiceMeta: "Français · Synthèse vocale de navigateur · Optionnelle",
      note: "Suivez le texte pendant que votre appareil lit l'histoire. Il s'agit d'une voix synthétique intégrée au navigateur.",
    },
    atlas: {
      tag: "Atlas culturel",
      title: "Chaque récit a son ancrage.",
      desc: "La géographie n'est pas un simple catalogue. Elle explique pourquoi architectures, matériaux, saveurs et quotidiens varient d'une région à l'autre.",
      mapAria: "Carte géographique situant douze lieux tunisiens emblématiques avec boutons d'accès direct.",
    },
    closing: {
      tag: "Un pays est bien plus que ses frontières.",
      quote: "Il vit dans les mains qui perpétuent les métiers d'art, dans les histoires confiées d'une génération à l'autre, dans les pierres qui se souviennent et chez ceux qui font rayonner cette mémoire.",
      title1: "Voici la Tunisie.",
      title2: "Et son histoire continue.",
      imageAlt: "Une femme tunisienne triant manuellement des olives fraîchement récoltées",
    },
    footer: {
      leadTag: "Merci de découvrir notre chez-nous.",
      leadTitle1: "Conçu avec fierté par",
      leadTitle2: "The Architects",
      about1: "Cette expérience culturelle indépendante accompagne l'affiche conçue par une équipe d'étudiants de l'ENSIT (Tunisie) pour la finale mondiale GCD4F 2026 à Pékin.",
      about2: "Les photographies et films sont authentiques, hébergés localement et individuellement crédités. Les repères historiques renvoient aux institutions patrimoniales de référence.",
      creditsSummary: "Crédits photographiques, vidéographiques et licences",
      recordsSuffix: "notices",
    },
    dialog: {
      close: "Fermer le récit",
      readSuffix: "de lecture",
      listen: "Écouter ce récit",
      stop: "Arrêter la lecture",
      voiceBadge: "Synthèse vocale optionnelle du navigateur",
      sourcesTitle: "Sources et géographie",
      place: "Lieu",
      coordinates: "Coordonnées",
      reference: "Référence",
    },
    docVideo: {
      readTranscript: "Lire la transcription",
      hideTranscript: "Masquer la transcription",
      transcriptHeading: "Transcription contextuelle",
      transcriptNote: "Il s'agit d'une description contextuelle et culturelle, et non d'une traduction mot à mot.",
      browserWarning: "Votre navigateur ne prend pas en charge la lecture vidéo directe. La transcription reste accessible ci-dessous.",
    },
  },

  zh: {
    brand: { country: "突尼斯", beyond: "帧外之境" },
    nav: {
      artwork: "艺术海报",
      stories: "文化故事",
      voices: "语音聆听",
      atlas: "地理图志",
      about: "关于展览",
      skipLink: "跳转至文化故事",
      menuOpen: "菜单",
      menuClose: "关闭",
      langSelectLabel: "选择语言",
      primaryNav: "主导航",
    },
    hero: {
      contextBadge: "文化主题展览",
      contextDate: "突尼斯国立高等工程师学院 (ENSIT) · 2026",
      titleMain: "突尼斯",
      titleEmp: "帧外之境",
      tagline: "一国千卷，回响悠长。",
      intro: "从迦太基的远古海岸到撒哈拉的金色村落，突尼斯的每一寸土地都回荡着动人的篇章。穿透画框，去邂逅铸就这片家园的质朴人民、壮丽山川与鲜活传统。",
      exploreBtn: "探索文化故事",
      artworkBtn: "步入艺术画作",
      posterCap1: "互动文化海报",
      posterCap2: "AI 辅助艺术创作 · The Architects",
      posterAlt: "突尼斯文化艺术海报，融合了汉尼拔、迦太基遗址、开罗向大清真寺、埃尔杰姆斗兽场、西迪布赛义德、传统服饰、古斯米、陶艺地毯与南部泥土建筑",
      scrollPrompt: "步入画境",
    },
    threshold: {
      tag: "凝眸 · 探索 · 共鸣",
      title1: "画作是盛情的邀约，",
      title2: "人民才是真正的主角。",
      note: "真实的山河，真实的双手，真实的岁月。",
    },
    artwork: {
      tag: "品读画卷细节",
      entryCount: "11 处探索节点",
      title: "一花一叶，皆为画卷之门。",
      desc: "轻触海报上的互动标记或翻阅图文索引，即可踏入详尽的文化篇章。",
      canvasAria: "互动文化海报画布",
      storyIndexAria: "海报故事索引",
      openStoryAria: "阅读故事：",
    },
    storiesIntro: {
      tag: "突尼斯的故事",
      title1: "方寸之国，",
      title2: "千载之忆。",
      desc1: "突尼斯向来迎风面海——拥抱非洲、地中海与广阔的世界。",
      desc2: "六个章节，循着石筑、陶土、锦缎、弦音与围炉聚餐的痕迹，邀您一同溯源。",
    },
    ancient: {
      tag: "帝国曙光之前",
      title: "大海铭记一切。",
      lead: "在断壁残垣成为画卷之前，迦太基早已是一座属于航海家、商贾、工匠与外交家的繁荣之城。",
      readCarthageBtn: "阅读迦太基篇章",
      compareDesc: "左右滑动比对 1836 年欧洲版画与今日考古遗址。两幅光影展现了不同时代如何以各自的视角对话历史。",
      engravingLabel: "1836 年历史版画",
      carthageTodayLabel: "今日迦太基遗址",
      romanAfricaTag: "罗马时期的非洲",
      romanAfricaTitle: "用巨石筑就的澎湃回响。",
      romanAfricaDesc: "在埃尔杰姆，古罗马的工程壮举与剧场气魄至今巍然矗立；在巴尔多国家博物馆，绚丽的马赛克镶嵌画则凝固了凡世微光：游鱼、小舟与烟火日常。",
      elJemBtn: "步入埃尔杰姆",
    },
    factInterlude: {
      tag: "您知道吗？",
      text: "“阿非利加”（Africa）一词最初可能仅指代古迦太基周边的肥沃土地，随后才演变为整座大陆的名字。",
      note: "关于该词的确切语言学起源，史学界至今仍在研讨。",
    },
    cities: {
      tag: "记忆之城",
      title: "循着光影漫步麦地那老城。",
      medinaLead: "突尼斯的麦地那老城绝非静态的布景。这里是数百年商贾、工坊、清真寺、学堂与邻里共生的温热家园。",
      medinaBtn: "漫步麦地那老城",
      kairouanTag: "回廊、石柱与绿荫",
      kairouanTitle: "开罗向",
      kairouanBtn: "走进开罗向大清真寺",
      sidiTag: "门楣、湛蓝与碧海",
      sidiTitle: "西迪布赛义德",
      sidiBtn: "叩启蓝门之秘",
    },
    land: {
      tag: "大地与人民",
      title: "顺应自然的泥土建筑。",
      desc: "在南部，泥土建筑巧妙化解了酷暑、距离与迁徙的挑战。在橄榄之乡，耕作的节律自北部丘陵延绵至萨赫勒、斯法克斯乃至大漠深处。",
      btn: "启程奔赴南部",
    },
    olives: {
      tag: "走遍突尼斯",
      title: "橄榄树下",
      desc: "橄榄树不仅属于卡本半岛。苍翠的林海塑造了萨赫勒、斯法克斯广袤的农业景观，连接起生态、劳作、商贸与家庭记忆。",
      btn: "走近橄榄传奇",
    },
    hands: {
      tag: "纯手工造物",
      title1: "不仅是物象本身，",
      title2: "更是塑形它的工匠。",
      lead: "精湛技艺深藏于姿态、力道与耐心的重复之中——那是两代人手掌温度的无声传递。",
      btn: "拜会守望传承的巧手",
      docRoom: "纪录片展映室",
      docTitle: "泥土、烈火与记忆",
      docSubtitle: "塞日纳讷的制陶女匠 · 1:32",
    },
    clothing: {
      tag: "衣冠史话",
      title: "一国之风骨，岂止一种衣裳。",
      lead: "杰巴袍、塞夫萨里罩衫、巴尔努斯披风、红毡帽与华美婚服：每一件都浸润着故土乡情、岁时节日与代代匠人的心血。",
      btn: "鉴赏地域华服",
    },
    table: {
      tag: "突尼斯餐桌",
      title: "美食是温情的聚首。",
      lead: "在盘中美馔之前，是漫长而精细的劳作：烈日下晾晒的红辣椒、手工搓揉的麦粒、翻滚蒸腾的浓汤、醇厚甘冽的橄榄油，以及为宾客铺展的盛宴。",
      quote: "“同心揉制，倾心相待，历久弥香。”",
      btn: "围坐突尼斯餐桌",
    },
    living: {
      tag: "生生不息的文化",
      title: "非遗传承绝非展柜中的标本。",
      lead: "多元语言、马鲁夫古典雅乐、节庆盛事、现代设计与传统手工艺复兴，让古老遗产奔涌向前。突尼斯青年一代在重释传统中绽放新生。",
      btn: "聆听活态文化之声",
    },
    voices: {
      tag: "聆听突尼斯",
      title: "让故事在耳畔静静流淌。",
      playAria: "播放麦地那老城故事语音朗读",
      stopAria: "停止语音朗读",
      sampleTitle: "麦地那老城：鲜活流淌的岁月",
      voiceMeta: "中文 · 浏览器原生智能语音合成 · 可选",
      note: "伴随设备语音朗读感受故事细节。此功能采用浏览器原生语音合成技术呈现。",
    },
    atlas: {
      tag: "文化地理图志",
      title: "每一段故事，皆有其安放的山河。",
      desc: "地理不仅是地名的索引，更深刻解释了何以这片土地上的建筑构筑、天然材质、饮食礼仪与起居日常各呈异彩。",
      mapAria: "标注十二处突尼斯代表性文化地标的互动地理指南。",
    },
    closing: {
      tag: "一个国家，绝不仅是疆界所能界定。",
      quote: "它鲜活地流淌在塑造百工的巧手之中，在代代相传的低语叮咛之中，在静默铭记的历史古迹之中，以及在每一个守护并传递这份记忆的生命之中。",
      title1: "这就是突尼斯。",
      title2: "她的篇章，未完待续。",
      imageAlt: "一位突尼斯妇女在收获后细心手工分拣新鲜橄榄",
    },
    footer: {
      leadTag: "感谢您驻足聆听我们的家园故事。",
      leadTitle1: "由青年团队匠心呈献：",
      leadTitle2: "The Architects",
      about1: "本独立文化体验项目伴随突尼斯国立高等工程师学院 (ENSIT) 学子为 2026 年北京 GCD4F 全球总决赛精心创作的文化海报而生。",
      about2: "所有摄影与影像资料均取材于真实田野、本地托管并严谨标注署名许可。历史解读书目均链接至相应权威学术与文保机构。",
      creditsSummary: "摄影、影像作品及学术引用名录",
      recordsSuffix: "条记录",
    },
    dialog: {
      close: "关闭故事",
      readSuffix: "阅读时间",
      listen: "聆听此篇故事",
      stop: "停止语音朗读",
      voiceBadge: "浏览器原生智能语音朗读",
      sourcesTitle: "文献来源与地理坐标",
      place: "地点",
      coordinates: "坐标",
      reference: "参考引据",
    },
    docVideo: {
      readTranscript: "查看文字记述",
      hideTranscript: "收起文字记述",
      transcriptHeading: "背景解说记述",
      transcriptNote: "本内容为画面与文化背景概述，非原声逐字翻译。",
      browserWarning: "您的浏览器暂不支持直接播放该视频，下方提供详尽解说文字。",
    },
  },
};

export const localizedStories: Record<Language, Record<string, LocalizedStoryContent>> = {
  en: {
    carthage: {
      chapterTitle: "Before the empires",
      title: "Carthage, facing the sea",
      subtitle: "A Mediterranean power remembered in fragments",
      body: "Founded by Phoenician settlers, Carthage grew into one of the ancient Mediterranean’s most influential cities. Its harbours connected North Africa with trading worlds far beyond it. Hannibal Barca’s crossing of the Alps became legend, but Carthage was more than one commander: it was a city of sailors, artisans, farmers and diplomats. The archaeological site today layers Punic foundations, Roman streets and later histories in one landscape.",
      fact: "The archaeological site of Carthage has been inscribed on UNESCO’s World Heritage List since 1979.",
      location: "Carthage",
      coordinates: "36.8529° N, 10.3230° E",
      readingTime: "4 min",
      heroAlt: "Archaeological remains at Carthage overlooking trees and the Mediterranean",
      galleryAlt: [
        "An 1836 engraved view of the ruins and bay of Carthage",
        "Roman maritime mosaics displayed at the Bardo National Museum"
      ],
    },
    kairouan: {
      chapterTitle: "Cities of memory",
      title: "Kairouan, city of courtyards",
      subtitle: "Stone, shade and centuries of learning",
      body: "Founded in 670, Kairouan became a major centre of learning and faith in the Maghreb. The Great Mosque’s vast courtyard, ancient columns and square minaret express an architecture shaped by climate, craft and community. Beyond the monument, the medina’s lanes hold workshops where carpets are still knotted and stories of technique pass from one generation to the next.",
      fact: "Kairouan’s medina and principal monuments form a UNESCO World Heritage property.",
      location: "Kairouan",
      coordinates: "35.6781° N, 10.0963° E",
      readingTime: "3 min",
      heroAlt: "The square minaret and sunlit colonnade of the Great Mosque of Kairouan",
      galleryAlt: ["A Tunisian carpet artisan weaving at a vertical loom"],
    },
    "el-jem": {
      chapterTitle: "Before the empires",
      title: "El Jem, an arena of stone",
      subtitle: "Roman Africa on a monumental scale",
      body: "The amphitheatre at El Jem rises above the modern town with astonishing presence. Built in the third century CE in ancient Thysdrus, it could receive tens of thousands of spectators. Its arcades reveal both Roman engineering and the prosperity of an olive-growing region that once supplied distant markets across the empire.",
      fact: "El Jem is among the largest Roman amphitheatres in the world and has been UNESCO-listed since 1979.",
      location: "El Jem",
      coordinates: "35.2964° N, 10.7069° E",
      readingTime: "3 min",
      heroAlt: "Sunlit stone arcades inside the Amphitheatre of El Jem",
    },
    "sidi-bou-said": {
      chapterTitle: "Cities of memory",
      title: "Blue above the gulf",
      subtitle: "Sidi Bou Said and the art of a threshold",
      body: "White walls, cobalt doors and carved mashrabiya overlook the Gulf of Tunis. Sidi Bou Said’s familiar palette is not a stage set but part of a lived village, shaped by domestic architecture, gardens, cafés and the movement of residents through narrow streets. Its doors make arrival a ritual: nail patterns, stone surrounds and painted wood turn every threshold into a local signature.",
      fact: "The village takes its name from the Sufi scholar Abu Said al-Baji, whose sanctuary is located there.",
      location: "Sidi Bou Said",
      coordinates: "36.8687° N, 10.3417° E",
      readingTime: "3 min",
      heroAlt: "A traditional blue studded door set in a white wall at Sidi Bou Said",
    },
    medina: {
      chapterTitle: "Cities of memory",
      title: "The medina is alive",
      subtitle: "A city made from passages, trades and neighbours",
      body: "The Medina of Tunis is not a preserved shell. Behind its gates, homes, mosques, schools, cafés and workshops form a dense social city. Covered souks concentrate trades that once announced themselves through sound and scent. Light arrives indirectly—through a courtyard, an archway or a door left open. The people who repair metal, shape wood and keep shops open are as essential to its heritage as the walls around them.",
      fact: "Founded around the Zitouna Mosque, the Medina of Tunis contains roughly 700 historic monuments and became a UNESCO World Heritage property in 1979.",
      location: "Tunis",
      coordinates: "36.7992° N, 10.1706° E",
      readingTime: "4 min",
      heroAlt: "A market passage framed by a stone arch in the Medina of Tunis",
      galleryAlt: [
        "A narrow residential lane in the Medina of Tunis",
        "An artisan working inside a Medina workshop"
      ],
    },
    south: {
      chapterTitle: "The land and its people",
      title: "South, built with the climate",
      subtitle: "Ksour, oases and earth architecture",
      body: "In the south, architecture answers heat, scarcity and movement. The multi-storey ghorfas of the ksour stored harvests and goods; Matmata’s courtyard dwellings use the earth itself for shelter; Tozeur’s oasis turns careful water knowledge into shade and cultivation. Some landscapes later became cinema locations, but their deeper story belongs to the communities who built, used and continue to care for them.",
      fact: "Ksar Ouled Soltane and Chenini are near Tataouine; Star Wars location names borrowed ‘Tatooine’ from the region.",
      location: "Tataouine · Matmata · Tozeur",
      coordinates: "Southern Tunisia",
      readingTime: "4 min",
      heroAlt: "The ochre hill village of Chenini in the Tataouine region",
    },
    craft: {
      chapterTitle: "Made by hand",
      title: "The hands that remember",
      subtitle: "Craft is knowledge held in motion",
      body: "A carpet is not only its pattern. A ceramic vessel is not only its form. Across Tunisia, makers turn regional materials into objects with practical and ceremonial lives. Kairouan is known for knotted carpets, while Sejnane pottery is shaped and decorated by women using methods passed between generations. The object matters, but so do trained hands, patient repetition and social memory behind it.",
      fact: "The pottery skills of the women of Sejnane were inscribed on UNESCO’s Representative List of Intangible Cultural Heritage in 2018.",
      location: "Kairouan · Sejnane · Djerba",
      coordinates: "Across Tunisia",
      readingTime: "5 min",
      heroAlt: "A Tunisian woman weaving a carpet by hand",
      galleryAlt: ["A Tunisian potter surrounded by finished clay vessels"],
      videoTitle: "The potters of Sejnane",
      videoLanguage: "French with descriptive English captions",
      videoCaptions: "/captions/sejnane-potters-en.vtt",
      videoTranscript: "Women in Sejnane build, smooth, decorate and fire earthen vessels by hand. The film follows the process from wet clay to mineral decoration and outdoor firing, then hears from a maker about the pride and continuity held in the work.",
    },
    clothing: {
      chapterTitle: "Made by hand",
      title: "Worn histories",
      subtitle: "Clothing carries place, occasion and skilled labour",
      body: "There is no single Tunisian traditional costume. The jebba, sefsari, barnous, chechia and richly embroidered regional wedding dress each belong to different contexts and histories. Mahdia’s gold-thread embroidery does not tell the same story as dress from Hammamet or the south. These garments are made through weaving, tailoring, embroidery and jewellery work—and continue to appear at weddings, festivals and family ceremonies.",
      fact: "Traditional dress varies by region, gender, occasion and generation; the distinctions are part of its cultural meaning.",
      location: "Mahdia · Hammamet · Tunis · Across Tunisia",
      coordinates: "Regional traditions",
      readingTime: "5 min",
      heroAlt: "Close view of a richly embroidered Tunisian dress with traditional bracelets",
      galleryAlt: [
        "People wearing a jebba and sefsari in a Tunisian medina",
        "A craftsperson embroidering a Mahdia wedding garment with gold thread",
        "Traditional Tunisian silver and gold jewellery displayed in the Medina"
      ],
    },
    table: {
      chapterTitle: "At the Tunisian table",
      title: "Food is a gathering",
      subtitle: "Couscous, harissa and the work before the meal",
      body: "Couscous begins with grain worked by hand and steamed above a fragrant stew. Across Tunisia its character changes with place and season: fish along parts of the coast, lamb and vegetables inland, and local variations in spice and ritual. Harissa—made from red peppers, spices and olive oil—brings heat, colour and memory to the table. Food here is not merely served. It is prepared together, offered and remembered.",
      fact: "The knowledge and practices of couscous were inscribed by UNESCO as Intangible Cultural Heritage in 2020; harissa followed in 2022.",
      location: "Across Tunisia",
      coordinates: "A shared national tradition",
      readingTime: "4 min",
      heroAlt: "A Tunisian woman preparing red peppers for harissa",
      galleryAlt: ["Pots used to prepare Tunisian couscous on a home stove"],
    },
    olives: {
      chapterTitle: "The land and its people",
      title: "Under the olive tree",
      subtitle: "A culture stretching from north to Sahel and south",
      body: "Olive culture does not belong to one Tunisian region. Groves shape Cap Bon, the Sahel around Sousse and Monastir, the immense olive country of Sfax, and landscapes farther south. Harvest brings families and seasonal workers together; fruit is gathered, sorted and pressed through practices that combine old knowledge with modern production. The olive tree links ecology, work, trade and the everyday table.",
      fact: "Tunisia is one of the world’s major olive-oil producers, with cultivation extending across very different climates and regional traditions.",
      location: "Cap Bon · Sahel · Sfax · Southern Tunisia",
      coordinates: "Across Tunisia",
      readingTime: "4 min",
      heroAlt: "A Tunisian woman cleaning freshly harvested olives by hand",
      galleryAlt: [
        "Women harvesting olives beneath a mature Tunisian olive tree",
        "Olive groves descending toward the Mediterranean in Cap Bon"
      ],
    },
    living: {
      chapterTitle: "A culture still alive",
      title: "Many voices, one Tunisia",
      subtitle: "Heritage is a practice, not a display case",
      body: "Tunisia’s identity is spoken in Arabic and Tunisian Arabic, enriched by Amazigh heritage and centuries of exchange across Africa and the Mediterranean. Malouf music, regional festivals, contemporary design and renewed interest in ancestral techniques show culture moving forward. Young artists and makers do not simply preserve the past: they question it, reinterpret it and carry it into new forms.",
      fact: "The Amazigh name for Tunisia can be written in Tifinagh as ⵜⵓⵏⵙ.",
      location: "Across Tunisia",
      coordinates: "Living heritage",
      readingTime: "4 min",
      heroAlt: "Tunisian Malouf musicians and singers performing at Dar Lasram",
      videoTitle: "La Rachidia performs Malouf",
      videoLanguage: "Instrumental and vocal performance",
      videoCaptions: "/captions/malouf-performance-en.vtt",
      videoTranscript: "A full ensemble performs Malouf at the Municipal Theatre of Tunis. Strings, percussion, singers and a conductor share the stage beneath red theatre curtains. The camera remains in a wide view while the music continues.",
    },
  },

  ar: {
    carthage: {
      chapterTitle: "قبل الإمبراطوريات",
      title: "قرطاج في مواجهة البحر",
      subtitle: "قوة متوسطية خالدة في تفاصيل الذاكرة",
      body: "أسسها الفينيقيون، ونمت قرطاج لتغدو إحدى أعظم حواضر البحر الأبيض المتوسط القديم وأكثرها تأثيراً. ربطت مرافئها شمال إفريقيا بعوالم تجارية شاسعة. تحول عبور حنبعل لجبال الألب إلى أسطورة، لكن قرطاج كانت أعظم من قائد عسكري: كانت حاضرة للبحارة والصناع والفلاحين والدبلوماسيين. يجمع موقعها الأثري اليوم بين الأساسات البونية والشوارع الرومانية والطبقات التاريخية في مشهد بديع.",
      fact: "أُدرج موقع قرطاج الأثري ضمن قائمة التراث العالمي لليونسكو منذ عام 1979.",
      location: "قرطاج",
      coordinates: "36.8529° شمالاً، 10.3230° شرقاً",
      readingTime: "4 دقائق",
      heroAlt: "بقايا أثرية في قرطاج تطل على الأشجار ومياه البحر الأبيض المتوسط",
      galleryAlt: [
        "نقش تاريخي من عام 1836 يصور أطلال وخليج قرطاج",
        "فسيفساء بحرية رومانية معروضة في المتحف الوطني بباردو"
      ],
    },
    kairouan: {
      chapterTitle: "مدن الذاكرة",
      title: "القيروان: مدينة الأفنية",
      subtitle: "حجارة وظلال وقرون من العلم والمعرفة",
      body: "تأسست القيروان عام 670م، وغدت مركزاً رائداً للعلم والإيمان في بلاد المغرب العربي. تعبر الأفنية الفسيحة لجامع عقبة بن نافع وأعمدته العتيقة ومئذنته المربعة عن هندسة معمارية متناغمة مع المناخ والحرف والمجتمع. وإلى جانب المعالم الكبرى، تحتضن أزقة المدينة العتيقة ورشاً عائلية تُعقد فيها سجادات الزربية وتتوارث أسرار الصنعة جيلاً بعد جيل.",
      fact: "تعد مدينة القيروان العتيقة ومعالمها التاريخية الكبرى موقعاً مسجلاً في التراث العالمي لليونسكو.",
      location: "القيروان",
      coordinates: "35.6781° شمالاً، 10.0963° شرقاً",
      readingTime: "3 دقائق",
      heroAlt: "المئذنة المربعة والأروقة المشمسة لجامع عقبة بن نافع بالقيروان",
      galleryAlt: ["حرفية تونسية تنسج زربية تقليدية على منسج يدوي عمودي"],
    },
    "el-jem": {
      chapterTitle: "قبل الإمبراطوريات",
      title: "الجم: مدرج الحجر الصامد",
      subtitle: "إفريقيا الرومانية في أبهى تجلياتها المعمارية",
      body: "ينتصب قصر الجم الروماني بشموخ فوق المدينة الحديثة بهيبة تثير الدهشة. بُني في القرن الثالث الميلادي في مدينة تيسدروس القديمة، وكان يتسع لعشرات الآلاف من المتفرجين. تشهد أروقته المقوسة على براعة الهندسة الرومانية وازدهار هذه المنطقة الفلاحية التي كانت تغذي أسواق الإمبراطورية بزيت الزيتون.",
      fact: "يعد مسرح الجم من أكبر المدرجات الرومانية في العالم ومدرج على لائحة اليونسكو منذ 1979.",
      location: "الجم",
      coordinates: "35.2964° شمالاً، 10.7069° شرقاً",
      readingTime: "3 دقائق",
      heroAlt: "أقواس حجرية مضاءة بنور الشمس داخل مدرج الجم الروماني",
    },
    "sidi-bou-said": {
      chapterTitle: "مدن الذاكرة",
      title: "زرقة تعانق الخليج",
      subtitle: "سيدي بوسعيد وفن العتبات والأبواب",
      body: "جدران بيضاء ناصعة، وأبواب بلون الكوبالت، ومشربيات خشبية منحوتة تطل برونقها على خليج تونس. ألوان سيدي بوسعيد المألوفة ليست مجرد ديكور خارجي، بل جزء لا يتجزأ من قرية نابضة بالحياة، تتناغم فيها عمارة البيوت والحدائق والمقاهي مع حركة السكان اليومية. تجعل أبوابها من العتبة طقساً احتفالياً: مسامير سوداء تشكل رموز الحماية، وأطر حجرية منحوتة تمنح كل مدخل بصمته التونسية الخاصة.",
      fact: "تستمد القرية اسمها من الولي الصالح والعالم الصوفي أبو سعيد الباجي الذي يقع مقامه بها.",
      location: "سيدي بوسعيد",
      coordinates: "36.8687° شمالاً، 10.3417° شرقاً",
      readingTime: "3 دقائق",
      heroAlt: "باب تقليدي أزرق مرصع بالمسامير في جدار أبيض ناصع بسيدي بوسعيد",
    },
    medina: {
      chapterTitle: "مدن الذاكرة",
      title: "المدينة العتيقة تنبض بالحياة",
      subtitle: "أزقة وحرف وجوار ينسج روح الحاضرة",
      body: "ليست مدينة تونس العتيقة هيكلاً أثرياً صامتاً. فخلف أبوابها المفتوحة، تشكل البيوت والمساجد والمدارس والمقاهي والورش نسيجاً اجتماعياً مترابطاً وحياً. تجمع الأسواق المسقوفة الحرفيين الذين يعلنون عن مهنهم برنين المعادن وعبق العطور والبخور. يصل الضوء مداوراً عبر الأفنية الداخلية والأقواس. إن أولئك الصانعين الذين يطرقون النحاس ويشكلون الخشب هم جوهر هذا التراث الحي تماماً كالجدران التاريخية التي تحتضنهم.",
      fact: "شُيّدت المدينة العتيقة حول جامع الزيتونة المعمور، وتضم نحو 700 معلم تاريخي وهي مدرجة على لائحة اليونسكو منذ 1979.",
      location: "تونس العاصمة",
      coordinates: "36.7992° شمالاً، 10.1706° شرقاً",
      readingTime: "4 دقائق",
      heroAlt: "ممر في السوق مؤطر بقوس حجري عتيق في مدينة تونس العتيقة",
      galleryAlt: [
        "زقاق سكني هادئ في مدينة تونس العتيقة",
        "حرفي يعمل داخل ورشة تقليدية في المدينة العتيقة"
      ],
    },
    south: {
      chapterTitle: "الأرض وأهلها",
      title: "الجنوب: عمارة تصافح المناخ",
      subtitle: "قصور صحراوية، واحات وهندسة ترابية أصيلة",
      body: "في الجنوب، تبتكر العمارة حلولاً لعبقرية التأقلم مع القيظ والمكان. تشكل الغرف المتراصة في القصور الصحراوية مخازن حصينة للغلال؛ وتستفيد بيوت الحفر في مطماطة من حضن الأرض للاحتماء من تقلبات الجو؛ بينما تحول واحات توزر المعرفة المائية الدقيقة إلى واحة ظليلة خصبة. وإذا كانت هذه المشاهد قد جذبت السينما العالمية، فإن قيمتها الأعمق تنبع من المجتمعات المحلية التي بنتها وصانتها عبر القرون.",
      fact: "يقع قصر أولاد سلطان وشنني قرب تطاوين؛ ومن اسم هذه المنطقة استلهمت سلسلة أفلام حرب النجوم اسم كوكب «تاتوين».",
      location: "تطاوين · مطماطة · توزر",
      coordinates: "الجنوب التونسي",
      readingTime: "4 دقائق",
      heroAlt: "قرية شنني الجبلية ذات الحجارة المغرة في ربوع تطاوين",
    },
    craft: {
      chapterTitle: "صُنع بأيدٍ أصيلة",
      title: "أيادٍ تختزن الذاكرة",
      subtitle: "الحرفة معرفة حية تسري في حركات الصانع",
      body: "ليست الزربية مجرد نقوش هندسية، ولا الآنية الفخارية مجرد قالب طيني. في كافة أرجاء تونس، يحول الحرفيون المواد الطبيعية إلى تحف ترافق الحياة اليومية والاحتفالات. تشتهر القيروان بالسجاد المنسوج يدوياً، بينما تبدع نساء سجنان في تشكيل وتزيين الفخار بأساليب فطرية متوارثة منذ آلاف السنين. جمال القطعة أصيل، لكن الأعظم منه هو اليد المدربة والصبر الطويل والذاكرة الجمعية التي تقف خلفها.",
      fact: "أدرجت مهارات نساء سجنان في صناعة الفخار ضمن القائمة التمثيلية للتراث الثقافي غير المادي لليونسكو عام 2018.",
      location: "القيروان · سجنان · جربة",
      coordinates: "في ربوع تونس",
      readingTime: "5 دقائق",
      heroAlt: "امرأة تونسية تنسج زربية تقليدية على منسج يدوي",
      galleryAlt: ["خزاف تونسي محاط بأوانٍ فخارية تقليدية تامة الصنع"],
      videoTitle: "خزافات سجنان",
      videoLanguage: "بالفرنسية مع ترجمة وشروحات عربية",
      videoCaptions: "/captions/sejnane-potters-ar.vtt",
      videoTranscript: "تقوم نساء سجنان بتشكيل وتنعيم وزخرفة وحرق الأواني الفخارية يدوياً بأساليب متوارثة. يتابع الفيلم المراحل من الطين الرطب إلى الزخرفة بالمواد الطبيعية والحرق في الهواء الطلق، مع شهادة حية من صانعة حول فخر الاستمرار وصون هذا التراث.",
    },
    clothing: {
      chapterTitle: "أزياء تروي التاريخ",
      title: "تاريخ يُرتدى",
      subtitle: "أزياء تروي حكاية المكان والمناسبة ومهارة الصانع",
      body: "لا يوجد زي تقليدي تونسي واحد ووحيد. فالجبة، والسفساري، والبرنوس، والشاشية، وكسوة العرس الإقليمية المطرزة بالخيوط المذهبة، تعود جميعها إلى سياقات وتواريخ متنوعة. تطريز المهدية بخيوط الذهب يحمل حكاية تختلف عن ملابس الحمامات أو تطاوين. تُصنع هذه الأزياء عبر مراحل متكاملة من الغزل، والخياطة، والتطريز، وصياغة الحلي، وتظل حاضرة في الأعراس والمهرجانات والمناسبات العائلية.",
      fact: "تتنوع الأزياء التونسية التقليدية بحسب الجهة، والمناسبة، والجيل، ويمثل هذا التنوع جوهر ثرائها الثقافي.",
      location: "المهدية · الحمامات · تونس العاصمة · عموم تونس",
      coordinates: "تقاليد جهوية متنوعة",
      readingTime: "5 دقائق",
      heroAlt: "لقطة مقربة للباس تقليدي تونسي مطرز بالذهب مع أساور أصيلة",
      galleryAlt: [
        "تونسيون يرتدون الجبة والسفساري في أزقة المدينة العتيقة",
        "حرفية تطرز كسوة عرس مهدوية بخيوط الذهب الخالص",
        "حلي فضية وذهبية تقليدية تونسية معروضة في سوق الصاغة"
      ],
    },
    table: {
      chapterTitle: "على المائدة التونسية",
      title: "المائدة التونسية: بهجة اللقاء",
      subtitle: "الكسكسي، الهريسة وجهد الأيدي قبل حضور الطعام",
      body: "يبدأ الكسكسي من حبات القمح التي تُفتل باليد وتُطبخ بالبخار فوق مرق شهي يفوح بالبهارات. ويتلون مذاقه عبر جهات تونس: بالسمك الطازج على السواحل، أو بلحم الضأن والخضار في الداخل والواحات. أما الهريسة التونسية المعدة من الفلفل الأحمر المجفف وزيت الزيتون فتضفي الدفء واللون والنكهة المميزة. الطعام هنا ليس مجرد وجبة تُؤكل، بل هو طقس يُعد في كنف المشاركة ويُقدم بمحبة ويُحفر في الذاكرة.",
      fact: "أدرجت منظمة اليونسكو المهارات والمعارف المرتبطة بإعداد الكسكسي ضمن التراث غير المادي عام 2020، ولحقت بها الهريسة التونسية عام 2022.",
      location: "في ربوع تونس",
      coordinates: "تراث غذائي وطني مشترك",
      readingTime: "4 دقائق",
      heroAlt: "امرأة تونسية تجهز قرون الفلفل الأحمر لإعداد الهريسة التقليدية",
      galleryAlt: ["أوانٍ ومقفول تقليدي يستعمل لطهي الكسكسي التونسي على البخار"],
    },
    olives: {
      chapterTitle: "الأرض وأهلها",
      title: "تحت ظلال الزيتون",
      subtitle: "ثقافة خضراء تمتد من الشمال إلى الساحل والجنوب",
      body: "ثقافة الزيتون شريان حيوي لا يقتصر على منطقة واحدة في تونس. تغطي غابات الزيتون الوطن القبلي، وسواحل سوسة والمنستير، وحقول صفاقس الشاسعة، وتلال الشمال ومشارف الصحراء. يجمع موسم الجني العائلات والعمال في تضامن وتآزر؛ تُقطف الثمار وتُنقى وتُعصر بتناغم فريد بين الطرق الموروثة وتقنيات العصر. تربط شجرة الزيتون بين البيئة، والجهد، والاقتصاد، والمائدة اليومية.",
      fact: "تونس من أبرز منتجي ومصدري زيت الزيتون في العالم، وتمتد زراعته عبر مناخات وتقاليد فلاحية متباينة.",
      location: "الوطن القبلي · الساحل · صفاقس · الجنوب التونسي",
      coordinates: "في ربوع تونس",
      readingTime: "4 دقائق",
      heroAlt: "امرأة تونسية تنقي حبات الزيتون الطازجة يدوياً بعد الجني",
      galleryAlt: [
        "نسوة يجمعن حبات الزيتون تحت شجرة زيتون معمرة في تونس",
        "غابات الزيتون المنحدرة نحو مياه البحر الأبيض المتوسط في الوطن القبلي"
      ],
    },
    living: {
      chapterTitle: "ثقافة تنبض بالحياة",
      title: "أصوات متعددة وتونس واحدة",
      subtitle: "التراث ممارسة حية لا متحف مغلق",
      body: "تتحدث هوية تونس بالعربية واللهجة التونسية العذبة، وتغتني بروافد التراث الأمازيغي وقرون من التبادل الحضاري عبر إفريقيا والبحر المتوسط. موسيقى المألوف الكلاسيكية، والمهرجانات الجهوية، والتصميم الحديث، وإحياء المهارات الحرفية تؤكد أن ثقافتنا تسير نحو المستقبل. فشباب المبدعين لا يكتفون بالحفاظ على الماضي، بل يسائلونه ويعيدون ابتكاره وصياغته بأشكال فنية جديدة.",
      fact: "يُكتب الاسم الأمازيغي لتونس بحروف التيفيناغ على صورة: ⵜⵓⵏⵙ.",
      location: "في ربوع تونس",
      coordinates: "تراث حي متجدد",
      readingTime: "4 دقائق",
      heroAlt: "عازفو ومطربو المألوف التونسي يقدمون وصلة أندلسية في دار الأصرم",
      videoTitle: "فرقة الرشيدية تؤدي نوبة مألوف",
      videoLanguage: "أداء موسيقي وغنائي أندلسي",
      videoCaptions: "/captions/malouf-performance-ar.vtt",
      videoTranscript: "فرقة موسيقية كاملة تعزف نوبات المألوف التونسي بالمسرح البلدي بالعاصمة. آلات وترية وإيقاعية ومنشدون وقائد أوركسترا يتشاركون الخشبة تحت الستائر المخملية الحمراء في مشهد بديع يخلد هذا الفن الأندلسي العريق.",
    },
  },

  fr: {
    carthage: {
      chapterTitle: "Avant les empires",
      title: "Carthage face à la mer",
      subtitle: "Une puissance méditerranéenne inscrite dans la pierre",
      body: "Fondée par des marchands phéniciens, Carthage s'est hissée au rang des cités les plus influentes de l'Antiquité méditerranéenne. Ses ports reliaient l'Afrique du Nord à des réseaux marchands lointains. La traversée des Alpes par Hannibal est devenue une légende, mais Carthage était bien plus qu'un chef de guerre : c'était une cité de marins, d'artisans, d'agriculteurs et d'érudits. Aujourd'hui, le site archéologique superpose vestiges puniques et rues romaines face aux flots.",
      fact: "Le site archéologique de Carthage est inscrit au patrimoine mondial de l'UNESCO depuis 1979.",
      location: "Carthage",
      coordinates: "36.8529° N, 10.3230° E",
      readingTime: "4 min",
      heroAlt: "Vestiges archéologiques de Carthage dominant la mer Méditerranée",
      galleryAlt: [
        "Vue gravée de 1836 représentant les ruines et la baie de Carthage",
        "Mosaïques maritimes romaines exposées au Musée national du Bardo"
      ],
    },
    kairouan: {
      chapterTitle: "Cités de mémoire",
      title: "Kairouan, cité des cours intérieures",
      subtitle: "Pierre, ombre et siècles de savoir",
      body: "Fondée en 670, Kairouan s'est imposée comme un foyer spirituel et intellectuel majeur du Maghreb. L'immense cour de la Grande Mosquée, sa forêt de colonnes antiques et son minaret carré traduisent une architecture sculptée par le climat, l'artisanat et la dévotion. Au-delà du sanctuaire, les venelles de la médina abritent les ateliers où se nouent les tapis de haute laine.",
      fact: "La médina de Kairouan et ses monuments majeurs constituent un bien inscrit au patrimoine mondial de l'UNESCO.",
      location: "Kairouan",
      coordinates: "35.6781° N, 10.0963° E",
      readingTime: "3 min",
      heroAlt: "Minaret carré et colonnade ensoleillée de la Grande Mosquée de Kairouan",
      galleryAlt: ["Artisane tunisienne tissant un tapis traditionnel sur un métier vertical"],
    },
    "el-jem": {
      chapterTitle: "Avant les empires",
      title: "El Jem, une arène de pierre",
      subtitle: "L'Afrique romaine à une échelle monumentale",
      body: "L'amphithéâtre d'El Jem domine la cité moderne avec une puissance impressionnante. Érigé au IIIe siècle au cœur de l'antique Thysdrus, il pouvait accueillir des dizaines de milliers de spectateurs. Ses arcades de grès témoignent à la fois du génie architectural romain et de la prospérité d'une contrée oléicole qui approvisionnait tout l'Empire.",
      fact: "El Jem figure parmi les plus grands amphithéâtres romains au monde et est classé à l'UNESCO depuis 1979.",
      location: "El Jem",
      coordinates: "35.2964° N, 10.7069° E",
      readingTime: "3 min",
      heroAlt: "Arcades de pierre dorées par le soleil au sein de l'amphithéâtre d'El Jem",
    },
    "sidi-bou-said": {
      chapterTitle: "Cités de mémoire",
      title: "Bleu au-dessus du golfe",
      subtitle: "Sidi Bou Saïd et l'art du seuil",
      body: "Chaux immaculée, portes bleu cobalt et moucharabiehs sculptés s'ouvrent sur le golfe de Tunis. La palette emblématique de Sidi Bou Saïd n'est pas un décor de théâtre, mais l'écrin d'un village habité, façonné par ses jardins secrets, ses cafés maures et la quiétude de ses ruelles. Ses portes cloutées font du franchissement un rite : volutes de fer forgé et claveaux de calcaire confèrent à chaque seuil une âme unique.",
      fact: "Le village tire son nom du maître soufi Abou Saïd al-Baji, dont le sanctuaire veille sur la colline.",
      location: "Sidi Bou Saïd",
      coordinates: "36.8687° N, 10.3417° E",
      readingTime: "3 min",
      heroAlt: "Porte cloutée bleue traditionnelle sertie dans un mur blanc à Sidi Bou Saïd",
    },
    medina: {
      chapterTitle: "Cités de mémoire",
      title: "La médina est vivante",
      subtitle: "Une cité tissée de passages, d'artisans et de voisins",
      body: "La Médina de Tunis n'est pas un monument pétrifié. Derrière ses lourdes portes sculptées, demeures seigneuriales, oratoires, madrasas, cafés et échoppes forment une ruche urbaine d'une grande densité humaine. Les souks couverts concentrent des corporations aux senteurs d'encens et aux martèlements de cuivre. La lumière s'infiltre avec pudeur par les patios et les arcs en fer à cheval.",
      fact: "Déployée autour de la prestigieuse Mosquée Zitouna, la Médina de Tunis compte près de 700 édifices classés à l'UNESCO depuis 1979.",
      location: "Tunis",
      coordinates: "36.7992° N, 10.1706° E",
      readingTime: "4 min",
      heroAlt: "Passage de souk sous une voûte de pierre dans la Médina de Tunis",
      galleryAlt: [
        "Ruelle résidentielle paisible dans la Médina de Tunis",
        "Artisan au travail dans son atelier de la Médina"
      ],
    },
    south: {
      chapterTitle: "La terre et ses gens",
      title: "Le Sud : bâtir avec le climat",
      subtitle: "Ksour, oasis et architecture de terre",
      body: "Dans les confins méridionaux, l'architecture apprivoise l'aridité, le vent et la chaleur. Les ghorfas superposées des ksour servaient de greniers fortifiés aux tribus nomades ; les maisons troglodytiques de Matmata creusent le tuf pour préserver la fraîcheur ; l'oasis de Tozeur sublime la science de l'eau en une canopée nourricière.",
      fact: "Ksar Ouled Soltane et Chenini se trouvent près de Tataouine, toponyme qui a inspiré la planète Tatooine dans Star Wars.",
      location: "Tataouine · Matmata · Tozeur",
      coordinates: "Sud tunisien",
      readingTime: "4 min",
      heroAlt: "Le village perché de Chenini dans la région ocre de Tataouine",
    },
    craft: {
      chapterTitle: "Façonné à la main",
      title: "Les mains de la mémoire",
      subtitle: "L'artisanat : un savoir incarné dans le geste",
      body: "Un tapis n'est pas qu'un tracé géométrique. Une céramique n'est pas qu'un galbe d'argile. Partout en Tunisie, les artisans transfigurent les ressources de leur terroir en objets d'usage et de cérémonie. Kairouan perpétue la haute tradition du point noué, tandis qu'à Sejnane, les femmes modèlent et décorent la poterie selon des méthodes préhistoriques transmises de mère en fille.",
      fact: "Le savoir-faire de la poterie des femmes de Sejnane a été inscrit sur la Liste représentative du patrimoine culturel immatériel de l'UNESCO en 2018.",
      location: "Kairouan · Sejnane · Djerba",
      coordinates: "À travers la Tunisie",
      readingTime: "5 min",
      heroAlt: "Une tisserande tunisienne nouant un tapis traditionnel sur son métier à tisser",
      galleryAlt: ["Potier tunisien entouré de jarres et poteries en terre cuite"],
      videoTitle: "Les potières de Sejnane",
      videoLanguage: "Français avec descriptions textuelles",
      videoCaptions: "/captions/sejnane-potters-fr.vtt",
      videoTranscript: "À Sejnane, les femmes modèlent, lissent, ornent et cuisent la poterie de terre à la main. Le film retrace le cheminement de l'argile brute aux pigments minéraux et à la cuisson à ciel ouvert, recueillant le témoignage d'une artisane sur la fierté et la perpétuation de ce savoir ancestral.",
    },
    clothing: {
      chapterTitle: "Mémoires tissées",
      title: "Histoires tissées",
      subtitle: "Le vêtement : mémoire du lieu, de la fête et du savoir-faire",
      body: "Il n'existe point de costume tunisien unique. Jebba raffinée, voile fluide du sefsari, noble burnous de laine, chéchia cramoisie et somptueux habits de noces brodés racontent chacun un terroir et une appartenance. L'or ouvragé de Mahdia répond aux soieries de Hammamet et aux lainages du Sud. Ces étoffes demeurent au cœur des grands événements familiaux et festifs.",
      fact: "Les parures traditionnelles varient selon la contrée, la circonstance et l'âge, chaque détail portant un sens culturel précis.",
      location: "Mahdia · Hammamet · Tunis · Territoires tunisiens",
      coordinates: "Traditions régionales",
      readingTime: "5 min",
      heroAlt: "Détail d'une robe tunisienne brodée de fils d'or et parée de bracelets traditionnels",
      galleryAlt: [
        "Citadins vêtus de la jebba et du sefsari dans une médina tunisienne",
        "Artisane brodant un habit de noces de Mahdia au fil d'or",
        "Bijoux traditionnels tunisiens en argent et en or ciselé"
      ],
    },
    table: {
      chapterTitle: "À la table tunisienne",
      title: "La table tunisienne : l'art du partage",
      subtitle: "Couscous, harissa et les gestes qui précèdent le festin",
      body: "Le couscous naît d'une semoule roulée à la main puis cuite à la vapeur au-dessus d'un bouillon parfumé. Sur les côtes, il s'enrichit de daurades et de mérous ; à l'intérieur des terres, il s'accompagne d'agneau et de légumes gorgés de soleil. La harissa maison — purée de piments séchés, d'ail, d'épices et d'huile d'olive — apporte sa chaleur dorée. Ici, cuisiner est un acte d'hospitalité et de communion.",
      fact: "Les savoirs et pratiques du couscous ont été consacrés par l'UNESCO en 2020, suivis par la harissa en 2022.",
      location: "À travers la Tunisie",
      coordinates: "Tradition culinaire partagée",
      readingTime: "4 min",
      heroAlt: "Femme préparant les piments rouges destinés à la confection de la harissa",
      galleryAlt: ["Couscoussier traditionnel sur le feu pour la cuisson à la vapeur"],
    },
    olives: {
      chapterTitle: "La terre et ses gens",
      title: "Sous l'olivier",
      subtitle: "Une culture enracinée du Nord au Sahel et jusqu'au Sud",
      body: "La culture de l'olivier embrasse toute la Tunisie. Les oliveraies sculptent les collines du Cap Bon, le Sahel de Sousse et Monastir, les immenses horizons de Sfax et les confins méridionaux. La saison de la cueillette rassemble familles et saisonniers ; les fruits sont récoltés, triés et pressés dans une alchimie de gestes ancestraux et de moulins modernes. L'arbre nourricier incarne l'alliance de la terre, du travail et de la convivialité.",
      fact: "La Tunisie figure parmi les tout premiers producteurs et exportateurs d'huile d'olive au monde.",
      location: "Cap Bon · Sahel · Sfax · Sud tunisien",
      coordinates: "Territoires oléicoles",
      readingTime: "4 min",
      heroAlt: "Femme tunisienne triant manuellement des olives fraîchement cueillies",
      galleryAlt: [
        "Femmes récoltant les olives sous un olivier centenaire en Tunisie",
        "Oliveraies vallonnées plongeant vers la Méditerranée au Cap Bon"
      ],
    },
    living: {
      chapterTitle: "Une culture vivante",
      title: "Voix plurielles, une Tunisie",
      subtitle: "Le patrimoine est une pratique vivante, non une vitrine",
      body: "L'âme tunisienne s'exprime en arabe littéraire et en arabe tunisien, enrichie du substrat amazigh et de siècles d'échanges méditerranéens et africains. Les noubas du malouf, les festivals d'artisanat, le design d'avant-garde et la réinterprétation des motifs anciens attestent d'une culture féconde. Les créateurs d'aujourd'hui s'emparent de cet héritage pour inventer de nouvelles résonances.",
      fact: "Le nom amazigh de la Tunisie s'écrit en caractères tifinaghs : ⵜⵓنⵙ.",
      location: "À travers la Tunisie",
      coordinates: "Patrimoine vivant",
      readingTime: "4 min",
      heroAlt: "Musiciens et choristes de l'ensemble de Malouf à Dar Lasram",
      videoTitle: "La Rachidia interprète le Malouf",
      videoLanguage: "Concert vocal et instrumental",
      videoCaptions: "/captions/malouf-performance-fr.vtt",
      videoTranscript: "Un ensemble complet interprète le Malouf au Théâtre municipal de Tunis. Cordes, percussions, chœurs et chef d'orchestre font vibrer la scène sous les draperies rouges dans une harmonie envoûtante.",
    },
  },

  zh: {
    carthage: {
      chapterTitle: "帝国曙光之前",
      title: "迦太基：面朝大海的古老回响",
      subtitle: "在地中海残垣与波涛中凝固的千古史诗",
      body: "迦太基由腓尼基开拓者建立，曾崛起为古代地中海最具影响力的贸易与海上强权之一。其精巧的双港曾将北非与广袤的地中海文明网络紧密相连。汉尼拔率军翻越阿尔卑斯山的壮举已成传奇，但迦太基远不止于一位统帅：这里曾聚居着勇敢的水手、精巧的工匠、辛勤的农耕者与睿智的外交官。今日的考古遗址将布匿时期的地基、罗马帝国的街道与后续世代的历史层层叠印在同一片蔚蓝海天之间。",
      fact: "迦太基考古遗址自 1979 年起被联合国教科文组织正式列入《世界遗产名录》。",
      location: "迦太基",
      coordinates: "北纬 36.8529°，东经 10.3230°",
      readingTime: "4 分钟",
      heroAlt: "迦太基古代遗址石柱远眺地中海与郁郁葱葱的林木",
      galleryAlt: [
        "1836 年历史版画描绘的迦太基遗址与海湾风光",
        "巴尔多国家博物馆展出的古罗马海洋主题马赛克镶嵌画"
      ],
    },
    kairouan: {
      chapterTitle: "记忆之城",
      title: "开罗向：庭院与经卷之城",
      subtitle: "光影回廊间流淌的千年静修与智慧",
      body: "开罗向建于公元 670 年，是马格里布地区重要的信仰与学术中心。大清真寺广阔开朗的铺石庭院、古代大理石林立的立柱以及巍峨的方形宣礼塔，生动展现了与气候相谐、依匠心筑造的建筑艺术。在宏伟殿堂之外，麦地那古老街巷的作坊里，织毯女匠的手指飞快穿梭，将古老的打结手法与纹样秘密代代相授。",
      fact: "开罗向古城麦地那及其主要古迹群于 1988 年被联合国教科文组织列入世界文化遗产名录。",
      location: "开罗向",
      coordinates: "北纬 35.6781°，东经 10.0963°",
      readingTime: "3 分钟",
      heroAlt: "开罗向大清真寺在日光下肃穆伫立的方形宣礼塔与回廊石柱",
      galleryAlt: ["突尼斯女匠在立式传统织布机前编织手工地毯"],
    },
    "el-jem": {
      chapterTitle: "帝国曙光之前",
      title: "杰姆斗兽场：巨石的交响",
      subtitle: "罗马行省旷世奇迹的宏伟史诗",
      body: "埃尔杰姆圆形竞技场以磅礴气势屹立在现代城镇之中。它于公元三世纪建于古城提斯德鲁斯（Thysdrus），可容纳数万名热烈观赏的观众。那层叠舒展的半圆石拱，不仅见证了古罗马精湛的拱券力学造诣，更折射出当年这片富饶橄榄油产区向整个帝国输送财富的繁华过往。",
      fact: "埃尔杰姆斗兽场是世界上保存最完整的古罗马竞技场之一，于 1979 年被联合国教科文组织列为世界遗产。",
      location: "埃尔杰姆",
      coordinates: "北纬 35.2964°，东经 10.7069°",
      readingTime: "3 分钟",
      heroAlt: "阳光斜照下的埃尔杰姆古罗马斗兽场宏伟石造拱门走廊",
    },
    "sidi-bou-said": {
      chapterTitle: "记忆之城",
      title: "蓝白小镇：海湾之上的静谧门扉",
      subtitle: "西迪布赛义德与门楣之上的岁月仪式",
      body: "雪白的粉墙、钴蓝的木门与镂空雕花的窗棂，静静俯瞰着突尼斯湾的万顷碧波。西迪布赛义德经典的蓝白配色绝非人工矫饰的布景，而是一座有呼吸的真实村落。庭院深处的茉莉花香、飘散薄荷茶香的悬崖咖啡馆，与蜿蜒小巷构成了独特的风情。门上用黑铁圆钉精心排列出辟邪与吉祥的图腾，将每一处门户都塑造成突尼斯独有的文化印记。",
      fact: "这座小镇的名字源自长眠于此的苏菲派学者与圣者阿布·赛义德·巴吉（Abu Said al-Baji）。",
      location: "西迪布赛义德",
      coordinates: "北纬 36.8687°，东经 10.3417°",
      readingTime: "3 分钟",
      heroAlt: "镶嵌在西迪布赛义德白色石墙上的经典圆钉蓝木门",
    },
    medina: {
      chapterTitle: "记忆之城",
      title: "麦地那老城：鲜活流淌的岁月",
      subtitle: "曲径、百工与市井邻里的生息交织",
      body: "突尼斯的麦地那老城绝不是封存历史的冰冷空壳。在层叠的城门之内，错落的居所、清真寺、宗教学院、古老咖啡馆与手工工坊共同构成了一座紧密而温暖的市民聚落。有盖市集里回荡着叮当的敲铜声与扑鼻的香料气息。阳光透过采光天井、拱廊与半掩的木门柔和倾泻。那些在幽深作坊中修复金属、雕琢香木的匠人，正如老城厚重的石墙一般，是文化血脉不可分割的根基。",
      fact: "突尼斯麦地那围绕著名的宰图纳大清真寺兴建，汇集了约 700 处历史古迹，早在 1979 年便被列入世界文化遗产。",
      location: "突尼斯城",
      coordinates: "北纬 36.7992°，东经 10.1706°",
      readingTime: "4 分钟",
      heroAlt: "突尼斯老城麦地那石拱门下悠悠穿行的市集小巷",
      galleryAlt: [
        "突尼斯麦地那老城内宁静蜿蜒的市井居民巷弄",
        "在麦地那老城传统手工作坊内专注劳作的手工匠人"
      ],
    },
    south: {
      chapterTitle: "大地与人民",
      title: "南部风土：顺应自然的泥土建筑",
      subtitle: "粮仓堡寨、绿洲与穴居智慧的共生",
      body: "在突尼斯辽阔的南部，建筑是对酷烈日照、辽远荒漠与迁徙生活的深沉回答。古老堡寨（Ksar）中层层叠叠的拱形储粮室（Ghorfa）固若金汤；马特马塔的柏柏尔天井穴居顺应地脉，冬暖夏凉；托泽尔绿洲则凭借严密的引水智慧化荒漠为如茵遮阴。这些地貌后来虽成为好莱坞电影的经典取景地，但其最动人的灵魂，永远属于开凿并世世代代守护这里的南部人民。",
      fact: "乌勒德·苏丹堡寨（Ksar Ouled Soltane）与舍尼尼村位于泰塔温附近；《星球大战》中的塔图因星球名字正是取自这里。",
      location: "泰塔温 · 马特马塔 · 托泽尔",
      coordinates: "突尼斯南部",
      readingTime: "4 分钟",
      heroAlt: "泰塔温地区赭石山崖上宛若天成的舍尼尼古老山村",
    },
    craft: {
      chapterTitle: "纯手工造物",
      title: "匠心指尖：指缝里的千年技艺",
      subtitle: "手掌温度中代代相承的生命智慧",
      body: "一张羊毛地毯绝非单纯的几何图样；一件素烧陶器也非仅是黏土的轮廓。在突尼斯全境，工匠们将大自然的天然矿土与毛料化为充满神圣与世俗温度的生活器物。开罗向以密实严整的手工打结挂毯名扬四海，而塞日纳讷的制陶女工至今保留着从新石器时代薪火相传的徒手捏陶与矿石着色技艺。器物有形，而更为动人的是专注的双手、日复一日的耐心与深植心底的集体记忆。",
      fact: "塞日纳讷妇女的传统制陶手艺于 2018 年被联合国教科文组织正式列入《人类非物质文化遗产代表作名录》。",
      location: "开罗向 · 塞日纳讷 · 杰尔巴岛",
      coordinates: "走遍突尼斯",
      readingTime: "5 分钟",
      heroAlt: "一位突尼斯妇女在传统木织机前全神贯注手工编织地毯",
      galleryAlt: ["突尼斯陶工与他精心捏制烧就的传统陶器器皿"],
      videoTitle: "塞日纳讷的女陶匠",
      videoLanguage: "法语原声配合中文文化背景解说",
      videoCaptions: "/captions/sejnane-potters-zh.vtt",
      videoTranscript: "在塞日纳讷，妇女们世代以纯手工抟土、打磨、彩绘并柴烧陶器。纪录片记录了从湿润陶土、天然矿物装饰到露天篝火烧制的完整历程，并展现了陶艺匠人对这一古老手艺延续的自豪与坚守。",
    },
    clothing: {
      chapterTitle: "衣冠史话",
      title: "流光织裳：衣冠之下的山海风物",
      subtitle: "锦绣华服里的地域记忆与工匠心血",
      body: "突尼斯并无单一死板的“传统服装”。飘逸典雅的杰巴长袍（Jebba）、如白云般裹身的塞夫萨里罩衫（Sefsari）、抵御寒风的巴尔努斯披风（Barnous）、标志性的红色羊毛毡帽（Chechia），以及各地镶金缀玉的传统嫁衣，皆映射出截然不同的风土人文。马赫迪耶精美绝伦的金线刺绣，讲述着与哈马马特或南部迥异的情感。这些织物凝结了纺织、裁缝、刺绣与金银细工的巧思，至今仍在婚礼与欢庆盛典上流光溢彩。",
      fact: "突尼斯传统服饰因地域、性别、重大节庆与年龄层次而各具巧思，这种细致的区分构成了其深厚的服饰礼仪文化。",
      location: "马赫迪耶 · 哈马马特 · 突尼斯城 · 遍及突尼斯",
      coordinates: "多元地域服饰传统",
      readingTime: "5 分钟",
      heroAlt: "突尼斯传统礼服金线密密缝缀的刺绣细节与传统手镯",
      galleryAlt: [
        "突尼斯麦地那街头身着传统杰巴长袍与塞夫萨里罩衫的人们",
        "工艺师以纯金丝线精细刺绣马赫迪耶传统新娘礼服",
        "在突尼斯麦地那珠宝市集展示的传统金银细工首饰"
      ],
    },
    table: {
      chapterTitle: "突尼斯餐桌",
      title: "突尼斯飨宴：一鼎一镬的团聚滋味",
      subtitle: "古斯米、哈里萨辣酱与烟火温情",
      body: "古斯米（Couscous）的曼妙始于手工搓揉的硬质小麦粒，在双层蒸锅的翻滚热气中吸饱底汤的醇美芬芳。自沿海至内陆，古斯米千姿百态：沿海配以银鳞闪烁的海鱼，内陆添以炖得软烂的羊肉与各色鲜蔬。而以烈日晒干的红辣椒、大蒜与橄榄油研磨而成的哈里萨辣酱，则为餐桌注入一抹炽热明艳的红。在这里，享用美食不仅是裹腹，更是一场共同揉捏、倾囊款待并刻骨铭心的家庭仪式。",
      fact: "古斯米制作技艺于 2020 年被联合国教科文组织列为非物质文化遗产；哈里萨辣酱制作工艺亦于 2022 年成功入选。",
      location: "突尼斯全境",
      coordinates: "全民共享的国民美食传统",
      readingTime: "4 分钟",
      heroAlt: "一位突尼斯妇女在阳光下细心收拾晾晒用于制作哈里萨的鲜红辣椒",
      galleryAlt: ["在火炉上蒸制传统突尼斯古斯米美食的双层陶蒸锅与汤鼎"],
    },
    olives: {
      chapterTitle: "大地与人民",
      title: "橄榄树下：滋养大地的绿色动脉",
      subtitle: "从北部丘陵延伸至南部沃土的苍翠生机",
      body: "橄榄树的绿意并不为突尼斯某单一区域所独占。茂密的橄榄林遍布卡本半岛、苏塞与莫纳斯提尔周边地带、斯法克斯广袤平原乃至南部边陲。每逢采摘季，全家老少与采收工人在树荫下协作采收；鲜果被小心采下、分拣并冷榨，将古老的压榨智慧与现代工艺融为一体。千百年来，苍郁的橄榄树紧紧维系着自然生态、体力劳作、对外商贸与每日餐桌。",
      fact: "突尼斯是世界主要的橄榄油生产国和出口国之一，其种植地带跨越极为多元的气候水土条件。",
      location: "卡本半岛 · 萨赫勒 · 斯法克斯 · 突尼斯南部",
      coordinates: "突尼斯全境",
      readingTime: "4 分钟",
      heroAlt: "突尼斯老妇人在树下用双手细致分拣刚刚采摘下的新鲜橄榄",
      galleryAlt: [
        "妇女们在突尼斯百年苍翠橄榄古树下携手采摘橄榄果",
        "卡本半岛层叠起伏并延展至地中海蔚蓝海岸的青翠橄榄园"
      ],
    },
    living: {
      chapterTitle: "生生不息的文化",
      title: "多元交响：生生不息的活态传承",
      subtitle: "非遗薪火相传，续写时代新声",
      body: "突尼斯的文化根脉流淌在优美的阿拉伯语与突尼斯方言中，融合了深厚的柏柏尔（Amazigh）底蕴以及千百年来非洲大陆与地中海文明的激荡交融。庄重悠扬的马鲁夫（Malouf）雅乐、各具风采的民间艺术节、融贯古今的当代设计与手工艺复兴运动，都彰显出这片土地澎湃的前行动力。年轻一代创作者不仅在守护瑰宝，更在用先锋视角解构传统，赋予其崭新的生命形态。",
      fact: "突尼斯在柏柏尔语中的名称使用提非纳文字（Tifinagh）可书写为：ⵜⵓنⵙ。",
      location: "走遍突尼斯",
      coordinates: "蓬勃生长的活态遗产",
      readingTime: "4 分钟",
      heroAlt: "突尼斯达尔拉斯拉姆宫殿内深情演奏古典马鲁夫乐曲的乐师与歌者",
      videoTitle: "拉希迪亚传统乐团演绎马鲁夫经典",
      videoLanguage: "器乐与合唱古典演奏",
      videoCaptions: "/captions/malouf-performance-zh.vtt",
      videoTranscript: "大型乐团在突尼斯市立剧场倾情演绎古典马鲁夫曲目。管弦、打击乐器与合唱团在红色大幕前默契合奏，全景镜头定格这一穿越百年的安达卢西亚音乐瑰宝。",
    },
  },
};

export const localizedPlaces: Record<Language, Array<{ name: string; x: number; y: number; storyId: string }>> = {
  en: [
    { name: "Tunis", x: 37, y: 16, storyId: "medina" },
    { name: "Carthage", x: 44, y: 13, storyId: "carthage" },
    { name: "Sidi Bou Said", x: 49, y: 12, storyId: "sidi-bou-said" },
    { name: "Nabeul", x: 59, y: 19, storyId: "clothing" },
    { name: "Kairouan", x: 45, y: 37, storyId: "kairouan" },
    { name: "Sousse", x: 55, y: 33, storyId: "olives" },
    { name: "Monastir", x: 60, y: 39, storyId: "living" },
    { name: "El Jem", x: 54, y: 48, storyId: "el-jem" },
    { name: "Djerba", x: 68, y: 70, storyId: "craft" },
    { name: "Tozeur", x: 31, y: 68, storyId: "south" },
    { name: "Matmata", x: 54, y: 72, storyId: "south" },
    { name: "Tataouine", x: 62, y: 80, storyId: "south" },
  ],
  ar: [
    { name: "تونس", x: 37, y: 16, storyId: "medina" },
    { name: "قرطاج", x: 44, y: 13, storyId: "carthage" },
    { name: "سيدي بوسعيد", x: 49, y: 12, storyId: "sidi-bou-said" },
    { name: "نابل", x: 59, y: 19, storyId: "clothing" },
    { name: "القيروان", x: 45, y: 37, storyId: "kairouan" },
    { name: "سوسة", x: 55, y: 33, storyId: "olives" },
    { name: "المنستير", x: 60, y: 39, storyId: "living" },
    { name: "الجم", x: 54, y: 48, storyId: "el-jem" },
    { name: "جربة", x: 68, y: 70, storyId: "craft" },
    { name: "توزر", x: 31, y: 68, storyId: "south" },
    { name: "مطماطة", x: 54, y: 72, storyId: "south" },
    { name: "تطاوين", x: 62, y: 80, storyId: "south" },
  ],
  fr: [
    { name: "Tunis", x: 37, y: 16, storyId: "medina" },
    { name: "Carthage", x: 44, y: 13, storyId: "carthage" },
    { name: "Sidi Bou Saïd", x: 49, y: 12, storyId: "sidi-bou-said" },
    { name: "Nabeul", x: 59, y: 19, storyId: "clothing" },
    { name: "Kairouan", x: 45, y: 37, storyId: "kairouan" },
    { name: "Sousse", x: 55, y: 33, storyId: "olives" },
    { name: "Monastir", x: 60, y: 39, storyId: "living" },
    { name: "El Jem", x: 54, y: 48, storyId: "el-jem" },
    { name: "Djerba", x: 68, y: 70, storyId: "craft" },
    { name: "Tozeur", x: 31, y: 68, storyId: "south" },
    { name: "Matmata", x: 54, y: 72, storyId: "south" },
    { name: "Tataouine", x: 62, y: 80, storyId: "south" },
  ],
  zh: [
    { name: "突尼斯城", x: 37, y: 16, storyId: "medina" },
    { name: "迦太基", x: 44, y: 13, storyId: "carthage" },
    { name: "西迪布赛义德", x: 49, y: 12, storyId: "sidi-bou-said" },
    { name: "纳布勒", x: 59, y: 19, storyId: "clothing" },
    { name: "开罗向", x: 45, y: 37, storyId: "kairouan" },
    { name: "苏塞", x: 55, y: 33, storyId: "olives" },
    { name: "莫纳斯提尔", x: 60, y: 39, storyId: "living" },
    { name: "埃尔杰姆", x: 54, y: 48, storyId: "el-jem" },
    { name: "杰尔巴岛", x: 68, y: 70, storyId: "craft" },
    { name: "托泽尔", x: 31, y: 68, storyId: "south" },
    { name: "马特马塔", x: 54, y: 72, storyId: "south" },
    { name: "泰塔温", x: 62, y: 80, storyId: "south" },
  ],
};
