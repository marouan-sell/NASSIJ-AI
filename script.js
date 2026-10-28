/**
 * NASSIJ AI MOROCCO (نسيج) - Core Interactive & Localization Engine
 * Pure Vanilla JavaScript ES2022
 */

// Bilingual Localization Dictionary
const i18nData = {
  en: {
    brand_sub: "HERITAGE TECH",
    nav_home: "Home",
    nav_discover: "Discover Caftans",
    nav_designer: "AI Designer",
    nav_artisans: "Our Artisans",
    nav_museum: "Heritage Museum",
    nav_about: "About Us",
    nav_login: "Sign In",
    nav_cta: "Get Started",
    lang_btn: "العربية",
    
    // Hero
    hero_badge: "Moroccan Heritage • AI Innovation • Sustainable Fashion",
    hero_title_1: "The Art of Moroccan Caftan,",
    hero_title_2: "Reimagined with AI.",
    hero_sub: "Experience the pinnacle of Moroccan craftsmanship. Create your bespoke, made-to-measure caftan using artificial intelligence, while directly supporting the master artisans who preserve our ancestral heritage.",
    hero_cta: "Design Your Caftan",
    note_woven: "Woven with heritage",
    note_hand: "From Heritage Authenticity to Future Innovation",
    
    // AI Designer
    designer_label: "AI CAFTAN DESIGNER",
    designer_title: "Your Imagination, Our Heritage.",
    designer_desc: "Create your unique caftan by combining traditional Moroccan craftsmanship with modern AI technology. Customize every detail to match your style, occasion, and heritage.",
    field_occasion: "Occasion",
    field_occasion_ph: "Select Occasion",
    opt_wedding: "Royal Wedding (3arras)",
    opt_eid: "Eid & Religious Celebration",
    opt_gala: "Diplomatic & Haute Couture Gala",
    opt_henna: "Henna Ceremony & Traditions",
    opt_festive: "Caftan Fashion Week",
    field_color: "Color Palette",
    field_style: "Silhouette Style",
    field_style_ph: "Select Style",
    opt_takchita: "Traditional Takchita Medfoun",
    opt_royal_fassi: "Royal Fassi Two-Piece",
    opt_modern_slim: "Contemporary Sleek Caftan",
    opt_majestic_cape: "Imperial Caftan with Velvet Cape",
    opt_princess: "Princess Flared Silhouette",

    field_fabric: "Noble Fabric & Textile",
    field_fabric_ph: "Select Noble Fabric",
    opt_mobra: "Pure Mobra Silk Velvet",
    opt_duchesse: "Italian Duchesse Silk Satin",
    opt_brocade: "Imperial Fassi Brocade (Bencherif)",
    opt_crepe: "Organza & Crêpe de Soie",
    opt_mlifa: "Cashmere-Wool Mlifa",

    field_embroidery: "Embroidery School",
    field_embroidery_ph: "Select Embroidery",
    opt_tarz_fassi: "Tarz Fassi (Geometric Counted Thread)",
    opt_tarz_rbati: "Tarz Rbati (Silk Satin Floral Stitch)",
    opt_majboud: "Majboud (Pure Gold Thread)",
    opt_zwak: "Zwak Maâlem (Handmade Sfifa & Majboud)",
    opt_tarz_chamali: "Tarz Chamali Northern Floral",

    field_mdamma: "Mdamma (Belt) Craft",
    field_mdamma_ph: "Select Mdamma Belt",
    opt_mdamma_gold: "Hand-Engraved Royal Gold Belt",
    opt_mdamma_velvet: "Gold Majboud Velvet Belt",
    opt_mdamma_brocade: "Silk Brocade with Sfifa",
    opt_mdamma_silver: "Contemporary Fine Silver",
    opt_mdamma_mjadel: "Hand-Braided Silk Mjadel",

    field_sleeves: "Sleeve & Cut Silhouette",
    field_sleeves_ph: "Select Sleeve Style",
    opt_sleeve_bell: "Imperial Flared Bell Sleeves",
    opt_sleeve_fitted: "Classic Fitted with Silk Aqaad",
    opt_sleeve_cape: "Royal Slit Cape Sleeves",

    field_sfifa: "Sfifa & Trimming Grade",
    field_sfifa_ph: "Select Sfifa Trimming",
    opt_sfifa_skalli: "Pure Skalli Gold Thread Sfifa",
    opt_sfifa_silver: "Silver Skalli with Sabra Silk",
    opt_sfifa_dfina: "Tone-on-Tone Handwoven Dfina",
    opt_sfifa_zwak: "Zwak El Maâlem 4-Ply Braiding",

    field_budget: "Budget Range",
    field_budget_ph: "Select Budget",
    opt_budget_1: "8,000 - 12,000 MAD (€800 - €1,150)",
    opt_budget_2: "12,000 - 18,000 MAD (€1,150 - €1,750)",
    opt_budget_3: "18,000+ MAD (€1,750+ Haute Couture)",
    btn_generate: "Generate My Design",
    designer_disclaimer: "This prototype is an AI-assisted concept. Every design is validated by a certified Moroccan Maâlem before fabric is cut.",
    ai_preview_badge: "AI Preview (Prototype)",
    btn_commission: "Commission This Design",
    spec_fabric: "Fabric: Pure Silk & Antique Gold Sfifa",
    spec_time: "Crafting Time: 3 to 4 Weeks",
    spec_atelier: "Matched Atelier: Atelier El Fellah, Tangier",

    // Collection
    coll_label: "OUR COLLECTION",
    coll_title: "Discover Moroccan Caftans",
    coll_view_all: "View All Collection",
    btn_discover: "Discover This Caftan",
    btn_quote: "Request a Quote",

    // Artisans
    art_label: "OUR ARTISANS",
    art_title: "Behind Every Caftan, There Is a Story.",
    art_desc: "NASSIJ AI connects Moroccan master artisans directly with new patrons worldwide, honors their ancestral skills, and guarantees a 90% direct payout for every commission.",
    art_cta: "Meet Our Artisans",
    cat_tailors: "Master Tailors (Khayyatin)",
    cat_embroiderers: "Embroiderers (M'allemat Tarz)",
    cat_sfifa: "Sfifa Specialists",
    cat_aqad: "Aqad Hand-Knotters",

    // Museum
    mus_label: "DIGITAL HERITAGE MUSEUM",
    mus_title: "A Heritage Worth Preserving.",
    mus_desc: "Explore the rich centuries-old history of Moroccan caftans and the enduring craftsmanship—from secret embroidery stitches to royal lineage archives.",
    mus_cta: "Explore the Museum",
    feat_craft: "Traditional Craftsmanship",
    feat_emb: "Embroidery Techniques",
    feat_mat: "Materials & Rare Textiles",
    feat_hist: "Historical Photos & Oral Histories",
    feat_stories: "Stories from Moroccan Maâlems",

    // Sustainability
    sust_label: "SUSTAINABLE FASHION",
    sust_title: "Tradition Meets Sustainability.",
    sust_desc: "We are committed to a more responsible fashion future by fusing ancestral Moroccan made-to-order craft with zero-waste digital technology.",
    sust_1: "Made-to-order Production",
    sust_2: "Reduced Fabric Waste",
    sust_3: "Support for Local Artisans",
    sust_4: "Responsible Material Choices",
    sust_5: "Digital Preservation of Skills",
    stat_deadstock: "0% Deadstock Inventory",
    stat_payout: "90% Direct Artisan Payout",
    stat_waste: "35% Fabric Scrap Reduction",
    stat_traceable: "100% Verified Provenance",

    // Footer
    footer_copy: "© 2026 NASSIJ AI Morocco. All rights reserved.",
    footer_tagline: "Crafted by Moroccan Hands. Inspired by Moroccan Heritage. Enhanced by AI.",
    contact_loc: "Tangier & Fez, Morocco",
    privacy_policy: "Privacy Policy",
    terms_conditions: "Terms and conditions",

    // Dedicated Collection Page
    coll_page_badge: "HAUTE COUTURE MOROCCAN CAFTANS",
    coll_page_title_1: "Ancestral Splendor,",
    coll_page_title_2: "Curated for Royalty.",
    coll_page_sub: "Fourteen bespoke, certified museum-grade creations handcrafted by master Moroccan artisans across Tangier, Fez, and Rabat. Each creation is tailored to order with verified cryptographic provenance and 90% direct master compensation.",
    trust_craft: "100% Certified Maâlem Handcraft",
    trust_fair: "Fair Trade 90% Direct Payout",
    trust_passport: "Cryptographic Digital Passport",
    trust_shipping: "Insured White-Glove Global Delivery",
    filter_search_ph: "Search by style, fabric, atelier or color...",
    filter_all: "All Pieces",
    filter_fassi: "Royal Fassi",
    filter_bridal: "Bridal Takchita",
    filter_modern: "Modern Slim",
    filter_cape: "Imperial Cape",
    filter_velvet: "Velvet & Mlifa",
    lbl_filter_region: "Atelier Region",
    opt_region_all: "All Moroccan Guilds",
    lbl_filter_fabric: "Noble Fabric",
    opt_fabric_all: "All Noble Textiles",
    lbl_filter_price: "Price Range",
    opt_price_all: "All Price Ranges",
    lbl_filter_sort: "Sort Order",
    sort_featured: "Curated Collection",
    sort_price_asc: "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    sort_lead_time: "Crafting Time: Fast to Bespoke",
    results_text: "Haute Couture Pieces Available",
    btn_reset_filters: "↺ Reset All Filters",
    card_quick_view: "Quick View",
    card_customize_ai: "Customize in AI",
    empty_title: "No Caftans Matched Your Criteria",
    empty_desc: "Try clearing your filters or search terms, or design your bespoke vision with our AI designer.",
    bespoke_badge: "BESPOKE ATELIER COMMISSION",
    bespoke_title: "Envisioning a One-of-a-Kind Imperial Piece?",
    bespoke_sub: "Our AI Studio allows you to customize embroidery schools, noble fabrics, Mdamma belt filigree, and sleeve cuts, co-creating directly with certified master artisans in Tangier and Fez.",
    btn_open_ai_designer: "Launch AI Generative Studio",
    btn_visit_museum: "Visit Heritage Museum",

    // Dedicated Museum Page
    mus_hero_badge: "LIVING CULTURAL SANCTUARY",
    mus_hero_title_1: "Ten Centuries of",
    mus_hero_title_2: "Moroccan Couture Heritage.",
    mus_hero_sub: "From Almoravid Saharan silks to Saadian 24k gold Majboud, explore how Moroccan ancestral craftsmanship has been preserved, celebrated, and elevated across imperial dynasties into the digital era.",
    mus_nav_timeline: "Dynastic Timeline (1062 - Present)",
    mus_nav_pillars: "4 Craft Pillars",
    mus_nav_verify: "Provenance Simulator",
    mus_nav_archive: "Artisan Oral Archive",
    dynasty_section_badge: "CHRONICLES OF MOROCCAN SPLENDOR",
    dynasty_section_title: "The Four Imperial Dynasties",
    dynasty_section_sub: "Follow the evolutionary trajectory of the caftan through Moroccan imperial courts, trade routes, and guild foundations.",
    dyn_almoravid_name: "Almoravid Dynasty (المرابطون)",
    dyn_almoravid_theme: "Saharan Silk & Early Tunics",
    dyn_merinid_name: "Merinid Dynasty (المرينيون)",
    dyn_merinid_theme: "The Golden Looms of Fez",
    dyn_saadian_name: "Saadian Dynasty (السعديون)",
    dyn_saadian_theme: "24k Gold Majboud & Takchita",
    dyn_alaouite_name: "Alaouite Dynasty (العلويون)",
    dyn_alaouite_theme: "Haute Couture & AI Heritage",
    pillars_section_badge: "SACRED GUILD ARTS",
    pillars_section_title: "The Four Master Craft Pillars",
    pillars_section_sub: "The irreplaceable techniques passed exclusively from master (Maâlem) to apprentice over decades of physical discipline.",
    pillar_1_title: "24k Gold Majboud Bullion",
    pillar_1_desc: "An ancestral technique where pure 24k Skalli gold thread is guided over thick parchment stencils using a polished cow-horn stylus (*Mizwed*), creating embossed architectural motifs on velvet and brocade.",
    pillar_2_title: "The Bencherif Brocade Loom",
    pillar_2_desc: "Woven on centuries-old wooden drawlooms operated synchronously by two master weavers. The loom produces merely 20 centimeters of royal silk brocade per day, interlaced with authentic metallic gold threads.",
    pillar_3_title: "Hand-Knotted Sabra Aqaad",
    pillar_3_desc: "Spherical buttons sculpted by hand from 100% biodegradable aloe vera silk without needles. Over 100 identical spherical knots run down the front of a ceremonial caftan, fastening it with royal poise.",
    pillar_4_title: "Sfifa & Mjadel Braiding",
    pillar_4_desc: "The architectural spine of Moroccan garments. Continuous decorative ribbons woven with up to 12 strands of silk and gold wire, structurally binding the front placket, hem, and flared sleeves.",
    btn_explore_craft: "Explore Technique Archive →",
    prov_badge: "IMMUTABLE BLOCKCHAIN PROVENANCE",
    prov_title: "Digital Heritage Passport Verification Simulator",
    prov_sub: "Every NASSIJ AI caftan is permanently minted with a cryptographic certificate documenting artisan identity, ethical compensation, fabric origin, and craft hours. Test the verification ledger below:",
    lbl_passport_input: "Enter Garment Digital Passport ID:",
    btn_verify_now: "Verify Provenance",
    lbl_quick_presets: "Sample Verified Passports:",
    oral_badge: "THE LIVING VOICES",
    oral_title: "Artisan Oral Archive & Workshop Soundscapes",
    oral_sub: "Listen to recorded oral histories and authentic acoustic rhythms from the ancestral ateliers of Tangier Kasbah and Fez Medina.",
    quote_maalam_omar: "“The caftan is not merely a garment we put on; it is a living historical parchment. Every stitch, every silk knot our fingers twist carries the breath of a master who taught another master centuries ago. By weaving AI into our craft today, we never replace the artisan’s hand—we give our ancestral heritage a global stage.”",
    quote_mallema_fatima: "“In Tarz Fassi, the front and back of the embroidered silk must be perfectly indistinguishable. If you flip the cloth and can see a single knot or mistake, the piece is unholy. It demands absolute presence of mind—a form of prayer through silk.”",
    btn_listen_loom: "Listen to Loom & Atelier Rhythm",
    btn_listen_needle: "Listen to Skalli Needle Whisper",
    mus_cta_badge: "FROM HERITAGE TO WARDROBE",
    mus_cta_title: "Commission a Piece of Moroccan History",
    mus_cta_sub: "Own a museum-grade haute couture caftan woven with the exact ancestral stitches you just explored, tailored precisely to your measurements."
  },
  ar: {
    brand_sub: "تكنولوجيا التراث",
    nav_home: "الرئيسية",
    nav_discover: "اكتشف القفاطين",
    nav_designer: "المصمم الذكي",
    nav_artisans: "صناعنا التقليديون",
    nav_museum: "متحف التراث",
    nav_about: "من نحن",
    nav_login: "تسجيل الدخول",
    nav_cta: "ابدأ الآن",
    lang_btn: "English",
    
    // Hero
    hero_badge: "أصالة التراث المغربي • ابتكار الذكاء الاصطناعي • أزياء مستدامة",
    hero_title_1: "فن القفطان المغربي،",
    hero_title_2: "برؤية الذكاء الاصطناعي.",
    hero_sub: "عش تجربة الفخامة المغربية الراقية. صمم قفطانك المصنوع خصيصاً على مقاسك بواسطة الذكاء الاصطناعي، مع دعم مباشر للصناع والمعلمين الحرفيين الذين يحافظون على تراثنا الأصيل.",
    hero_cta: "صمم قفطانك الآن",
    note_woven: "منسوج بالتراث الأصيل",
    note_hand: "من أصالة التراث إلى ابتكار المستقبل",
    
    // AI Designer
    designer_label: "المصمم الذكي للقفطان",
    designer_title: "إبداع خيالك، وأصالة تراثنا.",
    designer_desc: "ابتكر قفطانك الفريد من خلال المزج بين الحرفية المغربية التقليدية وأحدث تقنيات الذكاء الاصطناعي. خصص أدق التفاصيل لتناسب ذوقك ومناسبتك الراقية.",
    field_occasion: "المناسبة",
    field_occasion_ph: "اختر المناسبة",
    opt_wedding: "عرس ملكي مغربي",
    opt_eid: "الأعياد والمناسبات الدينية",
    opt_gala: "حفل وسهرة راقية",
    opt_henna: "ليلة الحناء والتقاليد العريقة",
    opt_festive: "أسبوع القفطان المغربي",
    field_color: "تدرج الألوان",
    field_style: "شكل القفطان والقصة",
    field_style_ph: "اختر نوع القفطان",
    opt_takchita: "تكشيطة تقليدية مدفونة",
    opt_royal_fassi: "قفطان فاس أصيل قطعتين",
    opt_modern_slim: "قفطان عصري انسيابي",
    opt_majestic_cape: "قفطان ملكي بسلهام مخملي",
    opt_princess: "قصة الأميرة إيفازي المطرزة",

    field_fabric: "الأقمشة والأنسجة النبيلة",
    field_fabric_ph: "اختر نوع القماش",
    opt_mobra: "موبرة ملكية حريرية فاخرة",
    opt_duchesse: "ساتان دوشيس إيطالي فاخر",
    opt_brocade: "بروكار فاسي بنشريف الأصيل",
    opt_crepe: "أورغانزا وكريب الحرير الطبيعي",
    opt_mlifa: "مليفة كشمير شتوية راقية",

    field_embroidery: "مدرسة الطرز التقليدي",
    field_embroidery_ph: "اختر نوع الطرز",
    opt_tarz_fassi: "طرز فاس الغرزة المتقونة",
    opt_tarz_rbati: "طرز رباطي بحرير الصابرة",
    opt_majboud: "المجبود بالصقلي الحر المذهب",
    opt_zwak: "زواق المعلم والسفيفة اليدوية",
    opt_tarz_chamali: "طرز شمالي طنجاوي أصيل",

    field_mdamma: "شكل المضمة والتطريز",
    field_mdamma_ph: "اختر نوع المضمة",
    opt_mdamma_gold: "مضمة الذهب الخالص منقوشة باليد",
    opt_mdamma_velvet: "مضمة الموبرة بالمجبود وصقلي حر",
    opt_mdamma_brocade: "مضمة البروكار مع سفيفة الصابرة",
    opt_mdamma_silver: "مضمة الفضة الصافية العصرية",
    opt_mdamma_mjadel: "مجدول الحرير الحر المضفور يدوياً",

    field_sleeves: "تفصيل الأكمام والقصة",
    field_sleeves_ph: "اختر قصة الأكمام",
    opt_sleeve_bell: "أكمام ملكية واسعة بسفيفة الصقلي",
    opt_sleeve_fitted: "أكمام كلاسيكية مزمومة بعقاد الحرير",
    opt_sleeve_cape: "أكمام مجنحة مفتوحة ومبطنة",

    field_sfifa: "السفيفة والعقاد المعلم",
    field_sfifa_ph: "اختر نوع السفيفة",
    opt_sfifa_skalli: "سفيفة صقلي حر ذهبي أصيل",
    opt_sfifa_silver: "صقلي فضي مع صابرة الحرير الطبيعي",
    opt_sfifa_dfina: "سفيفة دفينة نغمة على نغمة",
    opt_sfifa_zwak: "زواق المعلم بأربعة خيوط مجدولة",

    field_budget: "الميزانية المخصصة",
    field_budget_ph: "اختر الميزانية",
    opt_budget_1: "8,000 - 12,000 درهم (800 - 1,150 يورو)",
    opt_budget_2: "12,000 - 18,000 درهم (1,150 - 1,750 يورو)",
    opt_budget_3: "18,000+ درهم (هوت كوتور فاخر)",
    btn_generate: "توليد تصميمي بالذكاء الاصطناعي",
    designer_disclaimer: "هذا التصميم مقترح مبتكر بالذكاء الاصطناعي، ويتم تدقيقه واعتماده من معلم مغربي معتمد قبل تفصيل القماش.",
    ai_preview_badge: "معاينة النموذج الذكي",
    btn_commission: "طلب تفصيل هذا التصميم",
    spec_fabric: "القماش: حرير طبيعي وسفيفة صقلي حر",
    spec_time: "مدة الإنجاز: 3 إلى 4 أسابيع",
    spec_atelier: "الورشة المختارة: دار المعلم الفلاح، طنجة",

    // Collection
    coll_label: "مجموعتنا المختارة",
    coll_title: "اكتشف إبداعات القفطان المغربي",
    coll_view_all: "عرض جميع التصاميم",
    btn_discover: "تفاصيل هذا القفطان",
    btn_quote: "طلب عرض سعر",

    // Artisans
    art_label: "صناعنا وحرفيونا",
    art_title: "وراء كل قفطان قصة إبداع وإتقان.",
    art_desc: "تربط منصة نسيج المعلمين الحرفيين بالزبائن حول العالم مباشرة، وتضمن حصول الحرفي على 90% من قيمة عمله دعماً لاستدامة الصنعة التقليدية.",
    art_cta: "تعرف على معلمينا",
    cat_tailors: "المعلم الخياط التقليدي",
    cat_embroiderers: "معلمات الطرز المغربي",
    cat_sfifa: "حرفيو السفيفة والمجدول",
    cat_aqad: "صانعات العقد الحريرية",

    // Museum
    mus_label: "متحف التراث الرقمي",
    mus_title: "تراث عريق يستحق التخليد.",
    mus_desc: "استكشف تاريخ القفطان المغربي الممتد عبر القرون وتعرف على أسرار الصنعة والغرز التاريخية المحفوظة جيلاً بعد جيل.",
    mus_cta: "زيارة المعرض الرقمي",
    feat_craft: "الصنعة التقليدية الأصيلة",
    feat_emb: "تقنيات وغرز الطرز",
    feat_mat: "الأقمشة والحرير النادر",
    feat_hist: "صور أرشيفية وشهادات شفوية",
    feat_stories: "قصص من قلب ورشات المعلمين",

    // Sustainability
    sust_label: "أزياء مسؤولة ومستدامة",
    sust_title: "عندما يلتقي التراث بالاستدامة.",
    sust_desc: "نلتزم بمستقبل أكثر مسؤولية من خلال الجمع بين التصنيع المخصص حسب الطلب والحد التام من هدر الأقمشة والنفايات.",
    sust_1: "إنتاج حسب الطلب بدون فائض",
    sust_2: "تقليل هدر الأقمشة بنمط ذكي",
    sust_3: "دعم مباشر للصناع والتعاونيات",
    sust_4: "اختيار خامات مسؤولة وبيئية",
    sust_5: "توثيق المهارات رقمياً للأجيال",
    stat_deadstock: "0% مخزون فائض أو مهدور",
    stat_payout: "90% أجر مباشر للمعلم الحرفي",
    stat_waste: "35% تقليص بقايا الأقمشة",
    stat_traceable: "100% أصالة مغربية موثقة",

    // Footer
    footer_copy: "© 2026 نسيج المغرب. جميع الحقوق محفوظة.",
    footer_tagline: "صنع بأيادي مغربية. مستوحى من التراث المغربي. معزز بالذكاء الاصطناعي.",
    contact_loc: "طنجة وفاس، المملكة المغربية",
    privacy_policy: "سياسة الخصوصية",
    terms_conditions: "الشروط والأحكام",

    // Dedicated Collection Page (AR)
    coll_page_badge: "المجموعة الملكية للقفطان المغربي",
    coll_page_title_1: "عراقة الماضي،",
    coll_page_title_2: "وفخامة الملوك.",
    coll_page_sub: "أربعة عشر قفطاناً فاخراً صُنعت يدوياً بأيدي أمهر المعلمين في طنجة وفاس والرباط، كل قطعة تُفصل حسب المقاس مع جواز سفر رقمي موثوق وأجر مباشر 90% للحرفي.",
    trust_craft: "100% صنعة معلم حرفي معتمد",
    trust_fair: "90% أجر مباشر للمعلم الحرفي",
    trust_passport: "جواز أصالة رقمي مشفر",
    trust_shipping: "توصيل ملكي مؤمن لجميع أنحاء العالم",
    filter_search_ph: "ابحث بالاسم، القماش، الورشة، أو اللون...",
    filter_all: "جميع التصاميم",
    filter_fassi: "فاسي ملكي",
    filter_bridal: "تكشيطة العروس",
    filter_modern: "عصري انسيابي",
    filter_cape: "سلهام ملكي",
    filter_velvet: "موبرة ومليفة",
    lbl_filter_region: "مدينة الورشة",
    opt_region_all: "جميع المدن والتعاونيات",
    lbl_filter_fabric: "نوع القماش النبيل",
    opt_fabric_all: "جميع الأقمشة النبيلة",
    lbl_filter_price: "نطاق السعر",
    opt_price_all: "جميع الأسعار",
    lbl_filter_sort: "ترتيب العرض",
    sort_featured: "المجموعة الموصى بها",
    sort_price_asc: "السعر: من الأقل إلى الأعلى",
    sort_price_desc: "السعر: من الأعلى إلى الأقل",
    sort_lead_time: "مدة الإنجاز اليدوي",
    results_text: "قفطان هوت كوتور متاح للطلب",
    btn_reset_filters: "↺ إعادة ضبط التصفية",
    card_quick_view: "معاينة سريعة",
    card_customize_ai: "تخصيص بالذكاء الاصطناعي",
    empty_title: "لم يتم العثور على قفاطين مطابقة",
    empty_desc: "يرجى تغيير شروط البحث والتصفية أو تجربة تصميم قفطانك الفريد مع مصممنا الذكي.",
    bespoke_badge: "طلب تفصيل خاص من الورشة",
    bespoke_title: "هل ترغب في تصميم قفطان فريد لا مثيل له؟",
    bespoke_sub: "يتيح لك استوديو الذكاء الاصطناعي اختيار مدارس الطرز، الأقمشة النبيلة، ونقش المضمة، للتواصل مباشرة مع المعلمين المعتمدين في طنجة وفاس.",
    btn_open_ai_designer: "فتح استوديو التصميم بالذكاء الاصطناعي",
    btn_visit_museum: "زيارة متحف التراث",

    // Dedicated Museum Page (AR)
    mus_hero_badge: "المتحف الرقمي الحي للتراث",
    mus_hero_title_1: "عشرة قرون من",
    mus_hero_title_2: "أمجاد القفطان المغربي.",
    mus_hero_sub: "من حرير المرابطين إلى مجبود السعديين بالذهب الخالص، استكشف كيف تناقل المعلمون أسرار القفطان عبر السلالات الملكية وصولاً إلى العصر الرقمي.",
    mus_nav_timeline: "المسار التاريخي للسلالات (1062 - الآن)",
    mus_nav_pillars: "أركان الصنعة الأربعة",
    mus_nav_verify: "محاكي التحقق من الأصالة",
    mus_nav_archive: "أرشيف الشهادات الشفوية",
    dynasty_section_badge: "سجلات الفخامة المغربية",
    dynasty_section_title: "السلالات الإمبراطورية الأربع",
    dynasty_section_sub: "تتبع مسار تطور القفطان عبر البلاطات الملكية المغربية وطرق التجارة وتأسيس نقابات الحرفيين.",
    dyn_almoravid_name: "الدولة المرابطية (المرابطون)",
    dyn_almoravid_theme: "حرير الصحراء والأثواب الأولى",
    dyn_merinid_name: "الدولة المرينية (المرينيون)",
    dyn_merinid_theme: "أنوال فاس الذهبية وطرز الغرزة",
    dyn_saadian_name: "الدولة السعدية (السعديون)",
    dyn_saadian_theme: "مجبود الذهب الخالص والتكشيطة",
    dyn_alaouite_name: "الدولة العلوية الشريفة (العلويون)",
    dyn_alaouite_theme: "الهوت كوتور والذكاء الاصطناعي",
    pillars_section_badge: "فنون المعلمين المقدسة",
    pillars_section_title: "أركان الصنعة التقليدية الأربعة",
    pillars_section_sub: "التقنيات التاريخية التي لا تنتقل إلا من المعلم إلى الصانع عبر عقود من التدريب والانضباط.",
    pillar_1_title: "طرز المجبود بالذهب الخالص 24 قيراط",
    pillar_1_desc: "تقنية عريقة يتم فيها توجيه خيط الصقلي الحر الذهبي فوق قوالب جلدية أو ورقية بواسطة قرن البقر المصقول (المزود)، لصنع نقوش نافرة على الموبرة والبروكار.",
    pillar_2_title: "نول بروكار بنشريف الفاسي العتيق",
    pillar_2_desc: "يُنسج على أنوال خشبية أثرية يُشغلها معلمان حرفيان بتناغم مذهل. لا ينتج النول سوى 20 سنتيمتراً من البروكار الملكي يومياً مرصعاً بخيوط الذهب.",
    pillar_3_title: "عقاد الصابرة الحريرية المبرومة باليد",
    pillar_3_desc: "أزرار كروية تُلف يدوياً من حرير الصبار النباتي الطبيعي بالكامل دون إبرة. تتدلى أكثر من 100 عقدة متطابقة على واجهة القفطان لتمنحه وقاره الملكي.",
    pillar_4_title: "السفيفة والمجدول الحرفي",
    pillar_4_desc: "العمود الفقري للأزياء المغربية. أشرطة زخرفية منسوجة يدوياً بما يصل إلى 12 خيطاً من الحرير والصقلي، لربط أطراف الثوب والأكمام الفضفاضة بإتقان.",
    btn_explore_craft: "استكشف أرشيف التقنية ←",
    prov_badge: "أصالة رقمية موثقة بالبلوكشين",
    prov_title: "محاكي التحقق من جواز السفر الرقمي المعتمد",
    prov_sub: "يحصل كل قفطان من نسيج على شهادة رقمية مشفرة تثبت هوية الصانع، الدفع العادل، مصدر الأنسجة وساعات الخياطة. جرب التحقق أدناه:",
    lbl_passport_input: "أدخل رقم جواز السفر الرقمي للقفطان:",
    btn_verify_now: "تحقق من الأصالة الآن",
    lbl_quick_presets: "نماذج جوازات معتمدة:",
    oral_badge: "الأصوات الحية للتراث",
    oral_title: "الأرشيف الشفوي وإيقاعات ورشات المعلمين",
    oral_sub: "استمع إلى تسجيلات وشهادات حية من قلب ورشات قصبة طنجة العريقة ومدينة فاس العتيقة.",
    quote_maalam_omar: "«القفطان ليس مجرد ثوب نلبسه، إنه وثيقة تاريخية حية. كل غرزة خيط، وكل عقدة حرير نلفها بأصابعنا تحمل روح معلم علّم معلماً قبله منذ مئات السنين. حين نستخدم الذكاء الاصطناعي اليوم، فإننا نمنح صنعة أجدادنا صوتاً يسمعه العالم بأسره.»",
    quote_mallema_fatima: "«في طرز فاس، يجب أن يكون وجه القماش وقفاه متطابقين تماماً بدون أدنى عقدة أو خطأ. إذا قلبت القماش ورأيت عقدة، فالعمل ليس متقناً. إنه تركيز تام وذكرى حية في كل غرزة.»",
    btn_listen_loom: "الاستماع لإيقاع النول والورشة",
    btn_listen_needle: "الاستماع لحفيف إبرة الصقلي",
    mus_cta_badge: "من المتحف إلى إطلالتك الخاصة",
    mus_cta_title: "اقتنِ قطعة من التاريخ المغربي العريق",
    mus_cta_sub: "امتلك قفطاناً بمواصفات المتاحف الملكية منسوجاً بالغرز التاريخية الأصيلة التي استكشفتها للتو، ومفصلاً على مقاسك بدقة متناهية."
  }
};

let currentLang = 'en';

// Localization Controller
function setLanguage(lang) {
  currentLang = lang;
  const isRTL = lang === 'ar';
  
  // Set HTML attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

  // Toggle active class on language button
  const langText = document.getElementById('lang-btn-text');
  if (langText) {
    langText.textContent = isRTL ? 'English' : 'العربية';
  }

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang] && i18nData[lang][key]) {
      el.textContent = i18nData[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (i18nData[lang] && i18nData[lang][key]) {
      el.placeholder = i18nData[lang][key];
    }
  });

  // Save preference
  localStorage.setItem('nassij_lang', lang);

  // Reactive updates for dedicated pages
  if (typeof updateDedicatedCatalogLang === 'function') {
    updateDedicatedCatalogLang(lang);
  }
  if (typeof updateDedicatedMuseumLang === 'function') {
    updateDedicatedMuseumLang(lang);
  }
}

// 14 Authentic Moroccan Haute Couture Caftan Records
const caftanCatalog = [
  {
    id: 1,
    title: 'Ivory Grace Bridal',
    titleAr: 'النقاء العاجي الفاسي',
    style: 'Bridal Takchita',
    category: 'bridal fassi',
    price: '€ 1,150',
    priceNum: 1150,
    priceMad: '12,000 MAD',
    img: 'caftan pic/1d4cb6461e3eaec0a5c466807b8100b1.jpg',
    atelier: 'Atelier Safaa, Tangier',
    region: 'Tangier',
    fabric: 'Pure Silk Brocade with Hand-Braided Sfifa',
    fabricKey: 'brocade',
    embroidery: 'Tarz Fassi Double-Face',
    leadTime: '3-4 Weeks',
    leadDays: 24,
    hours: 140,
    colorKey: 'ivory',
    description: 'A masterpiece of bridal elegance woven from luminous ivory silk brocade, accented with ancestral geometric Tarz Fassi and pure gold plated Mdamma.'
  },
  {
    id: 2,
    title: 'Royal Champagne',
    titleAr: 'الشمبانيا الملكي المذهب',
    style: 'Imperial Haute Couture',
    category: 'fassi',
    price: '€ 1,350',
    priceNum: 1350,
    priceMad: '14,200 MAD',
    img: 'caftan pic/4105534d840dd39605a4b26c77c59847.jpg',
    atelier: 'Atelier El Fellah, Tangier',
    region: 'Tangier',
    fabric: 'Champagne Silk Crepe with Antique Gold Thread',
    fabricKey: 'crepe',
    embroidery: 'Majboud & Zwak Maâlem',
    leadTime: '4 Weeks',
    leadDays: 28,
    hours: 165,
    colorKey: 'champagne',
    description: 'Handcrafted in Tangier with antique gold Majboud embroidery cascading over rich champagne crepe. Features 120 hand-knotted spherical silk Aqad.'
  },
  {
    id: 3,
    title: 'Sky Blue Gold',
    titleAr: 'الأزرق السماوي المذهب',
    style: 'Modern Medfoun',
    category: 'modern',
    price: '€ 1,050',
    priceNum: 1050,
    priceMad: '11,000 MAD',
    img: 'caftan pic/532ca6c399bde52fa69cda53b5b5214f.jpg',
    atelier: 'Atelier Boujumaar, Fez',
    region: 'Fez',
    fabric: 'Celestial Blue Duchesse Satin with Gold Mdamma',
    fabricKey: 'duchesse',
    embroidery: 'Tarz Rbati Floral',
    leadTime: '3 Weeks',
    leadDays: 21,
    hours: 115,
    colorKey: 'blue',
    description: 'A poetic blend of sky blue Italian satin and dense gold floral Tarz Rbati embroidery, sculpted for diplomatic galas and celebrations.'
  },
  {
    id: 4,
    title: 'Sage Emerald Sovereign',
    titleAr: 'الزمرد الأندلسي الساحر',
    style: 'Imperial Two-Piece',
    category: 'velvet cape',
    price: '€ 1,200',
    priceNum: 1200,
    priceMad: '12,800 MAD',
    img: 'caftan pic/7b6b11d229071c1fb2813a2f88868080.jpg',
    atelier: 'Cooperative Al Andalous, Rabat',
    region: 'Rabat',
    fabric: 'Mobra Silk Velvet & Emerald Chiffon',
    fabricKey: 'velvet',
    embroidery: 'Tarz Chamali Golden Leaf',
    leadTime: '4 Weeks',
    leadDays: 28,
    hours: 155,
    colorKey: 'emerald',
    description: 'An ode to Andalusian Moroccan heritage. Deep sage green Mobra velvet lined with delicate gold Sfifa braids and an ornate filigree belt.'
  },
  {
    id: 5,
    title: 'Bridal White Royal',
    titleAr: 'البياض الملكي الأسطوري',
    style: 'Majestic Royal Bridal',
    category: 'bridal fassi',
    price: '€ 1,600',
    priceNum: 1600,
    priceMad: '16,900 MAD',
    img: 'caftan pic/9a9b2606d5bb8b6d1ec844109ae26279.jpg',
    atelier: 'Dar Maâlem Omar, Fez',
    region: 'Fez',
    fabric: 'Imperial White Organza & Pure Gold Embroidery',
    fabricKey: 'brocade',
    embroidery: 'Royal Fassi Majboud',
    leadTime: '5 Weeks',
    leadDays: 35,
    hours: 195,
    colorKey: 'white',
    description: 'The pinnacle of Moroccan bridal grandeur. Double-layer flowing organza adorned with 24k gold filigree embroidery and a majestic ceremonial tiara.'
  },
  {
    id: 6,
    title: 'Periwinkle Evening Gala',
    titleAr: 'الأرجواني العصري الرشيق',
    style: 'Contemporary Sleek',
    category: 'modern',
    price: '€ 950',
    priceNum: 950,
    priceMad: '9,900 MAD',
    img: 'caftan pic/dc4d6d545dfa7b2bb6470f03e0e03a15.jpg',
    atelier: 'Atelier Saadane, Casablanca',
    region: 'Casablanca',
    fabric: 'Sky Periwinkle Satin with Hand-Rolled Sfifa',
    fabricKey: 'duchesse',
    embroidery: 'Modern Minimalist Tarz',
    leadTime: '3 Weeks',
    leadDays: 21,
    hours: 95,
    colorKey: 'periwinkle',
    description: 'Sleek contemporary silhouette tailored for modern galas. Lightweight periwinkle silk adorned with shimmering sequin trails and gold wire.'
  },
  {
    id: 7,
    title: 'Silver Grey Majestic',
    titleAr: 'الرمادي الفضي الوقور',
    style: 'Tarz Rbati Grandeur',
    category: 'velvet',
    price: '€ 1,280',
    priceNum: 1280,
    priceMad: '13,500 MAD',
    img: 'caftan pic/e9397370d3a99b75ab51a50a9b076972.jpg',
    atelier: 'Atelier Benkirane, Tangier',
    region: 'Tangier',
    fabric: 'Smoky Grey Silk Mlifa with 24k Gold Threading',
    fabricKey: 'mlifa',
    embroidery: 'Tarz Rbati & Handmade Aqad',
    leadTime: '3-4 Weeks',
    leadDays: 25,
    hours: 130,
    colorKey: 'grey',
    description: 'Warm silver grey silk Mlifa featuring intricate chest embroidery by Tangier master craftsmen, framed by triple-row antique gold Sfifa.'
  },
  {
    id: 8,
    title: 'Midnight Sapphire Sovereign',
    titleAr: 'الياقوت الليلي الإمبراطوري',
    style: 'Royal Fassi Two-Piece',
    category: 'fassi',
    price: '€ 1,420',
    priceNum: 1420,
    priceMad: '15,000 MAD',
    img: 'caftan pic/532ca6c399bde52fa69cda53b5b5214f.jpg',
    atelier: 'Dar Maâlem Omar, Fez',
    region: 'Fez',
    fabric: 'Deep Sapphire Silk Crepe with Skalli Gold',
    fabricKey: 'crepe',
    embroidery: 'Tarz Fassi & Royal Zwak',
    leadTime: '4 Weeks',
    leadDays: 28,
    hours: 160,
    colorKey: 'blue',
    description: 'Imperial two-piece creation crafted in midnight sapphire blue crepe, adorned with 18th century floral Fassi needlework and solid gold Skalli borders.'
  },
  {
    id: 9,
    title: 'Imperial Emerald Velvet Cape',
    titleAr: 'سلهام الموبرة الزمردي الملكي',
    style: 'Imperial Caftan with Velvet Cape',
    category: 'cape velvet',
    price: '€ 1,550',
    priceNum: 1550,
    priceMad: '16,300 MAD',
    img: 'caftan pic/7b6b11d229071c1fb2813a2f88868080.jpg',
    atelier: 'Atelier El Fellah, Tangier',
    region: 'Tangier',
    fabric: 'Pure Mobra Silk Velvet & Hand-Embroidered Cape',
    fabricKey: 'velvet',
    embroidery: 'Majboud 24k Gold Thread',
    leadTime: '4-5 Weeks',
    leadDays: 32,
    hours: 185,
    colorKey: 'emerald',
    description: 'Regal ensemble featuring an inner sheath and a grand velvet cape (Selham) emblazoned with heavy gold Majboud embroidery across the back and shoulders.'
  },
  {
    id: 10,
    title: 'Brocade Gold Sultana',
    titleAr: 'سلطانة البروكار الذهبي',
    style: 'Bridal Takchita',
    category: 'bridal fassi',
    price: '€ 1,750',
    priceNum: 1750,
    priceMad: '18,500 MAD',
    img: 'caftan pic/9a9b2606d5bb8b6d1ec844109ae26279.jpg',
    atelier: 'Fez Medina Cooperative, Fez',
    region: 'Fez',
    fabric: 'Handwoven Bencherif Silk Brocade',
    fabricKey: 'brocade',
    embroidery: 'Imperial Fassi Majboud',
    leadTime: '5-6 Weeks',
    leadDays: 38,
    hours: 210,
    colorKey: 'white',
    description: 'Museum-caliber bridal masterpiece woven on ancestral Bencherif drawlooms. Features authentic gilded Skalli threads and hand-carved silver-gilt Mdamma.'
  },
  {
    id: 11,
    title: 'Rose Quartz Modern Slim',
    titleAr: 'الكوارتز الوردي العصري',
    style: 'Contemporary Sleek',
    category: 'modern',
    price: '€ 980',
    priceNum: 980,
    priceMad: '10,300 MAD',
    img: 'caftan pic/dc4d6d545dfa7b2bb6470f03e0e03a15.jpg',
    atelier: 'Atelier Saadane, Casablanca',
    region: 'Casablanca',
    fabric: 'Fluid Silk Satin with Delicate Silver Sfifa',
    fabricKey: 'duchesse',
    embroidery: 'Modern Fine Cord Embroidery',
    leadTime: '3 Weeks',
    leadDays: 21,
    hours: 90,
    colorKey: 'periwinkle',
    description: 'Modern streamlined cut designed for high-society galas. Features featherlight Italian silk satin, delicate silver cord work, and hidden side slits.'
  },
  {
    id: 12,
    title: '24k Gold Royal Majboud',
    titleAr: 'المجبود الذهبي العتيق',
    style: 'Imperial Haute Couture',
    category: 'fassi cape',
    price: '€ 1,890',
    priceNum: 1890,
    priceMad: '19,900 MAD',
    img: 'caftan pic/4105534d840dd39605a4b26c77c59847.jpg',
    atelier: 'Cooperative Al Andalous, Rabat',
    region: 'Rabat',
    fabric: 'Heavy Italian Duchesse Silk with 24k Gold Bullion',
    fabricKey: 'duchesse',
    embroidery: 'Ancestral Rabat Majboud & Mjadel',
    leadTime: '5 Weeks',
    leadDays: 35,
    hours: 220,
    colorKey: 'champagne',
    description: 'Commissioned under the highest standards of the Rabat guild. Contains over 200 meters of pure gold Skalli bullion guided by cow-horn Mizwed needles.'
  },
  {
    id: 13,
    title: 'Celestial Pearl & Sabra Silk',
    titleAr: 'لؤلؤة الصابرة الطنجاوية',
    style: 'Bridal Takchita',
    category: 'bridal modern',
    price: '€ 1,180',
    priceNum: 1180,
    priceMad: '12,400 MAD',
    img: 'caftan pic/1d4cb6461e3eaec0a5c466807b8100b1.jpg',
    atelier: 'Atelier Safaa, Tangier',
    region: 'Tangier',
    fabric: 'Luminous Pearl Silk Chiffon & Silk Brocade',
    fabricKey: 'brocade',
    embroidery: 'Chamali Floral Delicate Thread',
    leadTime: '3-4 Weeks',
    leadDays: 24,
    hours: 135,
    colorKey: 'ivory',
    description: 'Airy, luminescent two-piece gown created with natural aloe vera Sabra silk and delicate pearls hand-sewn along the neckline and cuffs.'
  },
  {
    id: 14,
    title: 'Smoky Obsidian Mlifa',
    titleAr: 'السموكي كشمير الشتوي',
    style: 'Tarz Rbati Grandeur',
    category: 'velvet',
    price: '€ 1,320',
    priceNum: 1320,
    priceMad: '13,900 MAD',
    img: 'caftan pic/e9397370d3a99b75ab51a50a9b076972.jpg',
    atelier: 'Atelier Benkirane, Tangier',
    region: 'Tangier',
    fabric: 'Premium Cashmere-Wool Mlifa with Gold Sfifa',
    fabricKey: 'mlifa',
    embroidery: 'Heavy Gold Wire Tarz Rbati',
    leadTime: '4 Weeks',
    leadDays: 28,
    hours: 145,
    colorKey: 'grey',
    description: 'Bespoke winter caftan cut from luxurious English cashmere Mlifa, layered with architectural antique gold Sfifa braids and an imperial matching belt.'
  }
];

// Carousel Setup (14 cards total from 14 distinct records)
// Carousel Setup (14 cards total from 14 distinct records)
const carouselCardsData = caftanCatalog;
let heroCarousel = null;

// Safe opener for the caftan story modal with debounce to ensure single trigger
let lastStoryModalOpenTime = 0;
function safeOpenCaftanStoryModal(item) {
  if (!item) return;
  const now = performance.now();
  if (now - lastStoryModalOpenTime < 350) return;
  lastStoryModalOpenTime = now;
  openCaftanStoryModal(item);
}

// ==========================================================================
// Cylindrical Curved Card Carousel with Physics & Momentum
// Specification: 1440x1080 design coordinate space, --u responsive scaling,
// dynamic quad clipping with 15u rounded corners, 50u/s auto-drift,
// 1:1 pointer drag, 95%/s momentum decay & Web Animations API master clock.
// ==========================================================================
class ReelmarkHeroCarousel {
  constructor(viewportEl, trackEl) {
    this.viewport = viewportEl;
    this.track = trackEl;
    this.cards = [];
    
    // Cylindrical Geometry Constants (Design Frame 1440x1080)
    this.screenCenter = 720;
    this.normRadius = 706;
    this.pitch = 196; // Unpushed pitch P = 196 frame units
    this.totalCards = carouselCardsData.length; // N = 14
    this.totalWidth = this.totalCards * this.pitch; // L = N * P = 2744u
    this.cornerRadU = 15; // 15u corner radius

    // Physics & Momentum State
    this.trackOffset = 0;
    this.autoSpeed = 50; // Continuous auto-drift: 50 units/second
    this.velocity = 50;
    this.isDragging = false;
    this.isPointerDown = false;
    this.hasDragged = false;
    this.startX = 0;
    this.startY = 0;
    this.lastX = 0;
    this.dragStartTime = 0;
    this.pointerDownCard = null;
    this.capturedPointerId = null;
    this.isHovered = false;
    this.isPaused = false;

    // Master Animation Clock via Web Animations API
    try {
      this.clock = document.documentElement.animate([], { duration: 1e9 });
      this.lastTime = (this.clock && this.clock.currentTime != null) ? this.clock.currentTime : performance.now();
    } catch (_) {
      this.clock = null;
      this.lastTime = performance.now();
    }

    this.initDOM();
    this.initEvents();
    this.startLoop();
  }

  getUnit() {
    if (window.innerWidth <= 820) {
      // Mobile Breakpoint (<= 820px):
      // Constrained to a container band of 250px height.
      // Center card height is 280u, edge card max height is 372u.
      const scaleByWidth = (window.innerWidth / 820) * 0.65;
      return Math.max(0.48, Math.min(235 / 372, scaleByWidth));
    }
    return Math.min(window.innerWidth / 1440, window.innerHeight / 1080);
  }

  initDOM() {
    this.track.innerHTML = '';
    carouselCardsData.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'carousel-card';
      card.dataset.id = item.id;
      card.dataset.index = index;
      
      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}" loading="lazy" draggable="false">
        <div class="card-inspect-badge" aria-label="Explore caftan details">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      `;

      card.addEventListener('click', () => {
        if (!this.hasDragged) {
          safeOpenCaftanStoryModal(item);
        }
      });

      this.track.appendChild(card);
      this.cards.push(card);
    });
  }

  initEvents() {
    // Pointer Events for 1:1 Drag Gestures & Momentum Tracking
    const onPointerDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      this.isPointerDown = true;
      this.isDragging = false;
      this.hasDragged = false;
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.lastX = e.clientX;
      this.dragStartTime = performance.now();
      this.pointerDownCard = e.target.closest('.carousel-card');
      this.capturedPointerId = null;
    };

    const onPointerMove = (e) => {
      if (!this.isPointerDown) return;
      const u = this.getUnit();
      const deltaPx = e.clientX - this.lastX;
      const totalDist = Math.hypot(e.clientX - this.startX, e.clientY - this.startY);

      // Only enter drag state when the pointer moves beyond 7px threshold
      if (!this.isDragging && totalDist > 7) {
        this.isDragging = true;
        this.hasDragged = true;
        this.velocity = 0; // Halt auto-drift when active drag begins
        this.viewport.classList.add('is-dragging');
        try {
          this.viewport.setPointerCapture(e.pointerId);
          this.capturedPointerId = e.pointerId;
        } catch (_) {}
      }

      if (this.isDragging) {
        const deltaU = deltaPx / u;
        // Directly map cursor delta x to trackOffset 1:1
        this.trackOffset -= deltaU;

        const now = performance.now();
        const dt = (now - this.dragStartTime) / 1000;
        if (dt > 0.008) {
          // Track instantaneous release velocity: v = -deltaX / deltaT
          this.velocity = -deltaU / dt;
          this.dragStartTime = now;
          this.lastX = e.clientX;
        }
      }
    };

    const onPointerUp = (e) => {
      if (!this.isPointerDown) return;
      const wasDragging = this.isDragging;
      const hadDragged = this.hasDragged;
      const targetCard = this.pointerDownCard || e.target.closest('.carousel-card');

      this.isPointerDown = false;
      this.isDragging = false;
      this.viewport.classList.remove('is-dragging');

      if (this.capturedPointerId != null) {
        try {
          this.viewport.releasePointerCapture(this.capturedPointerId);
        } catch (_) {}
        this.capturedPointerId = null;
      }

      // If user released without dragging (clean click/tap), open modal immediately
      if (!hadDragged && targetCard) {
        const idx = parseInt(targetCard.dataset.index, 10);
        const item = carouselCardsData[idx];
        if (item) {
          safeOpenCaftanStoryModal(item);
        }
      }

      this.pointerDownCard = null;

      // Keep hasDragged true briefly to block any delayed native click event from drag gesture
      if (hadDragged) {
        setTimeout(() => {
          this.hasDragged = false;
        }, 120);
      } else {
        this.hasDragged = false;
      }
    };

    this.viewport.addEventListener('pointerdown', onPointerDown);
    this.viewport.addEventListener('pointermove', onPointerMove);
    this.viewport.addEventListener('pointerup', onPointerUp);
    this.viewport.addEventListener('pointercancel', onPointerUp);

    // Viewport-level delegated click handler as fallback
    this.viewport.addEventListener('click', (e) => {
      if (this.hasDragged) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      const card = e.target.closest('.carousel-card');
      if (card && card.dataset.index !== undefined) {
        const idx = parseInt(card.dataset.index, 10);
        const item = carouselCardsData[idx];
        if (item) {
          safeOpenCaftanStoryModal(item);
        }
      }
    });

    // Hover Pause
    this.viewport.addEventListener('pointerenter', () => { this.isHovered = true; });
    this.viewport.addEventListener('pointerleave', () => { 
      this.isHovered = false; 
      if (!this.isDragging) {
        this.isPointerDown = false;
      }
    });
  }

  startLoop() {
    const render = () => {
      const now = (this.clock && this.clock.currentTime != null) ? this.clock.currentTime : performance.now();
      const dt = Math.min(Math.max((now - this.lastTime) / 1000, 0.001), 0.1);
      this.lastTime = now;

      if (!this.isPaused) {
        if (this.isDragging) {
          // While dragging, trackOffset is mapped 1:1 via pointermove
        } else {
          // Coasting with momentum decay (95% decay per second: v_next = v * 0.05^dt)
          if (Math.abs(this.velocity) > this.autoSpeed) {
            this.trackOffset += this.velocity * dt;
            this.velocity *= Math.pow(0.05, dt);
          } else {
            // Smoothly blend back to standard constant drift (50 u/s)
            if (!this.isHovered) {
              this.velocity += (this.autoSpeed - this.velocity) * Math.min(1, dt * 3.5);
              if (Math.abs(this.velocity - this.autoSpeed) < 0.5) {
                this.velocity = this.autoSpeed;
              }
            } else {
              // When hovered, decelerate smoothly to zero
              this.velocity *= Math.pow(0.05, dt);
              if (Math.abs(this.velocity) < 0.5) this.velocity = 0;
            }
            this.trackOffset += this.velocity * dt;
          }
        }

        // Seamless Wrapping: trackOffset = ((trackOffset % L) + L) % L
        this.trackOffset = ((this.trackOffset % this.totalWidth) + this.totalWidth) % this.totalWidth;
      }

      this.updateGeometry();
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  }

  updateGeometry() {
    const isMobile = window.innerWidth <= 820;
    const u = this.getUnit();
    const viewportWidth = this.viewport.clientWidth || window.innerWidth;
    const viewportHeight = this.viewport.clientHeight || (isMobile ? 250 : 480);
    
    const screenCenterX = viewportWidth / 2;
    // On mobile, center inside 250px band; on desktop, relative to viewport top (430u)
    const viewportCenterY = isMobile ? (viewportHeight / 2) : ((687 - 430) * u);
    const halfTrack = this.totalWidth / 2;

    this.cards.forEach((card, index) => {
      // Unpushed distance t in [-L/2, L/2] from screen center 720
      const unpushedPos = index * this.pitch - this.trackOffset;
      let t = ((unpushedPos % this.totalWidth) + this.totalWidth) % this.totalWidth;
      if (t > halfTrack) {
        t -= this.totalWidth;
      }

      // 1. Center Displacement (Outward Push)
      const tOverR = t / this.normRadius;
      const x = this.screenCenter + t * (1 + 0.083 * (tOverR * tOverR));

      // Off-screen culling in frame units
      if (x < -320 || x > 1760) {
        card.style.display = 'none';
        return;
      }
      card.style.display = 'block';

      // 2. Normalized Distance from Center
      const d = Math.abs(x - this.screenCenter) / this.normRadius;

      // 3. Dynamic Width
      const W = 170 + 48 * (d * d);

      // 4. Independent Edge Heights (Perspective Quad Distortion)
      const qL = Math.abs((x - W / 2) - this.screenCenter) / this.normRadius;
      const qR = Math.abs((x + W / 2) - this.screenCenter) / this.normRadius;
      const HL = 280 + 92 * Math.pow(qL, 2.6);
      const HR = 280 + 92 * Math.pow(qR, 2.6);

      // 5. Vertical Arch Center
      const Yc = 687 - 12 * (d * d);

      // 6. Card Bounding Box
      const Hmax = Math.max(HL, HR);

      // Dimensions in pixels
      const pxW = W * u;
      const pxHmax = Hmax * u;
      const pxHL = HL * u;
      const pxHR = HR * u;
      const pxR = this.cornerRadU * u;

      // Card pixel coordinates relative to viewport
      const pxLeft = screenCenterX + (x - this.screenCenter - W / 2) * u;
      const pxTop = viewportCenterY + (Yc - 687 - Hmax / 2) * u;

      card.style.width = `${pxW.toFixed(2)}px`;
      card.style.height = `${pxHmax.toFixed(2)}px`;
      card.style.transform = `translate3d(${pxLeft.toFixed(2)}px, ${pxTop.toFixed(2)}px, 0)`;

      // 3. Quad Clipping & Rounded Corners via clip-path: path(...)
      const yTL = (pxHmax - pxHL) / 2;
      const yTR = (pxHmax - pxHR) / 2;
      const yBR = yTR + pxHR;
      const yBL = yTL + pxHL;

      // Inset unit vectors along edges
      const dxT = pxW;
      const dyT = yTR - yTL;
      const lenT = Math.hypot(dxT, dyT) || 1;
      const utx = dxT / lenT;
      const uty = dyT / lenT;

      const dxB = -pxW;
      const dyB = yBL - yBR;
      const lenB = Math.hypot(dxB, dyB) || 1;
      const ubx = dxB / lenB;
      const uby = dyB / lenB;

      // Inset radius bounded by card geometry
      const r = Math.min(pxR, pxW * 0.45, pxHL * 0.45, pxHR * 0.45);

      const P1_left_y = yTL + r;
      const P1_top_x = r * utx;
      const P1_top_y = yTL + r * uty;

      const P2_top_x = pxW - r * utx;
      const P2_top_y = yTR - r * uty;
      const P2_right_y = yTR + r;

      const P3_right_y = yBR - r;
      const P3_bot_x = pxW + r * ubx;
      const P3_bot_y = yBR + r * uby;

      const P4_bot_x = -r * ubx;
      const P4_bot_y = yBL - r * uby;
      const P4_left_y = yBL - r;

      const pathData = `M 0 ${P1_left_y.toFixed(2)} ` +
        `Q 0 ${yTL.toFixed(2)} ${P1_top_x.toFixed(2)} ${P1_top_y.toFixed(2)} ` +
        `L ${P2_top_x.toFixed(2)} ${P2_top_y.toFixed(2)} ` +
        `Q ${pxW.toFixed(2)} ${yTR.toFixed(2)} ${pxW.toFixed(2)} ${P2_right_y.toFixed(2)} ` +
        `L ${pxW.toFixed(2)} ${P3_right_y.toFixed(2)} ` +
        `Q ${pxW.toFixed(2)} ${yBR.toFixed(2)} ${P3_bot_x.toFixed(2)} ${P3_bot_y.toFixed(2)} ` +
        `L ${P4_bot_x.toFixed(2)} ${P4_bot_y.toFixed(2)} ` +
        `Q 0 ${yBL.toFixed(2)} 0 ${P4_left_y.toFixed(2)} Z`;

      card.style.clipPath = `path('${pathData}')`;
      card.style.webkitClipPath = `path('${pathData}')`;
    });
  }
}

// ==========================================================================
// Modal Controllers (Issue 03: Caftan Story Modal)
// ==========================================================================
const userFavorites = new Set();

function openCaftanStoryModal(item) {
  if (heroCarousel) heroCarousel.isPaused = true;
  
  const modalContainer = document.getElementById('modal-container');
  if (!modalContainer) return;

  const isFavorite = userFavorites.has(item.id);
  const isRTL = currentLang === 'ar';

  modalContainer.innerHTML = `
    <div class="modal-overlay active" id="caftan-story-overlay">
      <div class="modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="modal-close-btn" id="modal-close-trigger" aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="modal-body-grid">
          <div class="modal-image-col">
            <span class="modal-seal-badge">Authentic Heritage</span>
            <img src="${item.img}" alt="${item.title}" id="modal-main-img">
          </div>

          <div class="modal-details-col">
            <div>
              <div class="modal-header-meta">
                <span class="modal-category-tag">${item.style}</span>
                <button class="btn-favorite-toggle ${isFavorite ? 'active' : ''}" id="modal-fav-btn" data-id="${item.id}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFavorite ? '#E53935' : 'none'}" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span id="fav-text">${isFavorite ? (isRTL ? 'محفوظ' : 'Saved') : (isRTL ? 'حفظ' : 'Favorite')}</span>
                </button>
              </div>

              <h2 class="modal-caftan-title" id="modal-title">${item.title}</h2>
              <div class="modal-atelier-name">${item.atelier}</div>
              <p class="modal-description">${item.description}</p>

              <div class="modal-specs-list">
                <div class="spec-item">
                  <span class="spec-label">${isRTL ? 'القماش والأنسجة' : 'Fabric & Textile'}</span>
                  <span class="spec-value">${item.fabric}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">${isRTL ? 'نوع الطرز المغربي' : 'Embroidery Technique'}</span>
                  <span class="spec-value">${item.embroidery}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">${isRTL ? 'مدة الإنجاز اليدوي' : 'Handcrafting Lead Time'}</span>
                  <span class="spec-value">${item.leadTime}</span>
                </div>
              </div>

              <div class="modal-price-row">
                <span class="modal-price-eur">${item.price}</span>
                <span class="modal-price-mad">(${item.priceMad})</span>
              </div>
            </div>

            <div class="modal-actions-row">
              <button class="btn-modal-primary" id="btn-modal-customize" data-colorkey="${item.colorKey}" data-title="${item.title}">
                <span>${isRTL ? 'تخصيص هذا التصميم بالذكاء الاصطناعي' : 'Customize in AI Designer'}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button class="btn-modal-secondary" id="btn-modal-passport" data-id="${item.id}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span>${isRTL ? 'جواز السفر الرقمي' : 'Digital Passport'}</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  `;

  // Close handlers
  const overlay = document.getElementById('caftan-story-overlay');
  const closeBtn = document.getElementById('modal-close-trigger');
  
  const closeModal = () => {
    overlay.classList.remove('active');
    setTimeout(() => {
      modalContainer.innerHTML = '';
      if (heroCarousel) heroCarousel.isPaused = false;
    }, 300);
  };

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Favorite toggle listener
  const favBtn = document.getElementById('modal-fav-btn');
  favBtn.addEventListener('click', () => {
    if (userFavorites.has(item.id)) {
      userFavorites.delete(item.id);
      favBtn.classList.remove('active');
      favBtn.querySelector('svg').setAttribute('fill', 'none');
      document.getElementById('fav-text').textContent = isRTL ? 'حفظ' : 'Favorite';
    } else {
      userFavorites.add(item.id);
      favBtn.classList.add('active');
      favBtn.querySelector('svg').setAttribute('fill', '#E53935');
      document.getElementById('fav-text').textContent = isRTL ? 'محفوظ' : 'Saved';
    }
  });

  // "Customize in AI Designer" button
  const customizeBtn = document.getElementById('btn-modal-customize');
  customizeBtn.addEventListener('click', () => {
    closeModal();
    // Scroll to AI designer
    const designerSection = document.getElementById('ai-designer');
    if (designerSection) {
      designerSection.scrollIntoView({ behavior: 'smooth' });
      // Trigger selection in AI Designer
      if (typeof selectColorInDesigner === 'function') {
        selectColorInDesigner(item.colorKey);
      }
    }
  });

  // "Digital Passport" button
  const passportBtn = document.getElementById('btn-modal-passport');
  passportBtn.addEventListener('click', () => {
    closeModal();
    if (typeof openDigitalPassportModal === 'function') {
      setTimeout(() => openDigitalPassportModal(item), 320);
    }
  });
}

// ==========================================================================
// AI Caftan Designer Engine (Issue 04)
// ==========================================================================
const aiPresets = {
  emerald: {
    title: 'Emerald Majesty • Royal Takchita',
    mainImg: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg',
    atelier: 'Atelier El Fellah, Tangier',
    specs: 'Pure Mobra Velvet • Tarz Chamali Golden Leaf',
    variations: [
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg', title: 'Imperial Emerald Takchita' },
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_le0wple0wple0wpl.jpg', title: 'Royal Ivory & Gold Takchita' }
    ]
  },
  blue: {
    title: 'Ocean Blue • Modern Medfoun',
    mainImg: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg',
    atelier: 'Atelier Boujumaar, Fez',
    specs: 'Italian Duchesse Satin • Gold Tarz Rbati',
    variations: [
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg', title: 'Imperial Emerald Takchita' },
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_le0wple0wple0wpl.jpg', title: 'Royal Ivory & Gold Takchita' }
    ]
  },
  burgundy: {
    title: 'Burgundy Elegance • Royal Velvet',
    mainImg: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg',
    atelier: 'Noisoy Aetina Atelier, Fez',
    specs: 'Burgundy Silk Crepe • Antique Majboud',
    variations: [
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg', title: 'Imperial Emerald Takchita' },
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_le0wple0wple0wpl.jpg', title: 'Royal Ivory & Gold Takchita' }
    ]
  },
  champagne: {
    title: 'Golden Champagne • Haute Couture',
    mainImg: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_le0wple0wple0wpl.jpg',
    atelier: 'Atelier El Fellah, Tangier',
    specs: 'Champagne Silk Crepe • 24k Gold Sfifa',
    variations: [
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_le0wple0wple0wpl.jpg', title: 'Royal Ivory & Gold Takchita' },
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg', title: 'Imperial Emerald Takchita' }
    ]
  },
  ivory: {
    title: 'Ivory Grace • Royal Bridal',
    mainImg: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_le0wple0wple0wpl.jpg',
    atelier: 'Atelier Safaa, Tangier',
    specs: 'Pure Silk Brocade • Tarz Fassi Double-Face',
    variations: [
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_le0wple0wple0wpl.jpg', title: 'Royal Ivory & Gold Takchita' },
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg', title: 'Imperial Emerald Takchita' }
    ]
  },
  grey: {
    title: 'Silver Grey • Tarz Rbati Grandeur',
    mainImg: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg',
    atelier: 'Atelier Benkirane, Tangier',
    specs: 'Silk Mlifa • Triple-Row Gold Sfifa',
    variations: [
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg', title: 'Imperial Emerald Takchita' },
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_le0wple0wple0wpl.jpg', title: 'Royal Ivory & Gold Takchita' }
    ]
  },
  ruby: {
    title: 'Imperial Ruby • Royal Takchita',
    mainImg: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg',
    atelier: 'Dar Maâlem Omar, Fez',
    specs: 'Pure Silk Velvet • Heavy Gold Majboud',
    variations: [
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg', title: 'Imperial Emerald Takchita' },
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_le0wple0wple0wpl.jpg', title: 'Royal Ivory & Gold Takchita' }
    ]
  },
  rosegold: {
    title: 'Rose Gold Majorelle • Couture Takchita',
    mainImg: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_le0wple0wple0wpl.jpg',
    atelier: 'Cooperative Al Andalous, Rabat',
    specs: 'Rose Silk Duchesse • Fine Skalli Sfifa',
    variations: [
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_le0wple0wple0wpl.jpg', title: 'Royal Ivory & Gold Takchita' },
      { img: 'pic/caftan pic/ai generation photo/Gemini_Generated_Image_sc1v9jsc1v9jsc1v.jpg', title: 'Imperial Emerald Takchita' }
    ]
  }
};

let currentDesignerColor = 'emerald';
let isGeneratingAI = false;

function selectColorInDesigner(colorKey) {
  if (!aiPresets[colorKey]) colorKey = 'emerald';
  currentDesignerColor = colorKey;

  // Update color swatch UI
  document.querySelectorAll('.color-swatch-btn').forEach(btn => {
    if (btn.dataset.color === colorKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update preview without full loading animation when directly selected
  applyPresetToPreview(aiPresets[colorKey]);
}

function applyPresetToPreview(preset) {
  const mainImg = document.getElementById('ai-prototype-img');
  const titleEl = document.getElementById('preview-active-title');
  const subEl = document.getElementById('preview-active-sub');
  const thumbsContainer = document.getElementById('preview-thumbnails');

  if (mainImg) {
    mainImg.style.opacity = '0.4';
    setTimeout(() => {
      mainImg.src = preset.mainImg;
      mainImg.style.opacity = '1';
    }, 150);
  }

  if (titleEl) titleEl.textContent = preset.title;
  if (subEl) subEl.textContent = currentLang === 'ar' ? `الورشة المختارة: ${preset.atelier}` : `Matched Atelier: ${preset.atelier}`;

  if (thumbsContainer && preset.variations) {
    thumbsContainer.innerHTML = '';
    preset.variations.forEach((v, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `variation-thumb ${idx === 0 ? 'active' : ''}`;
      thumb.dataset.img = v.img;
      thumb.dataset.title = v.title;
      thumb.innerHTML = `<img src="${v.img}" alt="${v.title}">`;
      
      thumb.addEventListener('click', () => {
        document.querySelectorAll('.variation-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImg) {
          mainImg.style.opacity = '0.5';
          setTimeout(() => {
            mainImg.src = v.img;
            mainImg.style.opacity = '1';
          }, 120);
        }
        if (titleEl) titleEl.textContent = `${v.title} • Takchita`;
      });

      thumbsContainer.appendChild(thumb);
    });
  }
}

function initAIDesigner() {
  // Swatch buttons
  document.querySelectorAll('.color-swatch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectColorInDesigner(btn.dataset.color);
    });
  });

  // "Generate My Design" Button
  const genBtn = document.getElementById('btn-generate-ai');
  const loadingOverlay = document.getElementById('ai-loading-overlay');
  const loadingStep = document.getElementById('ai-loading-step');
  const progressBar = document.getElementById('ai-progress-bar');
  const previewCard = document.getElementById('preview-card');

  if (genBtn && loadingOverlay) {
    genBtn.addEventListener('click', () => {
      if (isGeneratingAI) return;
      isGeneratingAI = true;

      const isRTL = currentLang === 'ar';
      const steps = isRTL ? [
        'جاري فحص أرشيف الزخارف المغربية الأصيلة...',
        'جاري مواءمة خيوط حرير الصابرة والسفيفة الذهبية...',
        'جاري توليد قصة القفطان ثلاثية الأبعاد بتناسق تام...',
        'جاري مطابقة التصميم مع المعلم الحرفي المعتمد...'
      ] : [
        'Scanning ancestral Moroccan motifs...',
        'Harmonizing pure silk weave & gold Sfifa...',
        'Synthesizing 3D silhouette drape...',
        'Calibrating Maâlem craftsmanship feasibility...'
      ];

      loadingOverlay.classList.add('active');
      progressBar.style.width = '10%';
      loadingStep.textContent = steps[0];

      setTimeout(() => {
        progressBar.style.width = '35%';
        loadingStep.textContent = steps[1];
      }, 450);

      setTimeout(() => {
        progressBar.style.width = '70%';
        loadingStep.textContent = steps[2];
      }, 950);

      setTimeout(() => {
        progressBar.style.width = '95%';
        loadingStep.textContent = steps[3];
      }, 1450);

      setTimeout(() => {
        progressBar.style.width = '100%';
        const preset = aiPresets[currentDesignerColor] || aiPresets.emerald;
        applyPresetToPreview(preset);

        setTimeout(() => {
          loadingOverlay.classList.remove('active');
          isGeneratingAI = false;

          // Celebration shimmer on preview card
          if (previewCard) {
            previewCard.style.boxShadow = '0 0 45px rgba(212, 175, 55, 0.6)';
            setTimeout(() => {
              previewCard.style.boxShadow = '';
            }, 1200);
          }
        }, 350);
      }, 1900);
    });
  }

  // Commission This Design button in AI preview card
  const commissionAiBtn = document.getElementById('btn-commission-ai');
  if (commissionAiBtn) {
    commissionAiBtn.addEventListener('click', () => {
      const preset = aiPresets[currentDesignerColor] || aiPresets.emerald;
      const mainImg = document.getElementById('ai-prototype-img');
      const activeTitle = document.getElementById('preview-active-title');
      
      openArtisanCommissionModal({
        title: activeTitle ? activeTitle.textContent : `${preset.title} • Takchita`,
        price: '1,200 € (12,800 MAD)',
        img: mainImg ? mainImg.getAttribute('src') : preset.mainImg,
        atelier: preset.atelier || 'Atelier El Fellah, Tangier',
        category: 'Bespoke AI Caftan'
      });
    });
  }

  // Initial variation thumbnails click handling
  document.querySelectorAll('.variation-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.variation-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const mainImg = document.getElementById('ai-prototype-img');
      const activeTitle = document.getElementById('preview-active-title');
      const src = thumb.dataset.img || thumb.querySelector('img')?.getAttribute('src');
      const title = thumb.dataset.title;
      if (mainImg && src) {
        mainImg.style.opacity = '0.5';
        setTimeout(() => {
          mainImg.src = src;
          mainImg.style.opacity = '1';
        }, 120);
      }
      if (activeTitle && title) {
        activeTitle.textContent = `${title} • Takchita`;
      }
    });
  });
}

// ==========================================================================
// Artisan Commission Modal Controller (Issue 05)
// ==========================================================================
function openArtisanCommissionModal(data) {
  const modalContainer = document.getElementById('modal-container');
  if (!modalContainer) return;

  const isRTL = currentLang === 'ar';
  const priceNum = 1200; // Base EUR
  const artisanAmount = Math.round(priceNum * 0.9);
  const platformAmount = Math.round(priceNum * 0.1);
  const priceMadNum = 12800;
  const artisanMad = Math.round(priceMadNum * 0.9);
  const platformMad = Math.round(priceMadNum * 0.1);

  modalContainer.innerHTML = `
    <div class="modal-overlay active" id="commission-modal-overlay">
      <div class="modal-container commission-modal-container" role="dialog" aria-modal="true">
        <button class="modal-close-btn" id="commission-close-btn" aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="commission-header-banner">
          <div>
            <div class="commission-title">${isRTL ? 'طلب تفصيل قفطانك بالصنعة التقليدية' : 'Commission Your Bespoke Caftan'}</div>
            <div class="commission-sub">${isRTL ? 'إبداع مغربي أصيل مباشرة من ورشات طنجة وفاس' : 'Handcrafted by master Moroccan artisans directly from Tangier & Fez'}</div>
          </div>
        </div>

        <div class="commission-body" id="commission-body-content">
          <!-- Summary Box -->
          <div class="commission-summary-box">
            <img src="${data.img}" alt="${data.title}" class="commission-summary-thumb">
            <div class="commission-summary-details">
              <div class="commission-summary-title">${data.title}</div>
              <div class="commission-summary-atelier">${data.atelier}</div>
              <div class="commission-lead-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>${isRTL ? 'المدة التقديرية: 3 إلى 4 أسابيع' : 'Estimated Lead Time: 3 to 4 Weeks'}</span>
              </div>
            </div>
          </div>

          <!-- Transparent Pricing Breakdown -->
          <div class="pricing-breakdown-card">
            <div class="breakdown-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              <span>${isRTL ? 'الشفافية المالية ونموذج التجارة العادلة' : 'Fair Trade & Transparent Economics'}</span>
            </div>
            <div class="breakdown-row artisan-highlight">
              <span>${isRTL ? 'أجر المعلم الحرفي المباشر' : 'Direct Artisan Allocation'} <span class="badge-90">90%</span></span>
              <span>€ ${artisanAmount} (${artisanMad.toLocaleString()} MAD)</span>
            </div>
            <div class="breakdown-row">
              <span>${isRTL ? 'رسوم المنصة والتوثيق والضمان' : 'Platform & Digital Passport Facilitation'} (10%)</span>
              <span>€ ${platformAmount} (${platformMad.toLocaleString()} MAD)</span>
            </div>
            <div class="breakdown-row">
              <span>${isRTL ? 'السعر الإجمالي للطلب المخصص' : 'Total Bespoke Commission'}</span>
              <span>€ ${priceNum} (${priceMadNum.toLocaleString()} MAD)</span>
            </div>
          </div>

          <!-- Order Form -->
          <form id="commission-client-form" onsubmit="return false;">
            <div class="commission-form-grid">
              <div>
                <label class="form-label">${isRTL ? 'الاسم الكامل' : 'Full Name'}</label>
                <input type="text" class="commission-input" id="client-name" placeholder="${isRTL ? 'مثال: ليلى الفاسي' : 'e.g. Laila El Fassi'}" required>
              </div>
              <div>
                <label class="form-label">${isRTL ? 'رقم الواتساب أو الهاتف' : 'WhatsApp / Mobile Number'}</label>
                <input type="tel" class="commission-input" id="client-phone" placeholder="${isRTL ? '+212 6 XX XX XX XX' : '+212 6 XX XX XX XX'}" required>
              </div>
              <div>
                <label class="form-label">${isRTL ? 'تاريخ المناسبة المرتقب' : 'Target Event Date'}</label>
                <input type="date" class="commission-input" id="client-date">
              </div>
              <div>
                <label class="form-label">${isRTL ? 'المقاس أو التفصيل الخاص' : 'Sizing Preference'}</label>
                <select class="commission-input" id="client-size">
                  <option value="custom">${isRTL ? 'تفصيل على المقاس الدقيق (سنتواصل معك)' : 'Custom Measurements (Maâlem will confirm)'}</option>
                  <option value="36">EU 36 (Small)</option>
                  <option value="38">EU 38 (Medium)</option>
                  <option value="40">EU 40 (Medium/Large)</option>
                  <option value="42">EU 42 (Large)</option>
                  <option value="44">EU 44 (XL)</option>
                </select>
              </div>
              <div class="full-col">
                <label class="form-label">${isRTL ? 'ملاحظات خاصة للمعلم (تعديل القصة، لون الخيوط، إلخ)' : 'Special Artisan Notes (Embroidery accents, neckline depth, etc.)'}</label>
                <textarea class="commission-input" rows="2" id="client-notes" placeholder="${isRTL ? 'اكتبي هنا أي تفضيلات خاصة لتفصيل القفطان...' : 'Any custom tailoring requirements...'}"></textarea>
              </div>
            </div>

            <button type="submit" class="btn-generate-ai" style="width: 100%; margin-top: 20px;">
              <span>✦</span>
              <span>${isRTL ? 'تأكيد طلب التفصيل وإرساله للورشة' : 'Confirm & Submit Commission to Atelier'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  `;

  const overlay = document.getElementById('commission-modal-overlay');
  const closeBtn = document.getElementById('commission-close-btn');

  const closeCommissionModal = () => {
    overlay.classList.remove('active');
    setTimeout(() => { modalContainer.innerHTML = ''; }, 300);
  };

  closeBtn.addEventListener('click', closeCommissionModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCommissionModal();
  });

  // Handle Form Submit
  const form = document.getElementById('commission-client-form');
  form.addEventListener('submit', () => {
    const clientName = document.getElementById('client-name').value || 'Honored Client';
    const orderCode = `NSJ-${Math.floor(1000 + Math.random() * 9000)}`;

    const bodyContainer = document.getElementById('commission-body-content');
    bodyContainer.innerHTML = `
      <div class="commission-success-view">
        <div class="success-icon-wrap">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 class="success-title">${isRTL ? 'تم تأكيد طلب التفصيل بنجاح!' : 'Commission Successfully Placed!'}</h3>
        <p class="success-sub">
          ${isRTL 
            ? `شكراً لكِ ${clientName}، تم إرسال ملف تصميم القفطان ومقترحات الذكاء الاصطناعي مباشرة إلى ورشة ${data.atelier}.`
            : `Thank you, ${clientName}! Your AI-assisted design blueprint has been sent directly to ${data.atelier}.`
          }
        </p>

        <div class="order-code-badge">${orderCode}</div>

        <div class="success-milestones-box">
          <div class="milestone-step">
            <span class="milestone-dot"></span>
            <span>${isRTL ? 'مراجعة المعلم: خلال 24 ساعة عبر الواتساب' : 'Maâlem Craft Review: Within 24h via WhatsApp'}</span>
          </div>
          <div class="milestone-step">
            <span class="milestone-dot"></span>
            <span>${isRTL ? 'اعتماد الأقمشة والسفيفة الأصيلة: من أسواق فاس وطنجة' : 'Authentic Silk & Sfifa Sourcing: Fez & Tangier Guilds'}</span>
          </div>
          <div class="milestone-step">
            <span class="milestone-dot"></span>
            <span>${isRTL ? 'إصدار جواز السفر الرقمي المعتمد: عند اكتمال الخياطة' : 'Verifiable Digital Passport: Issued with final piece'}</span>
          </div>
        </div>

        <button type="button" class="btn-primary" id="btn-done-commission">
          <span>${isRTL ? 'العودة للمنصة' : 'Back to Experience'}</span>
        </button>
      </div>
    `;

    document.getElementById('btn-done-commission')?.addEventListener('click', closeCommissionModal);
  });
}

// ==========================================================================
// Collection & Artisan Drawer Handlers (Issue 06)
// ==========================================================================
const artisanProfiles = {
  tailors: {
    name: 'Maâlem Omar El Fellah',
    title: 'Master Tailor & Master Cutter',
    location: 'Tangier Medina Kasbah Atelier',
    exp: '35 Years',
    orders: '420+',
    rating: '4.95',
    avatar: 'artisan workshops.webp',
    bio: 'Inherited the art of traditional Moroccan tailoring from three generations of Tangier royal tailors. Specializes in architectural cut precision, flawless silk lining, and zero-waste pattern drafting.'
  },
  embroiderers: {
    name: "M'allema Fatima Zohra Alami",
    title: 'Grand Master of Tarz Fassi & Rbati',
    location: 'Fez Guild of Master Embroiderers',
    exp: '28 Years',
    orders: '380+',
    rating: '4.98',
    avatar: 'caftan pic/1d4cb6461e3eaec0a5c466807b8100b1.jpg',
    bio: 'Pioneer in preserving counted-thread double-face Tarz Fassi and fluid silk satin Tarz Rbati. Heads a cooperative of 22 women artisans trained in ancestral geometric and floral motifs.'
  },
  sfifa: {
    name: 'Maâlem Abdelkader Benkirane',
    title: 'Master of Hand-Woven Sfifa & Mjadel',
    location: 'Tangier Craft Artisan Quarter',
    exp: '32 Years',
    orders: '510+',
    rating: '4.94',
    avatar: 'caftan pic/4105534d840dd39605a4b26c77c59847.jpg',
    bio: 'Celebrated for hand-weaving the finest silk and gold thread Sfifa braids using antique looms. His intricate Majboud borders adorn royal and diplomatic caftans across Morocco and Europe.'
  },
  aqad: {
    name: "M'allema Kenza Bouazza",
    title: 'Master of Sabra Silk Aqad Knotting',
    location: 'Fez Medina Cooperative',
    exp: '24 Years',
    orders: '650+',
    rating: '4.99',
    avatar: 'caftan pic/532ca6c399bde52fa69cda53b5b5214f.jpg',
    bio: 'Specialist in the meticulous art of knotting handmade spherical Aqad buttons from pure plant-based Sabra silk. Each ceremonial caftan features over 100 perfectly uniform hand-knotted buttons.'
  }
};

function openArtisanDrawer(craftKey = 'tailors') {
  const modalContainer = document.getElementById('modal-container');
  if (!modalContainer) return;

  const artisan = artisanProfiles[craftKey] || artisanProfiles.tailors;
  const isRTL = currentLang === 'ar';

  modalContainer.innerHTML = `
    <div class="artisan-drawer-overlay active" id="artisan-drawer-overlay">
      <div class="artisan-drawer" role="dialog" aria-modal="true">
        <div class="drawer-header">
          <h3>${isRTL ? 'ملف المعلم الحرفي المعتمد' : 'Verified Artisan Profile'}</h3>
          <button class="modal-close-btn" id="drawer-close-btn" style="position: static; color: white; background: rgba(255,255,255,0.15);" aria-label="Close drawer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="drawer-body">
          <div class="drawer-artisan-profile">
            <img src="${artisan.avatar}" alt="${artisan.name}" class="drawer-avatar">
            <div>
              <div class="drawer-profile-name">${artisan.name}</div>
              <div class="drawer-profile-title">${artisan.title}</div>
              <div class="drawer-profile-loc">${artisan.location}</div>
            </div>
          </div>

          <!-- Stats Row -->
          <div class="drawer-stats-row">
            <div>
              <div class="stat-box-val">${artisan.exp}</div>
              <div class="stat-box-label">${isRTL ? 'الخبرة بالصنعة' : 'Experience'}</div>
            </div>
            <div>
              <div class="stat-box-val">${artisan.orders}</div>
              <div class="stat-box-label">${isRTL ? 'طلبات منجزة' : 'Commissions'}</div>
            </div>
            <div>
              <div class="stat-box-val">★ ${artisan.rating}</div>
              <div class="stat-box-label">${isRTL ? 'تقييم الزبائن' : 'Client Rating'}</div>
            </div>
          </div>

          <div>
            <h4 style="font-size: 1rem; color: var(--accent-dark-emerald); margin-bottom: 8px;">
              ${isRTL ? 'مسيرة المعلم والأصالة' : 'Master Craft Journey & Lineage'}
            </h4>
            <p class="drawer-bio-p">${artisan.bio}</p>
          </div>

          <!-- 90% Direct Compensation Pledge -->
          <div class="pricing-breakdown-card" style="margin-top: 10px;">
            <div class="breakdown-title" style="color: var(--accent-emerald);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <span>${isRTL ? 'ميثاق نسيج للتجارة العادلة' : 'NASSIJ Fair Trade Pledge'}</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--ink-secondary); line-height: 1.5;">
              ${isRTL 
                ? 'تضمن منصة نسيج حصول المعلم على 90% من قيمة كل طلب بالكامل لدعم استمرارية الورش التقليدية وتمكين الشباب والنساء.'
                : 'NASSIJ AI guarantees 90% direct payout of the purchase price to the artisan, empowering local cooperatives and preserving ancestral Moroccan arts.'
              }
            </p>
          </div>

          <button type="button" class="btn-primary" id="drawer-commission-btn" style="width: 100%; justify-content: center; padding: 14px;">
            <span>${isRTL ? `طلب تفصيل خاص مع ${artisan.name}` : `Commission Custom Order with ${artisan.name}`}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;

  const overlay = document.getElementById('artisan-drawer-overlay');
  const closeBtn = document.getElementById('drawer-close-btn');

  const closeDrawer = () => {
    overlay.classList.remove('active');
    setTimeout(() => { modalContainer.innerHTML = ''; }, 350);
  };

  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeDrawer();
  });

  document.getElementById('drawer-commission-btn').addEventListener('click', () => {
    closeDrawer();
    setTimeout(() => {
      openArtisanCommissionModal({
        title: `Bespoke Commission with ${artisan.name}`,
        img: artisan.avatar,
        atelier: `${artisan.name} • ${artisan.location}`,
        price: '€ 1,200',
        priceMad: '12,800 MAD',
        specs: artisan.title
      });
    }, 320);
  });
}

function initCollectionAndArtisans() {
  // Collection Cards "Discover This Caftan" Buttons
  document.querySelectorAll('.btn-card-discover').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const item = caftanCatalog.find(c => c.id === id) || caftanCatalog[0];
      openCaftanStoryModal(item);
    });
  });

  // Collection Heart Buttons
  document.querySelectorAll('.card-heart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('active');
    });
  });

  // "Meet Our Artisans" Button
  const meetArtisansBtn = document.getElementById('btn-open-artisan-drawer');
  if (meetArtisansBtn) {
    meetArtisansBtn.addEventListener('click', () => {
      openArtisanDrawer('tailors');
    });
  }
}

// ==========================================================================
// Digital Heritage Museum Modal Controller (Issue 07)
// ==========================================================================
function openDigitalMuseumModal(activeTab = 'embroidery') {
  const modalContainer = document.getElementById('modal-container');
  if (!modalContainer) return;

  const isRTL = currentLang === 'ar';

  modalContainer.innerHTML = `
    <div class="modal-overlay active" id="museum-modal-overlay">
      <div class="modal-container museum-modal-container" role="dialog" aria-modal="true">
        <button class="modal-close-btn" id="museum-close-btn" aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="commission-header-banner">
          <div>
            <div class="commission-title">${isRTL ? 'متحف القفطان المغربي الرقمي' : 'Digital Heritage Museum & Archives'}</div>
            <div class="commission-sub">${isRTL ? 'توثيق حي لأسرار الصنعة والتطريز عبر العصور' : 'Preserving the living ancestral knowledge of Moroccan haute couture'}</div>
          </div>
        </div>

        <!-- Museum Navigation Tabs -->
        <div class="museum-nav-tabs">
          <button class="museum-tab-btn ${activeTab === 'embroidery' ? 'active' : ''}" data-target="tab-embroidery">
            ${isRTL ? 'تقنيات الطرز المغربي' : 'Embroidery Traditions'}
          </button>
          <button class="museum-tab-btn ${activeTab === 'textiles' ? 'active' : ''}" data-target="tab-textiles">
            ${isRTL ? 'الأقمشة والحرير النادر' : 'Rare Textiles & Silk'}
          </button>
          <button class="museum-tab-btn ${activeTab === 'history' ? 'active' : ''}" data-target="tab-history">
            ${isRTL ? 'تاريخ السلالات والشهادات' : 'Oral Histories & Dynasties'}
          </button>
        </div>

        <!-- Tab 1: Embroidery -->
        <div class="museum-tab-pane ${activeTab === 'embroidery' ? 'active' : ''}" id="tab-embroidery">
          <div class="museum-card-grid">
            <div class="museum-archive-card">
              <img src="caftan pic/1d4cb6461e3eaec0a5c466807b8100b1.jpg" alt="Tarz Fassi" class="museum-archive-thumb">
              <div class="museum-archive-body">
                <span class="archive-region-tag">FEZ • EST. 12TH CENTURY</span>
                <h4 class="archive-title">${isRTL ? 'طرز فاس الغرزة المتقونة' : 'Tarz Fassi (Fassi Stitch)'}</h4>
                <p class="archive-desc">
                  ${isRTL 
                    ? 'يتميز بالعد والحساب الدقيق للغرز، وهو طرز متطابق بنسبة 100% على وجه القماش وقفاه بدون عقد ظاهرة، يعتمد أشكالاً هندسية دقيقة من وحي الزليج المغربي.'
                    : 'A counted-thread geometric embroidery executed identically on both sides of the fabric without knots. Inspired by Andalusian and Merinid zellij tilework.'
                  }
                </p>
              </div>
            </div>

            <div class="museum-archive-card">
              <img src="caftan pic/532ca6c399bde52fa69cda53b5b5214f.jpg" alt="Tarz Rbati" class="museum-archive-thumb">
              <div class="museum-archive-body">
                <span class="archive-region-tag">RABAT • EST. 17TH CENTURY</span>
                <h4 class="archive-title">${isRTL ? 'طرز رباطي بحرير الصابرة' : 'Tarz Rbati (Silk Satin Stitch)'}</h4>
                <p class="archive-desc">
                  ${isRTL 
                    ? 'يتميز بنقوش نباتية وزهور انسيابية متعددة الألوان وغرز حريرية ملساء وممتلئة، تجسد حدائق الأندلس وتفيض بالأناقة الملكية.'
                    : 'Renowned for flowing floral arabesques and lustrous satin stitches worked in dense, un-spun Sabra silk, inspired by royal Andalusian courtyards.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: Textiles -->
        <div class="museum-tab-pane ${activeTab === 'textiles' ? 'active' : ''}" id="tab-textiles">
          <div class="museum-card-grid">
            <div class="museum-archive-card">
              <img src="caftan pic/7b6b11d229071c1fb2813a2f88868080.jpg" alt="Mobra Silk Velvet" class="museum-archive-thumb">
              <div class="museum-archive-body">
                <span class="archive-region-tag">TANGIER & TETOUAN</span>
                <h4 class="archive-title">${isRTL ? 'الموبرة الحريرية الملكية' : 'Mobra (Antique Silk Velvet)'}</h4>
                <p class="archive-desc">
                  ${isRTL 
                    ? 'المخمل الحريري الطبيعي الثقيل المنسوج يدوياً، والمستخدم في التكاشط والقفاطين الملكية الشتوية لقدرته الفائقة على حمل التطريز الذهبي الكثيف.'
                    : 'Heavy natural silk velvet prized for ceremonial winter caftans, capable of supporting dense 24k gold Majboud bullion embroidery without sagging.'
                  }
                </p>
              </div>
            </div>

            <div class="museum-archive-card">
              <img src="caftan pic/4105534d840dd39605a4b26c77c59847.jpg" alt="Plant-Based Sabra Silk" class="museum-archive-thumb">
              <div class="museum-archive-body">
                <span class="archive-region-tag">ECOLOGICAL CRAFT</span>
                <h4 class="archive-title">${isRTL ? 'حرير الصابرة المستدام' : 'Sabra Aloe Vera Silk'}</h4>
                <p class="archive-desc">
                  ${isRTL 
                    ? 'حرير نباتي بيئي مستخرج من ألياف نبات الصبار، يتم غسله وصباغته بألوان طبيعية نباتية لصناعة خيوط السفيفة والعقد الحريرية يدوياً.'
                    : 'A 100% biodegradable plant silk harvested from Moroccan agave aloe vera fibers, naturally dyed to produce iridescent, durable embroidery threads.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 3: History & Oral Tradition -->
        <div class="museum-tab-pane ${activeTab === 'history' ? 'active' : ''}" id="tab-history">
          <div style="background: var(--bg-page); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
              <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--bg-dark-emerald); color: var(--accent-gold); display: flex; align-items: center; justify-content: center;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
              </div>
              <div>
                <h4 style="font-size: 1.15rem; color: var(--accent-dark-emerald); font-weight: 700;">
                  ${isRTL ? 'شهادة شفوية: المعلم عمر الفلاح (طنجة)' : 'Oral Testimony: Maâlem Omar El Fellah (Tangier)'}
                </h4>
                <span style="font-size: 0.8rem; color: var(--ink-muted);">Recorded live in the Kasbah of Tangier • October 2026</span>
              </div>
            </div>
            <blockquote style="font-style: italic; color: var(--ink-secondary); line-height: 1.7; border-left: 3px solid var(--accent-gold); padding-left: 16px; margin: 0;">
              ${isRTL 
                ? '«القفطان ليس مجرد ثوب نلبسه، إنه وثيقة تاريخية حية. كل غرزة خيط، وكل عقدة حرير نلفها بأصابعنا تحمل روح معلم علّم معلماً قبله منذ مئات السنين. حين نستخدم الذكاء الاصطناعي اليوم، فإننا لا نستبدل يد الحرفي، بل نمنح صنعة أجدادنا صوتاً يسمعه العالم بأسره.»'
                : '"The caftan is not merely a garment we put on; it is a living historical parchment. Every stitch, every silk knot our fingers twist carries the breath of a master who taught another master centuries ago. By weaving AI into our craft today, we never replace the artisan’s hand—we give our ancestral heritage a global stage."'
              }
            </blockquote>
          </div>
        </div>

      </div>
    </div>
  `;

  const overlay = document.getElementById('museum-modal-overlay');
  const closeBtn = document.getElementById('museum-close-btn');

  const closeMuseumModal = () => {
    overlay.classList.remove('active');
    setTimeout(() => { modalContainer.innerHTML = ''; }, 300);
  };

  closeBtn.addEventListener('click', closeMuseumModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMuseumModal();
  });

  // Tab switching
  const tabBtns = overlay.querySelectorAll('.museum-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      overlay.querySelectorAll('.museum-tab-pane').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.dataset.target;
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

function initMuseum() {
  document.querySelectorAll('.museum-feat-row').forEach(row => {
    row.addEventListener('click', () => {
      const tab = row.dataset.tab || 'embroidery';
      openDigitalMuseumModal(tab);
    });
  });
}






// ==========================================================================
// Caftan Digital Passport Modal Controller (Issue 08)
// ==========================================================================
function openDigitalPassportModal(item) {
  const modalContainer = document.getElementById('modal-container');
  if (!modalContainer) return;

  const isRTL = currentLang === 'ar';
  const garmentCode = `MAR-TNG-2026-${String(item.id).padStart(4, '0')}`;

  // SVG QR Code generator representation
  const qrSvg = `
    <svg viewBox="0 0 100 100" class="qr-code-svg">
      <!-- 3 Position Markers -->
      <rect x="5" y="5" width="25" height="25" fill="#08482D"/>
      <rect x="9" y="9" width="17" height="17" fill="#FFFFFF"/>
      <rect x="13" y="13" width="9" height="9" fill="#D4AF37"/>

      <rect x="70" y="5" width="25" height="25" fill="#08482D"/>
      <rect x="74" y="9" width="17" height="17" fill="#FFFFFF"/>
      <rect x="78" y="13" width="9" height="9" fill="#D4AF37"/>

      <rect x="5" y="70" width="25" height="25" fill="#08482D"/>
      <rect x="9" y="74" width="17" height="17" fill="#FFFFFF"/>
      <rect x="13" y="78" width="9" height="9" fill="#D4AF37"/>

      <!-- Matrix pattern -->
      <rect x="36" y="8" width="5" height="5" fill="#08482D"/>
      <rect x="46" y="8" width="5" height="5" fill="#D4AF37"/>
      <rect x="56" y="14" width="5" height="5" fill="#08482D"/>
      <rect x="36" y="22" width="8" height="5" fill="#08482D"/>
      <rect x="50" y="22" width="6" height="6" fill="#D4AF37"/>
      
      <rect x="10" y="38" width="6" height="6" fill="#08482D"/>
      <rect x="22" y="44" width="5" height="5" fill="#D4AF37"/>
      <rect x="35" y="40" width="12" height="6" fill="#08482D"/>
      <rect x="52" y="38" width="8" height="5" fill="#D4AF37"/>
      <rect x="68" y="42" width="6" height="6" fill="#08482D"/>
      <rect x="82" y="38" width="6" height="6" fill="#08482D"/>

      <rect x="38" y="55" width="6" height="6" fill="#08482D"/>
      <rect x="50" y="52" width="8" height="8" fill="#D4AF37"/>
      <rect x="65" y="58" width="6" height="6" fill="#08482D"/>
      <rect x="78" y="52" width="12" height="6" fill="#08482D"/>

      <rect x="38" y="72" width="8" height="6" fill="#D4AF37"/>
      <rect x="54" y="76" width="6" height="6" fill="#08482D"/>
      <rect x="70" y="72" width="6" height="6" fill="#08482D"/>
      <rect x="84" y="76" width="8" height="8" fill="#D4AF37"/>
    </svg>
  `;

  modalContainer.innerHTML = `
    <div class="modal-overlay active" id="passport-modal-overlay">
      <div class="modal-container passport-modal-container" role="dialog" aria-modal="true">
        
        <!-- Moroccan 8-point rosette watermark -->
        <svg class="passport-watermark-bg" viewBox="0 0 100 100" fill="#0F3E36">
          <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35"/>
        </svg>

        <button class="modal-close-btn" id="passport-close-btn" aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="passport-header-gold">
          <div>
            <div class="passport-badge-tag">${isRTL ? 'شهادة التوثيق والأصالة الرسمية' : 'OFFICIAL CERTIFICATE OF PROVENANCE'}</div>
            <h2 class="passport-title">${item.title}</h2>
            <div class="passport-id-tag">${garmentCode}</div>
          </div>
        </div>

        <div class="passport-body">
          <!-- QR Column -->
          <div class="passport-qr-col">
            <div class="qr-frame-box">
              <img src="qr-code.png" alt="Digital Blockchain Passport QR Code" class="qr-code-img">
            </div>
            <div class="qr-scan-instruction">
              ${isRTL ? 'امسح الرمز للتحقق من السجل الرقمي المعتمد' : 'Scan to verify immutable craft record'}
            </div>
          </div>

          <!-- Info Column -->
          <div class="passport-info-col">
            
            <div class="passport-guild-seal">
              <div class="guild-seal-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div>
                <div class="guild-seal-title">${item.atelier}</div>
                <div class="guild-seal-sub">Verified Tangier & Fez Haute Couture Guild • 2026</div>
              </div>
            </div>

            <!-- Metrics Grid -->
            <div class="passport-metrics-grid">
              <div class="passport-metric-card">
                <div class="metric-card-val">140 h</div>
                <div class="metric-card-label">${isRTL ? 'ساعات التطريز اليدوي' : 'Hand Needlework Hours'}</div>
              </div>
              <div class="passport-metric-card">
                <div class="metric-card-val">24 m</div>
                <div class="metric-card-label">${isRTL ? 'سفيفة حريرية يدوية' : 'Hand-Braided Sfifa'}</div>
              </div>
              <div class="passport-metric-card">
                <div class="metric-card-val">120</div>
                <div class="metric-card-label">${isRTL ? 'عقدة صابرة مغزولة يدوياً' : 'Hand-Knotted Sabra Aqad'}</div>
              </div>
              <div class="passport-metric-card">
                <div class="metric-card-val">0%</div>
                <div class="metric-card-label">${isRTL ? 'فائض قماش أو هدر' : 'Inventory Deadstock'}</div>
              </div>
            </div>

            <!-- Actions -->
            <div class="passport-footer-actions">
              <button type="button" class="btn-primary" id="btn-print-passport">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                <span>${isRTL ? 'طباعة شهادة الجواز الرقمي' : 'Print Passport Certificate'}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  `;

  const overlay = document.getElementById('passport-modal-overlay');
  const closeBtn = document.getElementById('passport-close-btn');

  const closePassport = () => {
    overlay.classList.remove('active');
    setTimeout(() => { modalContainer.innerHTML = ''; }, 300);
  };

  closeBtn.addEventListener('click', closePassport);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePassport();
  });
}

// ==========================================================================
// Sustainability Animated Counters & Scroll Reveals (Issue 09)
// ==========================================================================
function initSustainabilityCounters() {
  const banner = document.getElementById('stats-banner');
  if (!banner) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.25 });

  observer.observe(banner);

  function animateCounters() {
    const counters = document.querySelectorAll('.stat-banner-number');
    const duration = 1400; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target, 10);
        const suffix = counter.dataset.suffix || '';
        const current = Math.round(target * ease);
        counter.textContent = `${current}${suffix}`;
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }
}

function initScrollReveals() {
  // Target interactive sections and cards
  const revealTargets = document.querySelectorAll(
    '.collection-card, .pillar-card, .craft-item-card, .museum-feat-row, .designer-form, .preview-card, .artisan-portrait-wrap, .museum-vintage-frame'
  );

  if (!('IntersectionObserver' in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '120px' });

  revealTargets.forEach(el => {
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    } else {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      observer.observe(el);
    }
  });
}

// ==========================================================================
// Patron & Maâlem Portal Modal (Issue 10)
// ==========================================================================
function openLoginModal() {
  const modalContainer = document.getElementById('modal-container');
  if (!modalContainer) return;
  const isRTL = currentLang === 'ar';

  modalContainer.innerHTML = `
    <div class="modal-overlay active" id="login-modal-overlay">
      <div class="modal-container login-modal-container" role="dialog" aria-modal="true" style="max-width: 480px; padding: 32px 28px; background: #FAF8F5; border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 20px; box-shadow: 0 25px 60px rgba(8, 72, 45, 0.25);">
        <button class="modal-close-btn" id="login-close-btn" aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div style="text-align: center; margin-bottom: 24px;">
          <div style="display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; background: rgba(8, 72, 45, 0.08); border-radius: 50%; margin-bottom: 12px; border: 1px solid rgba(212, 175, 55, 0.4);">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#08482D" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h3 style="font-family: var(--font-display); font-size: 1.5rem; color: var(--color-deep-forest); margin-bottom: 6px;">
            ${isRTL ? 'تسجيل الدخول إلى نسيج' : 'Welcome to NASSIJ AI'}
          </h3>
          <p style="font-size: 0.88rem; color: var(--color-stone-muted);">
            ${isRTL ? 'بوابة الرعاة الدوليين والمعلمين الحرفيين المغاربة' : 'Moroccan Haute Couture Patron & Maâlem Artisan Portal'}
          </p>
        </div>

        <div style="display: flex; gap: 8px; margin-bottom: 20px; background: rgba(8, 72, 45, 0.06); padding: 4px; border-radius: var(--radius-pill);">
          <button type="button" class="portal-tab-btn active" id="tab-patron" style="flex: 1; padding: 8px 12px; border-radius: var(--radius-pill); border: none; background: var(--color-deep-forest); color: #fff; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">
            ${isRTL ? 'حساب الزبون / الراعي' : 'Patron Client'}
          </button>
          <button type="button" class="portal-tab-btn" id="tab-artisan" style="flex: 1; padding: 8px 12px; border-radius: var(--radius-pill); border: none; background: transparent; color: var(--color-deep-forest); font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">
            ${isRTL ? 'بوابة المعلم الصانع' : 'Maâlem Artisan'}
          </button>
        </div>

        <div id="login-form-content">
          <div style="margin-bottom: 14px;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--color-deep-forest); margin-bottom: 6px;">
              ${isRTL ? 'البريد الإلكتروني أو الهاتف' : 'Email or Phone'}
            </label>
            <input type="text" id="login-input-user" value="patron@nassij.ma" style="width: 100%; padding: 10px 14px; border: 1px solid rgba(8, 72, 45, 0.2); border-radius: 8px; font-family: var(--font-sans); font-size: 0.9rem;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--color-deep-forest); margin-bottom: 6px;">
              ${isRTL ? 'كلمة المرور' : 'Password'}
            </label>
            <input type="password" value="••••••••••••" style="width: 100%; padding: 10px 14px; border: 1px solid rgba(8, 72, 45, 0.2); border-radius: 8px; font-family: var(--font-sans); font-size: 0.9rem;">
          </div>

          <button type="button" id="btn-submit-login" class="btn-primary" style="width: 100%; justify-content: center; padding: 12px; font-weight: 600; margin-bottom: 12px;">
            ${isRTL ? 'دخول إلى الحساب' : 'Access Account'}
          </button>

          <button type="button" id="btn-demo-quick-auth" style="width: 100%; padding: 10px; background: rgba(218, 231, 199, 0.4); border: 1px dashed var(--color-mint-accent); border-radius: 8px; color: var(--color-deep-forest); font-size: 0.82rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">
            ✦ ${isRTL ? 'تجربة سريعة: تسجيل فوري كـ أمينة التازي (زبونة)' : 'Quick Demo: 1-Click Patron Sign-In'}
          </button>
        </div>

        <div id="login-success-view" style="display: none; text-align: center; padding: 20px 0;">
          <div style="width: 50px; height: 50px; background: rgba(8, 72, 45, 0.1); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: var(--color-deep-forest); margin-bottom: 12px;">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h4 style="font-family: var(--font-display); font-size: 1.25rem; color: var(--color-deep-forest); margin-bottom: 6px;" id="login-welcome-msg">
            ${isRTL ? 'مرحباً بك، لالة أمينة التازي!' : 'Welcome back, Lalla Amina El Tazi!'}
          </h4>
          <p style="font-size: 0.85rem; color: var(--color-stone-muted); margin-bottom: 16px;">
            ${isRTL ? 'حالة الطلب: قفطان الزمرد الملكي قيد التطريز اليدوي (75%)' : 'Order Status: Royal Emerald Caftan under Tarz handcrafting (75%)'}
          </p>
          <button type="button" class="btn-primary" id="btn-dismiss-login" style="width: 100%; justify-content: center;">
            ${isRTL ? 'متابعة التصفح' : 'Continue Exploring'}
          </button>
        </div>
      </div>
    </div>
  `;

  const overlay = document.getElementById('login-modal-overlay');
  const closeBtn = document.getElementById('login-close-btn');
  const tabPatron = document.getElementById('tab-patron');
  const tabArtisan = document.getElementById('tab-artisan');
  const userInput = document.getElementById('login-input-user');
  const submitBtn = document.getElementById('btn-submit-login');
  const demoQuickBtn = document.getElementById('btn-demo-quick-auth');
  const formView = document.getElementById('login-form-content');
  const successView = document.getElementById('login-success-view');
  const welcomeMsg = document.getElementById('login-welcome-msg');
  const dismissBtn = document.getElementById('btn-dismiss-login');

  const closeLogin = () => {
    overlay.classList.remove('active');
    setTimeout(() => { modalContainer.innerHTML = ''; }, 300);
  };

  closeBtn?.addEventListener('click', closeLogin);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeLogin();
  });
  dismissBtn?.addEventListener('click', closeLogin);

  tabPatron?.addEventListener('click', () => {
    tabPatron.classList.add('active');
    tabPatron.style.background = 'var(--color-deep-forest)';
    tabPatron.style.color = '#fff';
    tabArtisan.classList.remove('active');
    tabArtisan.style.background = 'transparent';
    tabArtisan.style.color = 'var(--color-deep-forest)';
    if (userInput) userInput.value = 'patron@nassij.ma';
    if (demoQuickBtn) demoQuickBtn.textContent = isRTL ? '✦ تجربة سريعة: تسجيل فوري كـ أمينة التازي' : '✦ Quick Demo: 1-Click Patron Sign-In';
  });

  tabArtisan?.addEventListener('click', () => {
    tabArtisan.classList.add('active');
    tabArtisan.style.background = 'var(--color-deep-forest)';
    tabArtisan.style.color = '#fff';
    tabPatron.classList.remove('active');
    tabPatron.style.background = 'transparent';
    tabPatron.style.color = 'var(--color-deep-forest)';
    if (userInput) userInput.value = 'maalam.driss@artisans-nassij.ma';
    if (demoQuickBtn) demoQuickBtn.textContent = isRTL ? '✦ تجربة سريعة: دخول المعلم إدريس الفلاح' : '✦ Quick Demo: 1-Click Maâlem Driss Sign-In';
  });

  const triggerAuth = (name) => {
    formView.style.display = 'none';
    successView.style.display = 'block';
    if (name.includes('driss') || name.includes('Driss')) {
      welcomeMsg.textContent = isRTL ? 'أهلاً بك يا معلم إدريس الفلاح!' : 'Welcome back, Maâlem Driss El Fellah!';
      successView.querySelector('p').textContent = isRTL ? 'لديك 3 طلبات تفصيل نشطة من باريس ولندن والدار البيضاء' : 'Active Guild Orders: 3 Bespoke Caftans in production';
    } else {
      welcomeMsg.textContent = isRTL ? 'مرحباً بك، لالة أمينة التازي!' : 'Welcome back, Lalla Amina El Tazi!';
    }
  };

  submitBtn?.addEventListener('click', () => triggerAuth(userInput.value));
  demoQuickBtn?.addEventListener('click', () => triggerAuth(userInput.value));
}

// ==========================================================================
// Dedicated Collection Catalog Engine (collection.html)
// ==========================================================================
let catalogFilterState = {
  search: '',
  silhouette: 'all',
  region: 'all',
  fabric: 'all',
  price: 'all',
  sort: 'featured'
};

function renderCatalogCards(filteredItems) {
  const container = document.getElementById('catalog-cards-container');
  const countEl = document.getElementById('results-count-number');
  const emptyState = document.getElementById('catalog-empty-state');
  const resetBtn = document.getElementById('btn-reset-filters');
  const activeTagsWrap = document.getElementById('catalog-active-filter-tags');
  
  if (!container) return;

  const isRTL = currentLang === 'ar';
  
  // Update counter
  if (countEl) countEl.textContent = filteredItems.length;

  // Toggle empty state
  if (filteredItems.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    if (emptyState) emptyState.style.display = 'none';

    container.innerHTML = filteredItems.map(item => {
      const isFav = userFavorites && userFavorites.has(item.id);
      const displayTitle = (isRTL && item.titleAr) ? item.titleAr : item.title;
      
      return `
        <article class="catalog-card" data-id="${item.id}" data-category="${item.category}" data-region="${item.region}">
          <div class="catalog-card-media">
            <img src="${item.img}" alt="${displayTitle}" loading="lazy">
            <div class="card-top-badges">
              <span class="card-style-tag">${item.style}</span>
              <button type="button" class="card-heart-btn ${isFav ? 'active' : ''}" data-id="${item.id}" aria-label="Add to wishlist">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? '#E53935' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <button type="button" class="card-inspect-trigger" data-id="${item.id}" aria-label="Quick inspect">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>
          </div>

          <div class="catalog-card-body">
            <div class="card-region-atelier">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>${item.atelier}</span>
            </div>
            <h3 class="card-caftan-name">${displayTitle}</h3>
            
            <div class="card-specs-brief">
              <div class="card-spec-line">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                <span>${item.fabric}</span>
              </div>
              <div class="card-spec-line">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span>${item.embroidery} • ${item.hours}h Handcraft</span>
              </div>
            </div>

            <div class="card-pricing-block">
              <div>
                <span class="card-price-primary">${item.price}</span>
                <span class="card-price-secondary">(${item.priceMad})</span>
              </div>
            </div>

            <div class="card-actions-grid">
              <button type="button" class="btn-card-quickview" data-id="${item.id}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <span>${isRTL ? 'معاينة' : 'Quick View'}</span>
              </button>
              <a href="index.html#ai-designer?color=${item.colorKey}&title=${encodeURIComponent(item.title)}" class="btn-card-customize" data-id="${item.id}">
                <span>${isRTL ? 'تخصيص' : 'Customize'}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to cards
    container.querySelectorAll('.btn-card-quickview, .card-inspect-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id, 10);
        const item = caftanCatalog.find(c => c.id === id) || caftanCatalog[0];
        openCaftanStoryModal(item);
      });
    });

    container.querySelectorAll('.card-heart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id, 10);
        if (userFavorites.has(id)) {
          userFavorites.delete(id);
          btn.classList.remove('active');
          btn.querySelector('svg').setAttribute('fill', 'none');
        } else {
          userFavorites.add(id);
          btn.classList.add('active');
          btn.querySelector('svg').setAttribute('fill', '#E53935');
        }
      });
    });
  }

  // Active filters chips
  const isFiltering = catalogFilterState.search || 
                      catalogFilterState.silhouette !== 'all' || 
                      catalogFilterState.region !== 'all' || 
                      catalogFilterState.fabric !== 'all' || 
                      catalogFilterState.price !== 'all';

  if (resetBtn) resetBtn.style.display = isFiltering ? 'inline-flex' : 'none';

  if (activeTagsWrap) {
    if (isFiltering) {
      activeTagsWrap.style.display = 'flex';
      let chipsHtml = '';
      if (catalogFilterState.search) {
        chipsHtml += `<span class="active-tag-chip">Search: "${catalogFilterState.search}" <button type="button" data-clear="search">&times;</button></span>`;
      }
      if (catalogFilterState.silhouette !== 'all') {
        chipsHtml += `<span class="active-tag-chip">Silhouette: ${catalogFilterState.silhouette} <button type="button" data-clear="silhouette">&times;</button></span>`;
      }
      if (catalogFilterState.region !== 'all') {
        chipsHtml += `<span class="active-tag-chip">Region: ${catalogFilterState.region} <button type="button" data-clear="region">&times;</button></span>`;
      }
      if (catalogFilterState.fabric !== 'all') {
        chipsHtml += `<span class="active-tag-chip">Fabric: ${catalogFilterState.fabric} <button type="button" data-clear="fabric">&times;</button></span>`;
      }
      if (catalogFilterState.price !== 'all') {
        chipsHtml += `<span class="active-tag-chip">Price: ${catalogFilterState.price} <button type="button" data-clear="price">&times;</button></span>`;
      }
      activeTagsWrap.innerHTML = chipsHtml;

      activeTagsWrap.querySelectorAll('button[data-clear]').forEach(chipBtn => {
        chipBtn.addEventListener('click', () => {
          const key = chipBtn.dataset.clear;
          if (key === 'search') {
            catalogFilterState.search = '';
            const input = document.getElementById('catalog-search-input');
            if (input) input.value = '';
            const clearBtn = document.getElementById('catalog-search-clear');
            if (clearBtn) clearBtn.style.display = 'none';
          } else if (key === 'silhouette') {
            catalogFilterState.silhouette = 'all';
            document.querySelectorAll('.filter-pill').forEach(p => {
              p.classList.toggle('active', p.dataset.filter === 'all');
            });
          } else if (key === 'region') {
            catalogFilterState.region = 'all';
            const sel = document.getElementById('filter-region');
            if (sel) sel.value = 'all';
          } else if (key === 'fabric') {
            catalogFilterState.fabric = 'all';
            const sel = document.getElementById('filter-fabric');
            if (sel) sel.value = 'all';
          } else if (key === 'price') {
            catalogFilterState.price = 'all';
            const sel = document.getElementById('filter-price');
            if (sel) sel.value = 'all';
          }
          applyCatalogFilters();
        });
      });
    } else {
      activeTagsWrap.style.display = 'none';
      activeTagsWrap.innerHTML = '';
    }
  }
}

function applyCatalogFilters() {
  let results = [...caftanCatalog];

  // 1. Text Search
  if (catalogFilterState.search.trim()) {
    const q = catalogFilterState.search.toLowerCase().trim();
    results = results.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(q) || (item.titleAr && item.titleAr.includes(q));
      const matchAtelier = item.atelier.toLowerCase().includes(q);
      const matchRegion = item.region.toLowerCase().includes(q);
      const matchFabric = item.fabric.toLowerCase().includes(q);
      const matchEmb = item.embroidery.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchStyle = item.style.toLowerCase().includes(q);
      return matchTitle || matchAtelier || matchRegion || matchFabric || matchEmb || matchDesc || matchStyle;
    });
  }

  // 2. Silhouette Pill
  if (catalogFilterState.silhouette !== 'all') {
    results = results.filter(item => {
      return item.category && item.category.includes(catalogFilterState.silhouette);
    });
  }

  // 3. Region Filter
  if (catalogFilterState.region !== 'all') {
    results = results.filter(item => item.region === catalogFilterState.region);
  }

  // 4. Fabric Filter
  if (catalogFilterState.fabric !== 'all') {
    results = results.filter(item => item.fabricKey === catalogFilterState.fabric);
  }

  // 5. Price Filter
  if (catalogFilterState.price !== 'all') {
    if (catalogFilterState.price === 'under-1100') {
      results = results.filter(item => item.priceNum < 1100);
    } else if (catalogFilterState.price === '1100-1400') {
      results = results.filter(item => item.priceNum >= 1100 && item.priceNum <= 1400);
    } else if (catalogFilterState.price === 'above-1400') {
      results = results.filter(item => item.priceNum > 1400);
    }
  }

  // 6. Sorting
  if (catalogFilterState.sort === 'price-asc') {
    results.sort((a, b) => a.priceNum - b.priceNum);
  } else if (catalogFilterState.sort === 'price-desc') {
    results.sort((a, b) => b.priceNum - a.priceNum);
  } else if (catalogFilterState.sort === 'lead-time') {
    results.sort((a, b) => a.leadDays - b.leadDays);
  }

  renderCatalogCards(results);
}

function updateDedicatedCatalogLang(lang) {
  applyCatalogFilters();
}

function initDedicatedCatalog() {
  const container = document.getElementById('catalog-cards-container');
  if (!container) return; // Not on collection.html

  // Initial render
  applyCatalogFilters();

  // Search input listener
  const searchInput = document.getElementById('catalog-search-input');
  const searchClear = document.getElementById('catalog-search-clear');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      catalogFilterState.search = e.target.value;
      if (searchClear) {
        searchClear.style.display = catalogFilterState.search ? 'flex' : 'none';
      }
      applyCatalogFilters();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      catalogFilterState.search = '';
      searchClear.style.display = 'none';
      applyCatalogFilters();
    });
  }

  // Silhouette pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      catalogFilterState.silhouette = pill.dataset.filter || 'all';
      applyCatalogFilters();
    });
  });

  // Dropdowns
  const regionSelect = document.getElementById('filter-region');
  if (regionSelect) {
    regionSelect.addEventListener('change', (e) => {
      catalogFilterState.region = e.target.value;
      applyCatalogFilters();
    });
  }

  const fabricSelect = document.getElementById('filter-fabric');
  if (fabricSelect) {
    fabricSelect.addEventListener('change', (e) => {
      catalogFilterState.fabric = e.target.value;
      applyCatalogFilters();
    });
  }

  const priceSelect = document.getElementById('filter-price');
  if (priceSelect) {
    priceSelect.addEventListener('change', (e) => {
      catalogFilterState.price = e.target.value;
      applyCatalogFilters();
    });
  }

  const sortSelect = document.getElementById('filter-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      catalogFilterState.sort = e.target.value;
      applyCatalogFilters();
    });
  }

  // Reset button
  const resetHandler = () => {
    catalogFilterState = {
      search: '',
      silhouette: 'all',
      region: 'all',
      fabric: 'all',
      price: 'all',
      sort: 'featured'
    };
    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.style.display = 'none';
    document.querySelectorAll('.filter-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.filter === 'all');
    });
    if (regionSelect) regionSelect.value = 'all';
    if (fabricSelect) fabricSelect.value = 'all';
    if (priceSelect) priceSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'featured';
    applyCatalogFilters();
  };

  document.getElementById('btn-reset-filters')?.addEventListener('click', resetHandler);
  document.getElementById('btn-empty-reset')?.addEventListener('click', resetHandler);
}

// ==========================================================================
// Dedicated Heritage Museum Engine (museum.html)
// ==========================================================================
const dynastyExhibits = {
  almoravid: {
    era: '1062 – 1147 CE',
    name: 'The Almoravid Empire (المرابطون)',
    nameAr: 'الدولة المرابطية (المرابطون)',
    title: 'The Trans-Saharan Silk Routes & The First Royal Tunics',
    titleAr: 'طرق حرير الصحراء الكبرى وبدايات القفطان الملكي',
    narrative: 'Under the Almoravids who founded Marrakech, trade caravans linked the Mediterranean to West Africa. Fine raw silks and pure gold bullion entered Morocco, giving birth to the first structured court tunics adorned with Skalli metallic threads.',
    narrativeAr: 'في عهد المرابطين مؤسسي مراكش، ربطت قوافل التجارة حوض البحر الأبيض المتوسط بإفريقيا. دخل الحرير الخام والذهب الخالص للمغرب، مما مهد لظهور أولى الأثواب السلطانية ذات الخيوط المعدنية المذهبة.',
    breakdown: [
      { icon: '✦', text: 'Trans-Saharan trade opened direct gold skalli importation from ancient Sudan & Ghana.' },
      { icon: '✦', text: 'Foundation of early craft funduqs in Marrakech, Aghmat, and Fez.' },
      { icon: '✦', text: 'Birth of wool Mlifa tunics trimmed with woven camel hair and metallic braids.' }
    ],
    quote: '“The Almoravid court welcomed envoys in tunics spun from gold wire and Andalusian silk, establishing the sovereign majesty of Moroccan royal dress.”',
    img: 'caftan pic for measum/merinid dynasty.jpg',
    artifactName: 'Saharan Imperial Wool & Skalli Tunic (Circa 1120)',
    artifactLoc: 'Archival Medina Collection • Marrakech'
  },
  merinid: {
    era: '1248 – 1465 CE',
    name: 'The Merinid Dynasty (المرينيون)',
    nameAr: 'الدولة المرينية (المرينيون)',
    title: 'The Golden Age of Fez & Geometric Counted-Thread Tarz',
    titleAr: 'عصر فاس الذهبي وأنوال البروكار وطرز الغرزة',
    narrative: 'The Merinids transformed Fez into the intellectual and textile capital of the Islamic world. They codified the guild system, built the Medersas, and established the legendary drawlooms of the Medina, creating the reversible double-face Tarz Fassi embroidery.',
    narrativeAr: 'جعل المرينيون من فاس عاصمة الفكر والنسيج في العالم الإسلامي. قاموا بتقنين النقابات الحرفية وبناء المدارس العتيقة وتأسيس أنوال البروكار، وابتكار طرز فاس المتقون ذو الوجهين المتطابقين.',
    breakdown: [
      { icon: '✦', text: 'Mathematical harmony: Tarz Fassi mirrors the sacred geometry of Merinid Zellij tilework.' },
      { icon: '✦', text: 'Official royal charter of the Fez Khayyatin (Tailors) and Dabbaghin (Tanners) guilds.' },
      { icon: '✦', text: 'Invention of the spherical hand-knotted silk Aqad button system.' }
    ],
    quote: '“In Merinid Fez, over three thousand active looms hummed day and night inside the Funduqs, weaving brocades worthy of royal coronations.”',
    img: 'caftan pic for measum/almoravid dynasty.jpg',
    artifactName: 'Double-Face Tarz Fassi Archival Caftan (Circa 1380)',
    artifactLoc: 'Dar Batha Museum Archives • Fez'
  },
  saadian: {
    era: '1549 – 1659 CE',
    name: 'The Saadian Dynasty (السعديون)',
    nameAr: 'الدولة السعدية (السعديون)',
    title: 'The Golden Renaissance, 24k Majboud & The Two-Piece Takchita',
    titleAr: 'العصر الذهبي، طرز المجبود بالذهب وظهور التكشيطة',
    narrative: 'Ahmed al-Mansur Dahbi (The Golden King) enriched Morocco with gold and sugar trade wealth. Italian velvets, Lyon silks, and Ottoman diplomat robes sparked the birth of the two-piece Takchita (Tahtiya & Dfina) and the three-dimensional 24k gold Majboud embroidery.',
    narrativeAr: 'أغدق السلطان أحمد المنصور الذهبي على المغرب ثروات الذهب، فشهدت البلاد نهضة فاخرة. ولدت التكشيطة الملكية المكونة من قطعتين (التحتية والدفينة) وتطورت غرزة المجبود ثلاثية الأبعاد بالذهب الخالص.',
    breakdown: [
      { icon: '✦', text: 'Birth of the ceremonial Takchita: a sheer outer Dfina over an embroidered inner silk Tahtiya.' },
      { icon: '✦', text: 'Introduction of pure gold bullion Majboud embroidery guided by polished cow-horn Mizwed.' },
      { icon: '✦', text: 'Adoption of solid gold Mdamma belts encrusted with emeralds and rubies.' }
    ],
    quote: '“Ambassadors from Queen Elizabeth I of England were received in El Badi Palace before courtiers wearing caftans so heavily stitched in gold they stood upright on their own.”',
    img: 'caftan pic for measum/saadian dynasty.jpg',
    artifactName: 'Saadian Court Ceremonial Takchita (Circa 1595)',
    artifactLoc: 'El Badi Palace Archival Heritage • Marrakech'
  },
  alaouite: {
    era: '1666 – Present',
    name: 'The Alaouite Dynasty & Modern Era (العلويون)',
    nameAr: 'الدولة العلوية الشريفة والعصر المعاصر (العلويون)',
    title: 'Haute Couture Global Stage, UNESCO Preservation & AI Innovation',
    titleAr: 'الهوت كوتور العالمي، صون اليونسكو وابتكار الذكاء الاصطناعي',
    narrative: 'Across four centuries of royal patronage, Moroccan sultans and princesses elevated the caftan to an internationally revered icon of haute couture. Today, NASSIJ AI preserves this living art through ethical 90% artisan compensation and generative AI design.',
    narrativeAr: 'على مدى أربعة قرون من الرعاية الملكية السامية، ارتقى القفطان المغربي إلى منصات الهوت كوتور العالمية كرمز خالد للأناقة. واليوم، تخلد نسيج هذه الصنعة بالجمع بين التجارة العادلة وأحدث تقنيات الذكاء الاصطناعي.',
    breakdown: [
      { icon: '✦', text: 'Global recognition on Paris, Milan, and Tangier Haute Couture runways.' },
      { icon: '✦', text: 'Royal Ministry of Craft accreditation and UNESCO intangible heritage inscription.' },
      { icon: '✦', text: 'NASSIJ AI provenance: Cryptographic verification guaranteeing 90% direct artisan compensation.' }
    ],
    quote: '“The caftan is the immortal soul of Morocco—reborn in every generation, eternal in its dignity.”',
    img: 'caftan pic/9a9b2606d5bb8b6d1ec844109ae26279.jpg',
    artifactName: 'Modern Royal Haute Couture Bridal Takchita (2026)',
    artifactLoc: 'NASSIJ Living Digital Museum Sanctuary'
  }
};

let activeDynastyKey = 'almoravid';

function renderDynastyCard(key = 'almoravid') {
  activeDynastyKey = key;
  const container = document.getElementById('dynasty-card-content');
  if (!container) return;

  const data = dynastyExhibits[key] || dynastyExhibits.almoravid;
  const isRTL = currentLang === 'ar';
  const name = isRTL ? data.nameAr : data.name;
  const title = isRTL ? data.titleAr : data.title;
  const narrative = isRTL ? data.narrativeAr : data.narrative;

  container.style.opacity = '0.3';
  container.style.transform = 'translateY(10px)';

  setTimeout(() => {
    container.innerHTML = `
      <div class="dynasty-grid-layout">
        <div class="dynasty-info-col">
          <span class="dynasty-header-badge">${data.era} • ${name}</span>
          <h3 class="dynasty-main-title">${title}</h3>
          <p class="dynasty-history-narrative">${narrative}</p>

          <div class="dynasty-craft-breakdown">
            ${data.breakdown.map(b => `
              <div class="craft-breakdown-row">
                <span class="icon">${b.icon}</span>
                <span>${b.text}</span>
              </div>
            `).join('')}
          </div>

          <div class="dynasty-quote-box">
            ${data.quote}
          </div>
        </div>

        <div class="dynasty-visual-col">
          <div class="dynasty-arch-frame">
            <img src="${data.img}" alt="${title}" loading="lazy">
            <div class="dynasty-artifact-caption">
              <div class="artifact-name">${data.artifactName}</div>
              <div class="artifact-location">${data.artifactLoc}</div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }, 120);
}

function updateDedicatedMuseumLang(lang) {
  renderDynastyCard(activeDynastyKey);
  const code = document.getElementById('passport-input-code')?.value || 'MAR-FEZ-2026-0001';
  renderVerifiedCertificate(code);
}

function renderVerifiedCertificate(passportCode) {
  const displayBox = document.getElementById('verified-certificate-display');
  if (!displayBox) return;

  const isRTL = currentLang === 'ar';
  
  // Find matching caftan from catalog if available
  const item = caftanCatalog.find(c => passportCode.includes(String(c.id).padStart(4, '0'))) || caftanCatalog[0];
  const displayTitle = (isRTL && item.titleAr) ? item.titleAr : item.title;

  displayBox.innerHTML = `
    <!-- Moroccan Watermark Star -->
    <svg class="cert-watermark" viewBox="0 0 100 100" fill="#D4AF37">
      <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35"/>
    </svg>

    <div class="cert-header-row">
      <div>
        <div class="cert-id-tag">${passportCode}</div>
        <h3 class="cert-caftan-title">${displayTitle}</h3>
        <div style="font-size: 0.88rem; color: var(--accent-gold-light); margin-top: 4px;">
          ${item.atelier} • ${item.region} Guild
        </div>
      </div>
      <div class="cert-status-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${isRTL ? 'توثيق معتمد على البلوكشين' : 'VERIFIED ON IMMUTABLE LEDGER'}</span>
      </div>
    </div>

    <div class="cert-body-grid">
      <div class="cert-qr-frame">
        <img src="qr-code.png" alt="Cryptographic Blockchain Verification QR Code" class="cert-qr-img">
        <span class="cert-qr-label">BLOCKCHAIN VERIFICATION ID</span>
      </div>

      <div class="cert-details-col">
        <div class="cert-tile">
          <div class="cert-tile-label">${isRTL ? 'المعلم الحرفي المعتمد' : 'Certified Master Artisan'}</div>
          <div class="cert-tile-val">Maâlem Omar El Fellah (Kasbah Guild)</div>
        </div>
        <div class="cert-tile">
          <div class="cert-tile-label">${isRTL ? 'ساعات التطريز والخياطة اليدوية' : 'Hand Needlework Hours'}</div>
          <div class="cert-tile-val">${item.hours} Hours Handcrafted</div>
        </div>
        <div class="cert-tile">
          <div class="cert-tile-label">${isRTL ? 'الخامات وسفيفة الصقلي' : 'Authentic Materials Provenance'}</div>
          <div class="cert-tile-val">${item.fabric}</div>
        </div>
        <div class="cert-tile">
          <div class="cert-tile-label">${isRTL ? 'ميثاق الأجر المباشر للحرفي' : 'Direct Artisan Payout Pledge'}</div>
          <div class="cert-tile-val" style="color: #00E676;">90% Guaranteed Direct to Artisan</div>
        </div>
      </div>
    </div>

    <div class="cert-footer-row">
      <div>
        <span>Cryptographic Hash: <code>0x8f2a...9c41</code></span> • 
        <span>Issued: Medina Archives Tangier & Fez 2026</span>
      </div>
      <div>
        <button type="button" class="btn-text-gold" onclick="window.print()" style="color: #D4AF37;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          <span>${isRTL ? 'طباعة شهادة الأصالة' : 'Print Official Certificate'}</span>
        </button>
      </div>
    </div>
  `;
}

// Web Audio API Synthetic Medina Soundscape Generator
let activeAudioCtx = null;
let soundTimer = null;
let currentPlayingSound = null;

function playSyntheticSoundscape(soundType = 'loom', btnEl) {
  const isRTL = currentLang === 'ar';

  // Toggle off if already playing
  if (currentPlayingSound === soundType && activeAudioCtx) {
    stopSoundscape();
    if (btnEl) {
      btnEl.classList.remove('playing');
      const label = btnEl.querySelector('span');
      if (label) label.textContent = soundType === 'loom' ? (isRTL ? 'الاستماع لإيقاع النول والورشة' : 'Listen to Loom & Atelier Rhythm') : (isRTL ? 'الاستماع لحفيف إبرة الصقلي' : 'Listen to Skalli Needle Whisper');
    }
    return;
  }

  stopSoundscape();

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    activeAudioCtx = new AudioContext();
    currentPlayingSound = soundType;

    if (btnEl) {
      btnEl.classList.add('playing');
      const label = btnEl.querySelector('span');
      if (label) label.textContent = isRTL ? 'جاري التشغيل • انقر للإيقاف' : 'Playing Soundscape • Click to Stop';
    }

    if (soundType === 'loom') {
      // Periodic rhythmic wooden shuttle clack
      let beat = 0;
      const playLoomBeat = () => {
        if (!activeAudioCtx || activeAudioCtx.state === 'closed') return;
        const now = activeAudioCtx.currentTime;

        // Wooden resonance
        const osc = activeAudioCtx.createOscillator();
        const gain = activeAudioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(beat % 2 === 0 ? 140 : 180, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.12);

        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

        osc.connect(gain);
        gain.connect(activeAudioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.14);

        beat++;
        soundTimer = setTimeout(playLoomBeat, 480);
      };
      playLoomBeat();

    } else {
      // Gentle Skalli needle whisper & bell chime
      let tick = 0;
      const playNeedleTick = () => {
        if (!activeAudioCtx || activeAudioCtx.state === 'closed') return;
        const now = activeAudioCtx.currentTime;

        // Harmonic metallic skalli chime
        const osc = activeAudioCtx.createOscillator();
        const gain = activeAudioCtx.createGain();
        const freqs = [880, 1174, 1318, 1760];
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freqs[tick % freqs.length], now);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

        osc.connect(gain);
        gain.connect(activeAudioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.38);

        tick++;
        soundTimer = setTimeout(playNeedleTick, 600);
      };
      playNeedleTick();
    }

  } catch (err) {
    console.warn('AudioContext not allowed or supported', err);
  }
}

function stopSoundscape() {
  if (soundTimer) clearTimeout(soundTimer);
  if (activeAudioCtx) {
    activeAudioCtx.close().catch(() => {});
    activeAudioCtx = null;
  }
  currentPlayingSound = null;
  document.querySelectorAll('.btn-play-soundscape').forEach(btn => {
    btn.classList.remove('playing');
  });
}

function initDedicatedMuseum() {
  const container = document.getElementById('dynasty-card-content');
  if (!container) return; // Not on museum.html

  // 1. Initial dynasty card render
  renderDynastyCard('almoravid');

  // Dynasty Tab Switchers
  document.querySelectorAll('.dynasty-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.dynasty-tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const key = btn.dataset.dynasty || 'almoravid';
      renderDynastyCard(key);
    });
  });

  // 2. Pillars Deep Dive Modals
  document.querySelectorAll('.btn-explore-pillar').forEach(btn => {
    btn.addEventListener('click', () => {
      const pillarKey = btn.dataset.pillar;
      const pillarMap = {
        majboud: 'embroidery',
        brocade: 'textiles',
        aqad: 'textiles',
        sfifa: 'embroidery'
      };
      openDigitalMuseumModal(pillarMap[pillarKey] || 'embroidery');
    });
  });

  // 3. Provenance Verification Simulator
  const verifyBtn = document.getElementById('btn-verify-passport');
  const inputCode = document.getElementById('passport-input-code');
  const scanBar = document.getElementById('provenance-scan-bar');
  const scanFill = document.getElementById('scan-progress-fill');
  const scanStatus = document.getElementById('scan-status-text');

  // Render initial certificate
  renderVerifiedCertificate('MAR-FEZ-2026-0001');

  const triggerVerification = (code) => {
    if (!scanBar || !scanFill || !scanStatus) return;
    const isRTL = currentLang === 'ar';
    const cleanCode = code.trim().toUpperCase() || 'MAR-FEZ-2026-0001';

    scanBar.style.display = 'block';
    scanFill.style.width = '15%';
    scanStatus.textContent = isRTL 
      ? 'جاري الاتصال بسجل التعاونيات المعتمد في فاس وطنجة...' 
      : 'Querying Tangier & Fez Guild Cryptographic Ledger...';

    setTimeout(() => {
      scanFill.style.width = '65%';
      scanStatus.textContent = isRTL 
        ? 'التحقق من بصمة المعلم الصانع ومصدر الحرير الطبيعي والصقلي...' 
        : 'Verifying Maâlem artisan fingerprint & silk material batch provenance...';
    }, 450);

    setTimeout(() => {
      scanFill.style.width = '100%';
      scanStatus.textContent = isRTL 
        ? 'تم التحقق بنجاح! شهادة أصالة مغربية موثقة ✦' 
        : 'Provenance Verified: Immutable Craft Record Validated ✦';

      setTimeout(() => {
        scanBar.style.display = 'none';
        renderVerifiedCertificate(cleanCode);
        const certCard = document.getElementById('verified-certificate-display');
        if (certCard) {
          certCard.style.boxShadow = '0 0 40px rgba(0, 230, 118, 0.45)';
          setTimeout(() => { certCard.style.boxShadow = ''; }, 1000);
        }
      }, 350);
    }, 1100);
  };

  verifyBtn?.addEventListener('click', () => {
    triggerVerification(inputCode ? inputCode.value : 'MAR-FEZ-2026-0001');
  });

  // Preset buttons
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.dataset.code;
      if (inputCode && code) {
        inputCode.value = code;
        triggerVerification(code);
      }
    });
  });

  // 4. Medina Soundscape Buttons
  document.querySelectorAll('.btn-play-soundscape').forEach(btn => {
    btn.addEventListener('click', () => {
      const sound = btn.dataset.sound || 'loom';
      playSyntheticSoundscape(sound, btn);
    });
  });
}

// ==========================================================================
// Application Bootstrap & Lifecycle
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('nassij_lang') || 'en';
  setLanguage(savedLang);

  // Initialize Reelmark Hero Carousel (on index.html)
  const carouselViewport = document.getElementById('carousel-viewport');
  const carouselTrack = document.getElementById('carousel-track');
  if (carouselViewport && carouselTrack) {
    heroCarousel = new ReelmarkHeroCarousel(carouselViewport, carouselTrack);
  }

  // Initialize ScrollCraft Scroll & Interaction Engine
  if (window.ScrollCraft && typeof window.ScrollCraft.mount === 'function') {
    window.ScrollCraft.mount();
  }

  // Initialize AI Designer Engine (on index.html)
  initAIDesigner();

  // Initialize Collection & Artisans (on index.html)
  initCollectionAndArtisans();

  // Initialize Heritage Museum Modals (on index.html)
  initMuseum();

  // Initialize Dedicated Collection Catalog (on collection.html)
  initDedicatedCatalog();

  // Initialize Dedicated Heritage Museum (on museum.html)
  initDedicatedMuseum();

  // Initialize Sustainability Counters & Scroll Reveals
  initSustainabilityCounters();
  initScrollReveals();

  // Language toggle listener
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  // Sign In / Portal button listener
  const loginBtn = document.getElementById('btn-login-modal');
  if (loginBtn) {
    loginBtn.addEventListener('click', openLoginModal);
  }

  // Smooth scroll with offset for fixed header
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile nav if open
        const mainNav = document.getElementById('main-nav');
        if (mainNav && mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
        }
      }
    });
  });

  // Header scroll shadow
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // Auto-scroll to section if requested via URL param ?scroll=... or hash
  const urlParams = new URLSearchParams(window.location.search);
  const scrollTargetId = urlParams.get('scroll') || (window.location.hash ? window.location.hash.substring(1) : null);
  if (scrollTargetId) {
    const targetEl = document.getElementById(scrollTargetId);
    if (targetEl) {
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'auto' });
      }, 150);
    }
  }
});

