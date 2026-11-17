export type WeightOption = '250g' | '500g' | '1kg' | '1box';

export interface ProductVariant {
  weight: WeightOption;
  label: string;
  price: number;
  multiplier: number;
}

export interface Product {
  id: string;
  name: string;
  hindiName: string;
  category: 'mithai' | 'namkeen' | 'dry-fruits';
  shortNote: string;
  hindiShortNote: string;
  basePrice: number; // base price in INR per kg or per box
  unitType: 'kg' | 'box';
  variants: ProductVariant[];
  featured?: boolean;
  bestseller?: boolean;
  badge?: string;
  artDirection: string; // Exact studio art direction for image slot
  imagePlaceholderColor: string;
  imageUrl?: string;
  isVegetarian: boolean;
  shelfLife: string;
  prepHighlight: string;
  occasions: string[];
}

export interface GiftBox {
  id: string;
  name: string;
  hindiName: string;
  tagline: string;
  price: number;
  contents: string[];
  bestFor: string;
  accentBadge: string;
  artDirection: string;
  imagePlaceholderColor: string;
  imageUrl?: string;
}

export interface Review {
  id: string;
  author: string;
  locality: string;
  rating: number;
  date: string;
  comment: string;
  hindiComment: string;
  favoriteItem: string;
}

export interface Occasion {
  id: string;
  label: string;
  hindiLabel: string;
  tagline: string;
}

export const SITE_CONTENT = {
  store: {
    name: "Mishra Mithai Bhandar",
    hindiName: "मिश्रा मिठाई भंडार",
    tagline: "Taaza mithai, seedhe dukaan se.",
    hindiTagline: "ताज़ा मिठाई, सीधे दुकान से",
    establishedYear: 1985,
    establishedText: "Since 1985 • Kanpur ki shaan",
    hindiEstablishedText: "१९८५ से • कानपुर की शान",
    phoneDisplay: "+91 90000 00000",
    phoneTel: "+919000000000",
    whatsappNumber: "919000000000",
    fssaiLicense: "FSSAI Lic. No. 12723001000458",
    rating: {
      score: 4.9,
      reviewsCount: "1,420+",
      label: "4.9 on Google Reviews (Kanpur)",
    },
    address: {
      line1: "Shop 14-16, Ghanta Ghar Chauraha",
      line2: "Near Phool Bagh, General Ganj",
      city: "Kanpur",
      state: "Uttar Pradesh",
      pincode: "208001",
      fullAddress: "Shop 14-16, Ghanta Ghar Chauraha, Near Phool Bagh, General Ganj, Kanpur, UP 208001",
    },
    hours: {
      display: "7:30 AM – 10:30 PM (Daily)",
      hindiDisplay: "सुबह ७:३० से रात १०:३० बजे तक (प्रतिदिन)",
      note: "Fresh morning batch ready by 8:00 AM",
    },
    deliveryAreas: [
      { name: "Civil Lines", eta: "45 mins" },
      { name: "Swaroop Nagar", eta: "45 mins" },
      { name: "Kakadeo", eta: "60 mins" },
      { name: "Kidwai Nagar", eta: "60 mins" },
      { name: "Govind Nagar", eta: "60 mins" },
      { name: "Mall Road", eta: "30 mins" },
      { name: "Arya Nagar", eta: "45 mins" },
      { name: "Kalyanpur", eta: "75 mins" },
    ],
  },

  nav: {
    links: [
      { label: "Mithai", hindiLabel: "मिठाई", href: "#catalog" },
      { label: "Gift Boxes", hindiLabel: "उपहार डिब्बे", href: "#gift-boxes" },
      { label: "Our Story", hindiLabel: "हमारी कहानी", href: "#our-story" },
      { label: "Bulk & Weddings", hindiLabel: "शादी व थोक", href: "#bulk-orders" },
      { label: "Visit Shop", hindiLabel: "दुकान आएं", href: "#visit" },
    ],
    ctaWhatsApp: "Order on WhatsApp",
    hindiCtaWhatsApp: "व्हाट्सएप पर आर्डर करें",
  },

  hero: {
    badge: "100% Pure Desi Ghee • Fresh Daily Batch",
    hindiBadge: "१००% शुद्ध देसी घी • रोज़ सुबह ताज़ा तैयार",
    titlePrimary: "Pure Desi Ghee Mithai, Handcrafted Daily in Kanpur.",
    titleHindi: "ताज़ा मिठाई, सीधे दुकान से • तीन पीढ़ियों का स्वाद",
    description:
      "Since 1985, our karigars have slow-cooked rich mawa, hand-rolled kaju katli with Goan cashews, and fried crisp dalmoth in pure Bikaneri ghee. No preservatives. No industrial shortcuts.",
    hindiDescription:
      "१९८५ से हमारी दुकान पर शुद्ध मावा, देसी घी और पारंपरिक कारीगरी से हर मिठाई तैयार की जाती है। सीधे हमारे कड़ाही से आपके घर तक।",
    primaryCta: "Order on WhatsApp",
    hindiPrimaryCta: "व्हाट्सएप पर आर्डर भेजें",
    secondaryCta: "Explore Today's Sweets",
    hindiSecondaryCta: "आज की ताज़ा मिठाई देखें",
    todaysFreshTicker: [
      "🔥 Hot Kesariya Jalebi & Imarti fresh at 7:30 AM",
      "✨ Goan Kaju Katli fresh batch ready",
      "🌾 Desi Ghee Besan Laddu cooling on brass thalis",
      "🌿 Hathras Hing Mathri freshly packed",
    ],
    stampText: "Est. 1985 • Kanpur",
    imageBrief:
      "Hero Centerpiece: Kaju Katli and Kesariya Motichoor laddu arranged on an authentic heritage brass thali, garnished with Iranian pistachios and fresh marigold petals. Natural morning golden sunlight, soft depth of field, handcrafted arch mask framing.",
  },

  occasions: [
    { id: "all", label: "All Treats", hindiLabel: "सभी व्यंजन", tagline: "Complete daily shop selection" },
    { id: "diwali", label: "Diwali Specials", hindiLabel: "दीपावली स्पेशल", tagline: "Rich dry-fruit sweets & festive hampers" },
    { id: "weddings", label: "Weddings & Shagun", hindiLabel: "शादी व शगुन", tagline: "Traditional thal sweets and custom boxes" },
    { id: "rakhi", label: "Raksha Bandhan", hindiLabel: "रक्षाबंधन", tagline: "Classic mawa peda & silver kaju barfi" },
    { id: "corporate", label: "Corporate Gifting", hindiLabel: "कॉर्पोरेट उपहार", tagline: "Elegantly boxed premium assortments" },
    { id: "daily", label: "Everyday Chai Pairing", hindiLabel: "दैनिक चाय नाश्ता", tagline: "Crisp mathri, sev, and soothing laddus" },
  ] as Occasion[],

  products: [
    {
      id: "kaju-katli",
      name: "Royal Goan Kaju Katli",
      hindiName: "शाही काजू कतली",
      category: "mithai",
      shortNote: "Made with 100% Goan cashews and delicate real silver vark. Melt-in-mouth texture.",
      hindiShortNote: "१००% गोवा काजू और शुद्ध चांदी के वर्क से निर्मित।",
      basePrice: 900,
      unitType: "kg",
      featured: true,
      bestseller: true,
      badge: "Kanpur's Favorite",
      variants: [
        { weight: "250g", label: "250g", price: 230, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 450, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 900, multiplier: 1.0 },
      ],
      artDirection: "Diagonal slice of diamond-shaped Kaju Katli stacked on green banana leaf, genuine silver foil glimmer, warm background.",
      imagePlaceholderColor: "#EADDC7",
      imageUrl: "/images/products/kaju-katli.webp",
      isVegetarian: true,
      shelfLife: "15 days",
      prepHighlight: "Hand-rolled daily",
      occasions: ["all", "diwali", "weddings", "rakhi", "corporate"],
    },
    {
      id: "besan-laddu",
      name: "Bikaneri Desi Ghee Besan Laddu",
      hindiName: "शुद्ध देसी घी बेसन लड्डू",
      category: "mithai",
      shortNote: "Slow-roasted coarse chana dal flour in rich cow ghee with crushed green cardamom and crunchy magaj.",
      hindiShortNote: "धीमी आंच पर भुना दरदरा बेसन, शुद्ध देसी घी और इलायची।",
      basePrice: 480,
      unitType: "kg",
      featured: true,
      bestseller: true,
      badge: "Signature Craft",
      variants: [
        { weight: "250g", label: "250g", price: 125, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 240, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 480, multiplier: 1.0 },
      ],
      artDirection: "Golden round Besan Laddus with pistachio slivers resting on traditional brass bowl.",
      imagePlaceholderColor: "#F4D284",
      imageUrl: "/images/products/besan-laddu.webp",
      isVegetarian: true,
      shelfLife: "30 days",
      prepHighlight: "Roasted for 45 mins",
      occasions: ["all", "diwali", "weddings", "daily"],
    },
    {
      id: "motichoor-laddu",
      name: "Kesariya Shahi Motichoor Laddu",
      hindiName: "केसरिया मोतीचूर लड्डू",
      category: "mithai",
      shortNote: "Micro pearl boondi fried in desi ghee, steeped in Kashmiri saffron syrup and watermelon seeds.",
      hindiShortNote: "बारीक बूंदी, कश्मीरी केसर चाशनी और मगज के दाने।",
      basePrice: 520,
      unitType: "kg",
      featured: false,
      bestseller: true,
      badge: "Pooja Special",
      variants: [
        { weight: "250g", label: "250g", price: 135, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 260, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 520, multiplier: 1.0 },
      ],
      artDirection: "Bright saffron motichoor laddus glistening with sugar pearls, garnished with silver leaf.",
      imagePlaceholderColor: "#F3A953",
      imageUrl: "/images/products/motichoor-laddu.webp",
      isVegetarian: true,
      shelfLife: "7 days",
      prepHighlight: "Fresh morning batch",
      occasions: ["all", "diwali", "weddings", "rakhi"],
    },
    {
      id: "pista-barfi",
      name: "Mawa Malai Pista Barfi",
      hindiName: "मलाई पिस्ता बर्फी",
      category: "mithai",
      shortNote: "Reduced farm milk mawa with natural Iranian pistachios. Subtle sweetness, ultra-rich dairy finish.",
      hindiShortNote: "शुद्ध खोया और ईरानी पिस्ता से भरपूर पारंपरिक बर्फी।",
      basePrice: 820,
      unitType: "kg",
      featured: false,
      bestseller: false,
      badge: "Heritage Recipe",
      variants: [
        { weight: "250g", label: "250g", price: 210, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 410, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 820, multiplier: 1.0 },
      ],
      artDirection: "Layered green pistachio barfi squares on a white marble slab.",
      imagePlaceholderColor: "#D6E4C4",
      imageUrl: "/images/products/kaju-katli.webp",
      isVegetarian: true,
      shelfLife: "8 days",
      prepHighlight: "Slow simmered mawa",
      occasions: ["all", "weddings", "rakhi", "corporate"],
    },
    {
      id: "chhena-rasgulla",
      name: "Kolkata Style Spongy Rasgulla",
      hindiName: "छेना रसगुल्ला",
      category: "mithai",
      shortNote: "Hand-kneaded fresh cow chhena balls simmered in feather-light aromatic cardamom sugar syrup.",
      hindiShortNote: "गाय के ताज़ा दूध का छेना, हल्की इलायची वाली चाशनी में डूबा।",
      basePrice: 360,
      unitType: "kg",
      featured: false,
      bestseller: true,
      badge: "Fresh Dairy",
      variants: [
        { weight: "250g", label: "250g", price: 95, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 180, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 360, multiplier: 1.0 },
      ],
      artDirection: "Pure white round rasgulla in a traditional terracotta kulhad bowl with clear syrup.",
      imagePlaceholderColor: "#F5F5ED",
      imageUrl: "/images/products/rasgulla.webp",
      isVegetarian: true,
      shelfLife: "3 days",
      prepHighlight: "Boiled fresh at 6 AM",
      occasions: ["all", "weddings", "daily"],
    },
    {
      id: "gulab-jamun",
      name: "Desi Ghee Shahi Gulab Jamun",
      hindiName: "शाही गुलाब जामुन",
      category: "mithai",
      shortNote: "Soft mawa dumplings deep-fried in pure ghee, perfumed with Kannauj organic rose water and saffron.",
      hindiShortNote: "शुद्ध मावा, देसी घी में तला हुआ, कन्नौज के गुलाब जल की महक।",
      basePrice: 420,
      unitType: "kg",
      featured: true,
      bestseller: true,
      badge: "Hot Evening Batch",
      variants: [
        { weight: "250g", label: "250g", price: 110, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 210, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 420, multiplier: 1.0 },
      ],
      artDirection: "Warm dark-amber gulab jamuns in brass bowl with pistachio flakes and saffron threads.",
      imagePlaceholderColor: "#7A351C",
      imageUrl: "/images/products/gulab-jamun.webp",
      isVegetarian: true,
      shelfLife: "5 days",
      prepHighlight: "Served warm",
      occasions: ["all", "weddings", "diwali", "daily"],
    },
    {
      id: "soan-papdi",
      name: "Crisp Desi Ghee Soan Papdi",
      hindiName: "देसी घी सोन पापड़ी",
      category: "mithai",
      shortNote: "Feather-light crispy pulled-sugar flakes with gram flour, pure ghee, and shaved almonds.",
      hindiShortNote: "हल्की, कुरकुरी और मुंह में घुल जाने वाली असली सोन पापड़ी।",
      basePrice: 320,
      unitType: "kg",
      featured: false,
      bestseller: false,
      badge: "Classic Festive",
      variants: [
        { weight: "250g", label: "250g", price: 85, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 160, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 320, multiplier: 1.0 },
      ],
      artDirection: "Flaky square cubes of soan papdi showing fibrous golden spun layers.",
      imagePlaceholderColor: "#EBDDBA",
      imageUrl: "/images/products/soan-papdi.webp",
      isVegetarian: true,
      shelfLife: "45 days",
      prepHighlight: "Air-sealed freshness",
      occasions: ["all", "diwali", "rakhi"],
    },
    {
      id: "doda-barfi",
      name: "Old-City Sprouted Wheat Doda Barfi",
      hindiName: "स्पेशल डोडा बर्फी",
      category: "mithai",
      shortNote: "Slow-caramelized milk solids, sprouted wheat malt, and roasted nuts. Chewy, earthy, and nutrient-dense.",
      hindiShortNote: "अंकुरित गेहूं, गाढ़ा दूध और काजू-बादाम का बेमिसाल मेल।",
      basePrice: 640,
      unitType: "kg",
      featured: false,
      bestseller: false,
      badge: "Winter & Energy",
      variants: [
        { weight: "250g", label: "250g", price: 165, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 320, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 640, multiplier: 1.0 },
      ],
      artDirection: "Dark caramelized doda barfi topped with crushed walnuts and melon seeds.",
      imagePlaceholderColor: "#5B3624",
      imageUrl: "/images/products/mathura-peda.webp",
      isVegetarian: true,
      shelfLife: "20 days",
      prepHighlight: "Caramelized 6 hours",
      occasions: ["all", "diwali", "daily"],
    },
    {
      id: "kanpuri-dalmoth",
      name: "Kanpur Special Shahi Dalmoth",
      hindiName: "कानपुर स्पेशल शाही दालमोठ",
      category: "namkeen",
      shortNote: "Fried whole masoor lentils, spiced gram sev, and crunchy cashew halves tossed in roasted cumin.",
      hindiShortNote: "साबुत मसूर, तीखा सेव, भुने काजू और भुना जीरा मसाला।",
      basePrice: 360,
      unitType: "kg",
      featured: true,
      bestseller: true,
      badge: "Kanpur Legend",
      variants: [
        { weight: "250g", label: "250g", price: 95, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 180, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 360, multiplier: 1.0 },
      ],
      artDirection: "Top view of dark spicy crisp dalmoth namkeen with fried cashews in copper bowl.",
      imagePlaceholderColor: "#935C33",
      imageUrl: "/images/products/kanpur-samosa.webp",
      isVegetarian: true,
      shelfLife: "60 days",
      prepHighlight: "Stone ground spices",
      occasions: ["all", "daily", "diwali", "corporate"],
    },
    {
      id: "ajwain-mathri",
      name: "Khasta Ajwain Mathri",
      hindiName: "खस्ता अजवाइन मठरी",
      category: "namkeen",
      shortNote: "Flaky spiced flour discs infused with aromatic Carom seeds (Ajwain) and black peppercorns.",
      hindiShortNote: "अजवाइन और काली मिर्च से महकती कुरकुरी चाय वाली मठरी।",
      basePrice: 280,
      unitType: "kg",
      featured: false,
      bestseller: true,
      badge: "Tea-Time Must",
      variants: [
        { weight: "250g", label: "250g", price: 75, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 140, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 280, multiplier: 1.0 },
      ],
      artDirection: "Stack of golden-brown prickled flaky mathris beside a steaming clay kulhad of tea.",
      imagePlaceholderColor: "#DDBE78",
      imageUrl: "/images/products/gujiya.webp",
      isVegetarian: true,
      shelfLife: "45 days",
      prepHighlight: "Double fried crisp",
      occasions: ["all", "daily", "rakhi"],
    },
    {
      id: "hing-bhujia",
      name: "Hathras Hing Sev Bhujia",
      hindiName: "हाथरस हींग सेव भुजिया",
      category: "namkeen",
      shortNote: "Crisp moth-bean flour noodles tempered with sharp Hathras compounded asafoetida and red chillies.",
      hindiShortNote: "मोंठ की दाल और असली हाथरस हींग का तीखा कुरकुरा सेव।",
      basePrice: 260,
      unitType: "kg",
      featured: false,
      bestseller: false,
      badge: "Local Spices",
      variants: [
        { weight: "250g", label: "250g", price: 70, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 130, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 260, multiplier: 1.0 },
      ],
      artDirection: "Tangled thin yellow bhujia strands in ceramic dish with whole dry red chilli nearby.",
      imagePlaceholderColor: "#E7AC38",
      imageUrl: "/images/products/jalebi.webp",
      isVegetarian: true,
      shelfLife: "60 days",
      prepHighlight: "100% cold pressed oil",
      occasions: ["all", "daily"],
    },
    {
      id: "namak-pare",
      name: "Ghee Khasta Namak Pare",
      hindiName: "देसी घी खस्ता नमक पारे",
      category: "namkeen",
      shortNote: "Diamond-cut savory crisps fried in desi ghee, dusted with black rock salt and crushed cumin.",
      hindiShortNote: "देसी घी में तले हुए खस्ता डायमंड-कट नमक पारे।",
      basePrice: 240,
      unitType: "kg",
      featured: false,
      bestseller: false,
      badge: "Grandma's Style",
      variants: [
        { weight: "250g", label: "250g", price: 65, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 120, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 240, multiplier: 1.0 },
      ],
      artDirection: "Diamond-shaped crunchy namak pare piled casually on vintage brass saucer.",
      imagePlaceholderColor: "#E2C889",
      imageUrl: "/images/products/gujiya.webp",
      isVegetarian: true,
      shelfLife: "45 days",
      prepHighlight: "Light salted crunch",
      occasions: ["all", "daily", "diwali"],
    },
    {
      id: "salted-cashews",
      name: "W240 Jumbo Roasted Salted Cashews",
      hindiName: "रोस्टेड नमकीन काजू",
      category: "dry-fruits",
      shortNote: "Plump hand-selected W240 grade cashews roasted dry with pure rock salt. Zero artificial oil.",
      hindiShortNote: "रॉक साल्ट में भुने हुए प्रीमियम बड़े दानेदार काजू।",
      basePrice: 1200,
      unitType: "kg",
      featured: true,
      bestseller: false,
      badge: "Export Quality",
      variants: [
        { weight: "250g", label: "250g", price: 310, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 600, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 1200, multiplier: 1.0 },
      ],
      artDirection: "Golden roasted jumbo cashews with crystalline salt grain flecks in wooden bowl.",
      imagePlaceholderColor: "#E9DAC0",
      imageUrl: "/images/products/salted-cashews.webp",
      isVegetarian: true,
      shelfLife: "90 days",
      prepHighlight: "Dry-roasted daily",
      occasions: ["all", "diwali", "corporate", "weddings"],
    },
    {
      id: "mamra-almonds",
      name: "Afghan Organic Mamra Badam",
      hindiName: "अफगानी मामरा बादाम",
      category: "dry-fruits",
      shortNote: "Sun-dried authentic Mamra almond kernels with high natural oil concentration and crunchy snap.",
      hindiShortNote: "प्राकृतिक तेल से भरपूर असली अफगानी मामरा बादाम।",
      basePrice: 1450,
      unitType: "kg",
      featured: false,
      bestseller: false,
      badge: "High Nutrition",
      variants: [
        { weight: "250g", label: "250g", price: 370, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 725, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 1450, multiplier: 1.0 },
      ],
      artDirection: "Whole unpeeled Mamra almonds spread on raw linen napkin in warm sunlight.",
      imagePlaceholderColor: "#B57A4C",
      imageUrl: "/images/products/mamra-almonds.webp",
      isVegetarian: true,
      shelfLife: "180 days",
      prepHighlight: "100% natural crop",
      occasions: ["all", "diwali", "corporate"],
    },
    {
      id: "roasted-pista",
      name: "California Salted Cracked Pistachios",
      hindiName: "रोस्टेड नमकीन पिस्ता",
      category: "dry-fruits",
      shortNote: "Naturally smiling jumbo pistachios with vibrant green kernels and a subtle sea salt crunch.",
      hindiShortNote: "हल्के नमकीन, कुरकुरे और बड़े दानेदार छिलके वाले पिस्ता।",
      basePrice: 1350,
      unitType: "kg",
      featured: false,
      bestseller: false,
      badge: "Jumbo Grade",
      variants: [
        { weight: "250g", label: "250g", price: 350, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 675, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 1350, multiplier: 1.0 },
      ],
      artDirection: "Naturally split pistachios showing vivid purple-green nuts on textured earthen tile.",
      imagePlaceholderColor: "#A3AF76",
      imageUrl: "/images/products/roasted-pista.webp",
      isVegetarian: true,
      shelfLife: "90 days",
      prepHighlight: "Slow oven roasted",
      occasions: ["all", "diwali", "corporate"],
    },
    {
      id: "sundried-raisins",
      name: "Nashik Golden Long Kishmish",
      hindiName: "नासिक गोल्डन किशमिश",
      category: "dry-fruits",
      shortNote: "Seedless elongated sweet green raisins sun-dried on vine racks in Maharashtra vineyards.",
      hindiShortNote: "नासिक की मीठी, बिना बीज वाली रसीली हरी किशमish।",
      basePrice: 480,
      unitType: "kg",
      featured: false,
      bestseller: false,
      badge: "Pure Sweetness",
      variants: [
        { weight: "250g", label: "250g", price: 125, multiplier: 0.25 },
        { weight: "500g", label: "500g", price: 240, multiplier: 0.5 },
        { weight: "1kg", label: "1 kg", price: 480, multiplier: 1.0 },
      ],
      artDirection: "Cluster of amber-golden elongated raisins in dark rustic metal spoon.",
      imagePlaceholderColor: "#CDB052",
      imageUrl: "/images/products/sundried-raisins.webp",
      isVegetarian: true,
      shelfLife: "120 days",
      prepHighlight: "Sun-cured naturally",
      occasions: ["all", "diwali", "daily"],
    },
  ] as Product[],

  giftBoxes: [
    {
      id: "shahi-uphaar",
      name: "Shahi Uphaar Festive Hamper",
      hindiName: "शाही उपहार उत्सव पेटी",
      tagline: "Our signature gold-embossed box holding Kanpur's four grand sweets & snacks.",
      price: 1200,
      contents: [
        "250g Royal Goan Kaju Katli",
        "250g Kesariya Motichoor Laddu",
        "200g Kanpur Special Dalmoth",
        "150g Roasted Salted Cashews",
      ],
      bestFor: "Diwali, Family Milestones & Shagun",
      accentBadge: "Bestseller Gifting Box",
      artDirection: "Royal crimson and gold foil rigid gift box with satin ribbon, displaying divided brass bowls inside filled with mithai.",
      imagePlaceholderColor: "#8C1C13",
      imageUrl: "/images/products/gift-box-shahi.webp",
    },
    {
      id: "parivaar-sangam",
      name: "Parivaar Sangam Sweet & Savory Box",
      hindiName: "परिवार संगम डिब्बा",
      tagline: "The perfect balance of rich ghee sweetness and classic tea-time khasta namkeen.",
      price: 850,
      contents: [
        "250g Desi Ghee Besan Laddu",
        "250g Khasta Ajwain Mathri",
        "200g Dalmoth Namkeen",
        "200g Khasta Namak Pare",
      ],
      bestFor: "Weekend Family Gatherings & Chai Tables",
      accentBadge: "Family Favorite",
      artDirection: "Warm saffron-yellow patterned box opened to reveal neat quarters of besan laddu and golden mathris.",
      imagePlaceholderColor: "#E8A317",
      imageUrl: "/images/products/gift-box-parivaar.webp",
    },
    {
      id: "deepawali-shubh",
      name: "Deepawali Shubh Wooden Treasury",
      hindiName: "दीपावली शुभ काष्ठ मंजूषा",
      tagline: "Hand-finished mango wood box with antique brass clasp, packed with royal dry-fruit mithai.",
      price: 1650,
      contents: [
        "300g Royal Goan Kaju Katli",
        "250g Malai Pista Barfi",
        "200g Afghan Mamra Badam",
        "200g Salted Roasted Cashews",
        "Brass Pooja Diya Included",
      ],
      bestFor: "VIP Clients, Relatives & Grand Festivities",
      accentBadge: "Keepsake Wooden Box",
      artDirection: "Artisanal dark wood box with carved floral jali work and a miniature brass diya resting in front.",
      imagePlaceholderColor: "#512D19",
      imageUrl: "/images/products/gift-box-treasury.webp",
    },
  ] as GiftBox[],

  ourStory: {
    title: "Three Generations of Kanpur's Sweet Legacy",
    hindiTitle: "१९८५ से कानपुर की परंपरा और स्वाद की शुद्धता",
    pullQuote:
      "“We don't use chemical essences to mimic aroma. When pure desi ghee meets slow-roasted mawa in a heavy brass karahi, Kanpur knows the smell from a street away.”",
    pullQuoteAuthor: "— Shri Rameshwar Nath Mishra, Founder",
    paragraphs: [
      "In the winter of 1985, Rameshwar Nath Mishra opened a modest eight-by-ten shutter near Phool Bagh with one single charcoal stove, ten kilograms of Bikaneri cow ghee, and his grandfather's recipe for slow-simmered besan laddu.",
      "Thirty-nine years and three generations later, Kanpur has changed, but our morning routine has not. Every day at 4:30 AM, fresh whole milk arrives from farms along the Ganga basin. The mawa is reduced slowly in seasoned iron kadas, and our master karigars shape each sweet by hand.",
      "We never cut corners with palm oils, artificial brighteners, or machine extruders. When you share our mithai with your family, you share our heritage.",
    ],
    milestones: [
      { year: "1985", label: "First Kadai Lit", desc: "Started with Besan Laddu and Dalmoth at Phool Bagh." },
      { year: "1998", label: "Goan Kaju Katli Recipe", desc: "Perfected our 100% cashew ratio without peanut adulteration." },
      { year: "2012", label: "Custom Wedding Thal", desc: "Became Kanpur's trusted choice for over 5,000 wedding shagun boxes." },
      { year: "Today", label: "Fresh to Your Door", desc: "Now taking orders directly via WhatsApp for citywide delivery." },
    ],
    photos: [
      {
        caption: "Morning milk reduction in heavy iron kadahi",
        hindiCaption: "लोहे की कड़ाही में धीमी आंच पर गाढ़ा होता दूध व मावा",
        brief: "Steam rising from brass kadai over glowing wood embers, stirring ladle.",
        imageUrl: "/images/story/craft-process-1.webp",
      },
      {
        caption: "Traditional craft of shaping and turning hot sweets",
        hindiCaption: "पारंपरिक कारीगरी से कड़ाही में तली जाती ताज़ा मिठाइयाँ",
        brief: "Master halwai handcrafting sweets with brass skimmer.",
        imageUrl: "/images/story/craft-process-2.webp",
      },
      {
        caption: "Hot pure desi ghee frying and sugar syrup dipping",
        hindiCaption: "शुद्ध देसी घी में सिकाई और महकती केसर चाशनी",
        brief: "Fresh sweets frying in smoking pure ghee and dipping in syrup.",
        imageUrl: "/images/story/craft-process-3.webp",
      },
    ],
  },

  bulkOrders: {
    title: "Weddings, Shagun & Corporate Gifting",
    hindiTitle: "शादी-ब्याह, शगुन एवं थोक आर्डर",
    description:
      "Planning a family wedding, baby arrival, or festive corporate distribution in Kanpur? We prepare customized thals, personalized box sleeves, and guaranteed fresh-morning delivery directly to your venue.",
    perks: [
      "Custom wedding box branding with couple or family names",
      "Special wholesale pricing for orders above 25 kg / 50 boxes",
      "Complimentary tasting box dispatched to your home",
      "Dedicated WhatsApp coordinator for delivery schedules",
    ],
    eventTypes: [
      "Wedding Shagun & Thal (विवाह शगुन)",
      "Corporate Festival Gifting (कंपनी उपहार)",
      "Engagement / Roka (सगाई व रोका)",
      "Birthday & Housewarming (गृह प्रवेश)",
      "Bulk Prasad & Temple Pooja (प्रसाद व पूजा)",
    ],
  },

  reviews: [
    {
      id: "rev-1",
      author: "Sunil Tandon",
      locality: "Civil Lines, Kanpur",
      rating: 5,
      date: "3 days ago",
      comment:
        "The only sweet shop in Kanpur where the Besan Laddu still tastes like what my grandfather brought home in 1988. Pure ghee fragrance, zero industrial shortcuts.",
      hindiComment: "असली देसी घी की महक, ३५ साल से वही स्वाद।",
      favoriteItem: "Bikaneri Besan Laddu",
    },
    {
      id: "rev-2",
      author: "Dr. Rashmi Nigam",
      locality: "Swaroop Nagar, Kanpur",
      rating: 5,
      date: "Last week",
      comment:
        "We ordered 120 wedding boxes for my daughter's wedding in December. Every single box was packed fresh that same morning and reached Landmark Hotel right on time. Outstanding service!",
      hindiComment: "शादी के १२० डिब्बे बिल्कुल ताज़ा समय पर मिले।",
      favoriteItem: "Shahi Uphaar Festive Hamper",
    },
    {
      id: "rev-3",
      author: "Alok Pandey",
      locality: "Kakadeo, Kanpur",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Their Dalmoth and Kaju Katli are unbeatable in all of UP. Ordering via WhatsApp took literally 45 seconds, and it arrived in Kakadeo within 50 minutes.",
      hindiComment: "व्हाट्सएप पर ४५ सेकंड में आर्डर, ५० मिनट में डिलीवरी।",
      favoriteItem: "Kanpur Special Dalmoth",
    },
    {
      id: "rev-4",
      author: "Meenakshi Awasthi",
      locality: "Kidwai Nagar, Kanpur",
      rating: 5,
      date: "A month ago",
      comment:
        "The Chhena Rasgulla is exceptionally spongy, soft, and not cloyingly sweet. You can taste the purity of fresh cow milk.",
      hindiComment: "छेना रसगुल्ला बहुत हल्का और ताज़ा है।",
      favoriteItem: "Chhena Rasgulla",
    },
  ] as Review[],

  footer: {
    heroLine: "Mithai ka asli swaad.",
    hindiHeroLine: "मिठाई का असली स्वाद।",
    subLine: "Kanpur's pure desi ghee sweet institution since 1985.",
    quickLinks: [
      { label: "Mithai Catalog", href: "#catalog" },
      { label: "Curated Gift Boxes", href: "#gift-boxes" },
      { label: "Our 1985 Story", href: "#our-story" },
      { label: "Bulk Enquiries", href: "#bulk-orders" },
      { label: "Shop Timings & Location", href: "#visit" },
    ],
    compliance: "Certified 100% Pure Vegetarian Kitchen (शुद्ध शाकाहारी). No synthetic artificial food colors or animal fats.",
    copyright: "© 1985–2026 Mishra Mithai Bhandar. Handcrafted with pride in Kanpur, UP.",
  },
};
