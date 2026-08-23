export interface DIKStage {
  id: string
  number: string
  title: string
  definition: string
  example: string[] | string
  label: string
  buttonLabel?: string
  revealText?: string
}

export interface DIKExample {
  id: string
  title: string
  data: string[] | string
  information: string
  knowledge: string
}

export interface DIKMiniGameQuestion {
  id: string
  text: string | string[]
  question: string
  options: { id: string, text: string }[]
  correct: string
}

export const dikLessonData = {
  header: {
    title: "من البيانات إلى المعلومات إلى المعرفة",
    subtitle: "إيه الفرق بينهم؟",
    intro: "البيانات هي حقائق خام، والمعلومات هي بيانات تم تنظيمها وتحليلها فأصبح لها معنى، أما المعرفة فهي فهم هذه المعلومات واستخدامها في اتخاذ قرار أو حل مشكلة."
  },
  flow: [
    {
      id: "data",
      number: "01",
      title: "البيانات",
      definition: "هي حقائق تمثل باستخدام الأرقام أو الأحرف أو الرموز.",
      example: ["70", "85", "60", "90", "75"],
      label: "دي مجرد أرقام... لسه محتاجين نفهم معناها.",
      buttonLabel: "اعرف أكتر",
      revealText: "البيانات وحدها لا تخبرنا بالنتيجة النهائية، لكنها تمثل المادة الخام التي يمكن تحليلها."
    },
    {
      id: "information",
      number: "02",
      title: "المعلومات",
      definition: "هي معنى أو قيمة للمتلقي وتستخدم لاتخاذ القرار.",
      example: "متوسط الدرجات = 76",
      label: "دلوقتي الأرقام بقى ليها معنى."
    },
    {
      id: "knowledge",
      number: "03",
      title: "المعرفة",
      definition: "هي المعلومات التي تم تحليلها وتنظيمها بشكل منهجي للمساعدة في حل المشكلات.",
      example: "الطالب يحتاج إلى تحسين مستواه في المادة التي حصل فيها على أقل درجة.",
      label: "هنا استخدمنا المعلومات لفهم الموقف واتخاذ قرار."
    }
  ],
  examplesSection: {
    title: "خلينا نشوفها في حياتنا اليومية",
    examples: [
      {
        id: "grades",
        title: "درجات الامتحان",
        data: ["70", "85", "60", "90", "75"],
        information: "متوسط الدرجات = 76",
        knowledge: "الطالب يحتاج إلى تحسين المادة التي حصل فيها على أقل درجة."
      },
      {
        id: "weather",
        title: "الطقس",
        data: ["32°C", "34°C", "35°C", "30°C"],
        information: "درجة الحرارة ارتفعت خلال الأيام الماضية.",
        knowledge: "الجو سيكون حارًا، لذلك من الأفضل ارتداء ملابس خفيفة وشرب مياه كافية."
      },
      {
        id: "football",
        title: "كرة القدم",
        data: ["2 - 1", "1 - 0", "3 - 2", "0 - 0"],
        information: "الفريق فاز في 3 مباريات وتعادل في مباراة.",
        knowledge: "الفريق مستواه الهجومي جيد، لكنه يحتاج إلى تحسين الدفاع."
      },
      {
        id: "social_media",
        title: "Instagram",
        data: ["Video 1 → 1,000 views", "Video 2 → 5,000 views", "Video 3 → 800 views", "Video 4 → 8,000 views"],
        information: "الفيديوهات التي تحتوي على أمثلة عملية تحصل على مشاهدات أعلى.",
        knowledge: "سنركز على تقديم المزيد من الفيديوهات العملية."
      },
      {
        id: "restaurant",
        title: "المطعم",
        data: ["Pizza → 120 orders", "Burger → 80 orders", "Pasta → 40 orders", "Chicken → 150 orders"],
        information: "Chicken هي الوجبة الأكثر مبيعًا.",
        knowledge: "المطعم يمكنه زيادة كمية الدجاج وعمل عروض عليه."
      },
      {
        id: "maps",
        title: "Google Maps",
        data: ["Car locations", "Traffic speed", "Road conditions", "Accidents", "Distances"],
        information: "هذا الطريق مزدحم جدًا.",
        knowledge: "استخدم الطريق البديل لأنه أسرع."
      },
      {
        id: "shopping",
        title: "التسوق أونلاين",
        data: ["User viewed Laptop A", "User viewed Laptop B", "User searched for RAM", "User added Laptop A to cart"],
        information: "المستخدم مهتم باللابتوبات وقطع الكمبيوتر.",
        knowledge: "المتجر يمكنه اقتراح لابتوبات وRAM مناسبة للمستخدم."
      },
      {
        id: "school",
        title: "المدرسة",
        data: ["Ahmed → 20 days", "Mohamed → 18 days", "Ali → 10 days"],
        information: "علي حضوره أقل من باقي الطلاب.",
        knowledge: "المدرس يحتاج إلى متابعة علي ومعرفة سبب الغياب."
      }
    ]
  },
  takeaway: {
    dataText: "البيانات بتقولك إيه اللي حصل.",
    infoText: "المعلومات بتقولك إيه معنى اللي حصل.",
    knowledgeText: "المعرفة بتساعدك تعرف هتعمل إيه بناءً على اللي فهمته.",
    keywords: [
      { id: "data", en: "DATA", ar: "البيانات" },
      { id: "meaning", en: "MEANING", ar: "المعنى" },
      { id: "decision", en: "DECISION", ar: "القرار" }
    ]
  },
  miniGame: {
    title: "اختبر نفسك",
    completionMessage: "ممتاز! 👏\nدلوقتي بقيت تفرق بينهم.",
    questions: [
      {
        id: "q1",
        text: "80 - 90 - 75 - 85",
        question: "دي إيه؟",
        options: [
          { id: "data", text: "بيانات" },
          { id: "info", text: "معلومات" },
          { id: "knowledge", text: "معرفة" }
        ],
        correct: "data"
      },
      {
        id: "q2",
        text: "متوسط الدرجات = 82.5",
        question: "دي إيه؟",
        options: [
          { id: "data", text: "بيانات" },
          { id: "info", text: "معلومات" },
          { id: "knowledge", text: "معرفة" }
        ],
        correct: "info"
      },
      {
        id: "q3",
        text: "الطالب يحتاج إلى مراجعة المادة التي حصل فيها على أقل درجة.",
        question: "دي إيه؟",
        options: [
          { id: "data", text: "بيانات" },
          { id: "info", text: "معلومات" },
          { id: "knowledge", text: "معرفة" }
        ],
        correct: "knowledge"
      }
    ]
  }
}
