export type StoryImage = {
  src: string;
  alt: string;
  credit: string;
};

export type StoryVideo = {
  src: string;
  captions: string;
  title: string;
  language: string;
  credit: string;
  transcript: string;
};

export type Story = {
  id: string;
  chapter: string;
  chapterTitle: string;
  title: string;
  subtitle: string;
  body: string;
  fact: string;
  location: string;
  coordinates: string;
  readingTime: string;
  sources: { label: string; url: string }[];
  hero: StoryImage;
  gallery: StoryImage[];
  video?: StoryVideo;
  hotspot: { x: number; y: number };
};

export const stories: Story[] = [
  {
    id: "carthage", chapter: "I", chapterTitle: "Before the empires",
    title: "Carthage, facing the sea", subtitle: "A Mediterranean power remembered in fragments",
    body: "Founded by Phoenician settlers, Carthage grew into one of the ancient Mediterranean’s most influential cities. Its harbours connected North Africa with trading worlds far beyond it. Hannibal Barca’s crossing of the Alps became legend, but Carthage was more than one commander: it was a city of sailors, artisans, farmers and diplomats. The archaeological site today layers Punic foundations, Roman streets and later histories in one landscape.",
    fact: "The archaeological site of Carthage has been inscribed on UNESCO’s World Heritage List since 1979.",
    location: "Carthage", coordinates: "36.8529° N, 10.3230° E", readingTime: "4 min",
    sources: [{ label: "UNESCO — Archaeological Site of Carthage", url: "https://whc.unesco.org/en/list/37/" }],
    hero: { src: "/images/stories/carthage-now.webp", alt: "Archaeological remains at Carthage overlooking trees and the Mediterranean", credit: "Szymon9 · CC BY-SA 4.0" },
    gallery: [
      { src: "/images/stories/carthage-1837.webp", alt: "An 1836 engraved view of the ruins and bay of Carthage", credit: "J. Salmon / H. Adlard · CC0" },
      { src: "/images/stories/bardo-mosaics.webp", alt: "Roman maritime mosaics displayed at the Bardo National Museum", credit: "Josep M. Gracia · CC BY-SA 4.0" }
    ], hotspot: { x: 35, y: 17 }
  },
  {
    id: "kairouan", chapter: "II", chapterTitle: "Cities of memory",
    title: "Kairouan, city of courtyards", subtitle: "Stone, shade and centuries of learning",
    body: "Founded in 670, Kairouan became a major centre of learning and faith in the Maghreb. The Great Mosque’s vast courtyard, ancient columns and square minaret express an architecture shaped by climate, craft and community. Beyond the monument, the medina’s lanes hold workshops where carpets are still knotted and stories of technique pass from one generation to the next.",
    fact: "Kairouan’s medina and principal monuments form a UNESCO World Heritage property.",
    location: "Kairouan", coordinates: "35.6781° N, 10.0963° E", readingTime: "3 min",
    sources: [{ label: "UNESCO — Kairouan", url: "https://whc.unesco.org/en/list/499/" }],
    hero: { src: "/images/stories/kairouan-mosque.webp", alt: "The square minaret and sunlit colonnade of the Great Mosque of Kairouan", credit: "Yoana Stoyanova · CC BY-SA 4.0" },
    gallery: [{ src: "/images/stories/carpet-artisan.webp", alt: "A Tunisian carpet artisan weaving at a vertical loom", credit: "Hn Khaoula · CC BY-SA 4.0" }], hotspot: { x: 43, y: 35 }
  },
  {
    id: "el-jem", chapter: "I", chapterTitle: "Before the empires",
    title: "El Jem, an arena of stone", subtitle: "Roman Africa on a monumental scale",
    body: "The amphitheatre at El Jem rises above the modern town with astonishing presence. Built in the third century CE in ancient Thysdrus, it could receive tens of thousands of spectators. Its arcades reveal both Roman engineering and the prosperity of an olive-growing region that once supplied distant markets across the empire.",
    fact: "El Jem is among the largest Roman amphitheatres in the world and has been UNESCO-listed since 1979.",
    location: "El Jem", coordinates: "35.2964° N, 10.7069° E", readingTime: "3 min",
    sources: [{ label: "UNESCO — Amphitheatre of El Jem", url: "https://whc.unesco.org/en/list/38/" }],
    hero: { src: "/images/stories/el-jem.webp", alt: "Sunlit stone arcades inside the Amphitheatre of El Jem", credit: "Elena Tatiana Chis · CC BY-SA 4.0" }, gallery: [], hotspot: { x: 69, y: 31 }
  },
  {
    id: "sidi-bou-said", chapter: "II", chapterTitle: "Cities of memory",
    title: "Blue above the gulf", subtitle: "Sidi Bou Said and the art of a threshold",
    body: "White walls, cobalt doors and carved mashrabiya overlook the Gulf of Tunis. Sidi Bou Said’s familiar palette is not a stage set but part of a lived village, shaped by domestic architecture, gardens, cafés and the movement of residents through narrow streets. Its doors make arrival a ritual: nail patterns, stone surrounds and painted wood turn every threshold into a local signature.",
    fact: "The village takes its name from the Sufi scholar Abu Said al-Baji, whose sanctuary is located there.",
    location: "Sidi Bou Said", coordinates: "36.8687° N, 10.3417° E", readingTime: "3 min",
    sources: [{ label: "Institut National du Patrimoine — Tunisia", url: "https://www.inp2020.tn/" }],
    hero: { src: "/images/stories/sidi-bou-said-door.webp", alt: "A traditional blue studded door set in a white wall at Sidi Bou Said", credit: "Citizen59 · CC BY-SA 3.0" }, gallery: [], hotspot: { x: 88, y: 19 }
  },
  {
    id: "medina", chapter: "II", chapterTitle: "Cities of memory",
    title: "The medina is alive", subtitle: "A city made from passages, trades and neighbours",
    body: "The Medina of Tunis is not a preserved shell. Behind its gates, homes, mosques, schools, cafés and workshops form a dense social city. Covered souks concentrate trades that once announced themselves through sound and scent. Light arrives indirectly—through a courtyard, an archway or a door left open. The people who repair metal, shape wood and keep shops open are as essential to its heritage as the walls around them.",
    fact: "Founded around the Zitouna Mosque, the Medina of Tunis contains roughly 700 historic monuments and became a UNESCO World Heritage property in 1979.",
    location: "Tunis", coordinates: "36.7992° N, 10.1706° E", readingTime: "4 min",
    sources: [{ label: "UNESCO — Medina of Tunis", url: "https://whc.unesco.org/en/list/36/" }],
    hero: { src: "/images/stories/medina-life.webp", alt: "A market passage framed by a stone arch in the Medina of Tunis", credit: "Elena Tatiana Chis · CC BY-SA 4.0" },
    gallery: [
      { src: "/images/stories/tunis-medina.webp", alt: "A narrow residential lane in the Medina of Tunis", credit: "Meriem Mach · CC BY-SA 4.0" },
      { src: "/images/stories/medina-artisan.webp", alt: "An artisan working at a machine inside a Medina workshop", credit: "Faiza Affes · CC BY-SA 4.0" }
    ], hotspot: { x: 55, y: 52 }
  },
  {
    id: "south", chapter: "III", chapterTitle: "The land and its people",
    title: "South, built with the climate", subtitle: "Ksour, oases and earth architecture",
    body: "In the south, architecture answers heat, scarcity and movement. The multi-storey ghorfas of the ksour stored harvests and goods; Matmata’s courtyard dwellings use the earth itself for shelter; Tozeur’s oasis turns careful water knowledge into shade and cultivation. Some landscapes later became cinema locations, but their deeper story belongs to the communities who built, used and continue to care for them.",
    fact: "Ksar Ouled Soltane and Chenini are near Tataouine; Star Wars location names borrowed ‘Tatooine’ from the region.",
    location: "Tataouine · Matmata · Tozeur", coordinates: "Southern Tunisia", readingTime: "4 min",
    sources: [{ label: "Institut National du Patrimoine — Tunisia", url: "https://www.inp2020.tn/" }],
    hero: { src: "/images/stories/chenini.webp", alt: "The ochre hill village of Chenini in the Tataouine region", credit: "Nassima Chahboun · CC BY-SA 4.0" }, gallery: [], hotspot: { x: 80, y: 62 }
  },
  {
    id: "craft", chapter: "IV", chapterTitle: "Made by hand",
    title: "The hands that remember", subtitle: "Craft is knowledge held in motion",
    body: "A carpet is not only its pattern. A ceramic vessel is not only its form. Across Tunisia, makers turn regional materials into objects with practical and ceremonial lives. Kairouan is known for knotted carpets, while Sejnane pottery is shaped and decorated by women using methods passed between generations. The object matters, but so do trained hands, patient repetition and social memory behind it.",
    fact: "The pottery skills of the women of Sejnane were inscribed on UNESCO’s Representative List of Intangible Cultural Heritage in 2018.",
    location: "Kairouan · Sejnane · Djerba", coordinates: "Across Tunisia", readingTime: "5 min",
    sources: [{ label: "UNESCO — Pottery skills of the women of Sejnane", url: "https://ich.unesco.org/en/RL/pottery-skills-of-the-women-of-sejnane-01406" }],
    hero: { src: "/images/stories/carpet-artisan.webp", alt: "A Tunisian woman weaving a carpet by hand", credit: "Hn Khaoula · CC BY-SA 4.0" },
    gallery: [{ src: "/images/stories/potter.webp", alt: "A Tunisian potter surrounded by finished clay vessels", credit: "Ryadh Gharbi · CC BY-SA 4.0" }],
    video: { src: "/videos/sejnane-potters.mp4", captions: "/captions/sejnane-potters-en.vtt", title: "The potters of Sejnane", language: "French with embedded French subtitles", credit: "Promoitv · CC BY 3.0", transcript: "Women in Sejnane build, smooth, decorate and fire earthen vessels by hand. The film follows the process from wet clay to mineral decoration and outdoor firing, then hears from a maker about the pride and continuity held in the work." }, hotspot: { x: 10, y: 9 }
  },
  {
    id: "clothing", chapter: "IV", chapterTitle: "Made by hand",
    title: "Worn histories", subtitle: "Clothing carries place, occasion and skilled labour",
    body: "There is no single Tunisian traditional costume. The jebba, sefsari, barnous, chechia and richly embroidered regional wedding dress each belong to different contexts and histories. Mahdia’s gold-thread embroidery does not tell the same story as dress from Hammamet or the south. These garments are made through weaving, tailoring, embroidery and jewellery work—and continue to appear at weddings, festivals and family ceremonies.",
    fact: "Traditional dress varies by region, gender, occasion and generation; the distinctions are part of its cultural meaning.",
    location: "Mahdia · Hammamet · Tunis · Across Tunisia", coordinates: "Regional traditions", readingTime: "5 min",
    sources: [{ label: "Tunisia National Office of Handicrafts", url: "https://www.artisanat.nat.tn/" }],
    hero: { src: "/images/stories/hammamet-dress.webp", alt: "Close view of a richly embroidered Tunisian dress with traditional bracelets", credit: "Sahli Najla · CC BY-SA 4.0" },
    gallery: [
      { src: "/images/stories/jebba-sefsari.webp", alt: "People wearing a jebba and sefsari in a Tunisian medina", credit: "E-MED · CC BY-SA 4.0" },
      { src: "/images/stories/mahdia-embroidery.webp", alt: "A craftsperson embroidering a Mahdia wedding garment with gold thread", credit: "Boulati Maya · CC BY-SA 4.0" },
      { src: "/images/stories/tunisian-jewelry.webp", alt: "Traditional Tunisian silver and gold jewellery displayed in the Medina of Tunis", credit: "Sami Mlouhi · CC BY-SA 4.0" }
    ], hotspot: { x: 20, y: 51 }
  },
  {
    id: "table", chapter: "V", chapterTitle: "At the Tunisian table",
    title: "Food is a gathering", subtitle: "Couscous, harissa and the work before the meal",
    body: "Couscous begins with grain worked by hand and steamed above a fragrant stew. Across Tunisia its character changes with place and season: fish along parts of the coast, lamb and vegetables inland, and local variations in spice and ritual. Harissa—made from red peppers, spices and olive oil—brings heat, colour and memory to the table. Food here is not merely served. It is prepared together, offered and remembered.",
    fact: "The knowledge and practices of couscous were inscribed by UNESCO as Intangible Cultural Heritage in 2020; harissa followed in 2022.",
    location: "Across Tunisia", coordinates: "A shared national tradition", readingTime: "4 min",
    sources: [{ label: "UNESCO — Harissa, knowledge and practices", url: "https://ich.unesco.org/en/RL/harissa-knowledge-skills-and-culinary-and-social-practices-01710" }],
    hero: { src: "/images/stories/harissa-peppers.webp", alt: "A Tunisian woman preparing red peppers for harissa", credit: "FawziSan · CC BY-SA 4.0" },
    gallery: [{ src: "/images/stories/couscous-preparation.webp", alt: "Pots used to prepare Tunisian couscous on a home stove", credit: "Touzrimounir · CC BY-SA 4.0" }], hotspot: { x: 36, y: 66 }
  },
  {
    id: "olives", chapter: "III", chapterTitle: "The land and its people",
    title: "Under the olive tree", subtitle: "A culture stretching from north to Sahel and south",
    body: "Olive culture does not belong to one Tunisian region. Groves shape Cap Bon, the Sahel around Sousse and Monastir, the immense olive country of Sfax, and landscapes farther south. Harvest brings families and seasonal workers together; fruit is gathered, sorted and pressed through practices that combine old knowledge with modern production. The olive tree links ecology, work, trade and the everyday table.",
    fact: "Tunisia is one of the world’s major olive-oil producers, with cultivation extending across very different climates and regional traditions.",
    location: "Cap Bon · Sahel · Sfax · Southern Tunisia", coordinates: "Across Tunisia", readingTime: "4 min",
    sources: [{ label: "International Olive Council — Tunisia", url: "https://www.internationaloliveoil.org/" }],
    hero: { src: "/images/stories/olive-cleaning.webp", alt: "A Tunisian woman cleaning freshly harvested olives by hand", credit: "Mahdi Azouzi · CC BY-SA 4.0" },
    gallery: [
      { src: "/images/stories/olive-harvest.webp", alt: "Women harvesting olives beneath a mature Tunisian olive tree", credit: "Rahil Riahi · CC BY-SA 4.0" },
      { src: "/images/stories/cap-bon-olives.webp", alt: "Olive groves descending toward the Mediterranean in Cap Bon", credit: "Nicholas Gosse · CC BY-SA 4.0" }
    ], hotspot: { x: 8, y: 70 }
  },
  {
    id: "living", chapter: "VI", chapterTitle: "A culture still alive",
    title: "Many voices, one Tunisia", subtitle: "Heritage is a practice, not a display case",
    body: "Tunisia’s identity is spoken in Arabic and Tunisian Arabic, enriched by Amazigh heritage and centuries of exchange across Africa and the Mediterranean. Malouf music, regional festivals, contemporary design and renewed interest in ancestral techniques show culture moving forward. Young artists and makers do not simply preserve the past: they question it, reinterpret it and carry it into new forms.",
    fact: "The Amazigh name for Tunisia can be written in Tifinagh as ⵜⵓⵏⵙ.",
    location: "Across Tunisia", coordinates: "Living heritage", readingTime: "4 min",
    sources: [{ label: "Tunisia Ministry of Cultural Affairs", url: "https://www.culture.gov.tn/" }],
    hero: { src: "/images/stories/malouf.webp", alt: "Tunisian Malouf musicians and singers performing at Dar Lasram", credit: "TAKOUTI · CC BY-SA 4.0" }, gallery: [],
    video: { src: "/videos/malouf-performance.mp4", captions: "/captions/malouf-performance-en.vtt", title: "La Rachidia performs Malouf", language: "Instrumental and vocal performance", credit: "DrFO.Jr.Tn · CC BY 3.0", transcript: "A full ensemble performs Malouf at the Municipal Theatre of Tunis. Strings, percussion, singers and a conductor share the stage beneath red theatre curtains. The camera remains in a wide view while the music continues." }, hotspot: { x: 62, y: 78 }
  }
];

export const places = [
  ["Tunis", 37, 16, "medina"], ["Carthage", 44, 13, "carthage"], ["Sidi Bou Said", 49, 12, "sidi-bou-said"], ["Nabeul", 59, 19, "clothing"],
  ["Kairouan", 45, 37, "kairouan"], ["Sousse", 55, 33, "olives"], ["Monastir", 60, 39, "living"], ["El Jem", 54, 48, "el-jem"],
  ["Djerba", 68, 70, "craft"], ["Tozeur", 31, 68, "south"], ["Matmata", 54, 72, "south"], ["Tataouine", 62, 80, "south"]
] as const;
