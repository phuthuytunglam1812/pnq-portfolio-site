// Edit the name and factual portfolio descriptions here.
// Video titles and thumbnail references live in youtube-metadata.json.
export const content = {
  displayName: "Phan Nhật Quân",
  stageNames: ["pnq", "Wyrl"],
  featuredVideoId: "SZxPmjJx01Q",
  performanceIds: ["SZxPmjJx01Q", "H8SzcXa_7Yg", "-XoFfc5Tkng"],
  productionIds: ["usjntsqFMRM", "6n5OMCK10tk", "Yj-dBRA2dpY", "U29XRmMuDs0", "efRgiIHKHHk"],
  personalVideoIds: ["vHJoE2WCGts", "w_zgkRg-Tkk"],
  personalProfiles: [
    { label: "My YouTube", url: "https://www.youtube.com/@powpowpownq" },
    { label: "My Instagram", url: "https://www.instagram.com/nauq_nnnn/" }
  ],
  personalInstagramSongs: [
    { title: "Cái tôi (Ego)", url: "https://www.instagram.com/reel/DNQ3xVZSfDF/", image: "assets/instagram-DNQ3xVZSfDF.jpg" },
    { title: "mình anh", url: "https://www.instagram.com/p/DbjSlrnTilL/", image: "assets/instagram-DbjSlrnTilL.jpg" },
    { title: "freestyle2am", url: "https://www.instagram.com/reel/DWuMKQ7ksud/", image: "assets/instagram-DWuMKQ7ksud.jpg" },
    { title: "wrong choices", url: "https://www.instagram.com/reel/DXZ4khJEuYK/", image: "assets/instagram-DXZ4khJEuYK.jpg" }
  ],
  songwritingDescription: "I write either all the lyrics or my own part of a song, usually over beats and backing tracks found online.",
  videoLabels: {
    SZxPmjJx01Q: { title: "Đám cưới miền tây", artists: "Tyreck, pnq, mhp, khxngLX" },
    H8SzcXa_7Yg: { title: "Mấy anh trai hiphop", artists: "nlb, pnq, vkiet, Kenyseveral" },
    "-XoFfc5Tkng": { title: "Ước mơ và áp lực", artists: "Tyreck, pnq, uynE" },
    usjntsqFMRM: { title: "BÁ KHIẾU", artists: "pnq, Tyreck, uynE, Kenyseveral" },
    "6n5OMCK10tk": { title: "NƠI NÀY CÓ ANH là nghệ sĩ", artists: "VƯƠNG VŨ CA & THÔN THIÊN THẠCH LỰU · prod. BÁCH HỢP THỜI KHÔNG" },
    "Yj-dBRA2dpY": { title: "Thứ anh cần", artists: "Wyrl, tiooo" },
    U29XRmMuDs0: { title: "Sẽ ổn thôi mà", artists: "Wyrl" },
    efRgiIHKHHk: { title: "donglaive", artists: "pnq ft. h0mer" }
  },
  profiles: [
    { label: "Instagram", url: "https://www.instagram.com/the_.1lly/" },
    { label: "Spotify", url: "https://open.spotify.com/artist/0euy7K3hdasz4xhL0Icowb" },
    { label: "YouTube", url: "https://www.youtube.com/@TheILLYminarics" }
  ],
  club: {
    title: "The ILLY",
    description: "The ILLY is the rap club at VNU-HCM High School for the Gifted (PTNK) in Ho Chi Minh City, Vietnam. I write and perform rap with the club, and help members record and prepare music for release.",
    roles: [
      { period: "Grade 10", title: "Member" },
      { period: "Grade 11", title: "President" },
      { period: "Grade 12", title: "Advisor" }
    ],
    contributions: [
      { title: "Writing & performing", text: "I write original rap verses and perform them with the club. Recently, I’ve also been exploring writing hooks." },
      { title: "Recording & vocal tuning", text: "As club president, I was the main recording engineer and vocal tuner. I helped teammates prepare their recordings, checked release quality, and coordinated song deadlines." },
      { title: "Show concept & setlist", text: "As deputy head of the organizing committee, I developed the show’s concept and setlist. I also organized rehearsals and stage props, and coordinated facilities, promotion, and invited performers." }
    ]
  },
  show: {
    title: "Dấu Chân",
    period: "July 2026",
    role: "Deputy head of the organizing committee",
    description: "A benefit show created with The ILLY, bringing original music and live performance to the school community.",
    contribution: "Developed the show’s concept and setlist; organized rehearsals and stage props; coordinated facilities, promotion, and invited performers.",
    facts: [
      { value: "220+", label: "People in the audience" },
      { value: "14/29", label: "Songs I contributed to" },
      { value: "18", suffix: "million VND", label: "Show profits donated" }
    ],
    donation: "The team donated all show profits to a home for visually impaired children in Ho Chi Minh City."
  },
  projects: [
    {
      title: "QuantDash", role: "Solo developer", period: "Aug–Sep 2026",
      description: "A stock-research platform for comparing companies and practicing investment decisions with virtual portfolios.",
      features: ["Company screening & transparent scores", "Comparisons with SPY", "Five-day virtual investment simulation"],
      contribution: "Built a React/Vite interface and Python/pandas analytics, including transparent scoring, comparisons with SPY, financial lessons, and a five-day investment simulation.",
      technologies: ["React", "Python", "pandas", "SEC EDGAR"],
      repositoryUrl: "https://github.com/phuthuytunglam1812/QuantDash",
      image: "assets/quantdash.jpg",
      imageAlt: "Redesigned QuantDash stock screener with a light theme, guided navigation, and screening summaries",
      liveUrl: "https://quantdash-iawc.onrender.com/",
      walkthroughUrl: null
    },
    {
      title: "Predict-SP500", role: "Collaborative developer", period: "May–Jul 2026",
      description: "A prototype exploring CPI announcements and S&P 500 movements through machine learning.",
      features: ["Historical market data", "Model outputs & interactive charts", "Explanations alongside the results"],
      contribution: "Developed with a friend using Python and Streamlit. The project combines historical market data, model outputs, interactive charts, and explanatory text.",
      technologies: ["Python", "Streamlit", "XGBoost", "Plotly"],
      repositoryUrl: "https://github.com/phuthuytunglam1812/Predict-SP500",
      image: "assets/predict-sp500.jpg",
      imageAlt: "Predict-SP500 dashboard showing the CPI surprise gauge and historical comparison chart",
      liveUrl: "https://predict-sp500.onrender.com/",
      walkthroughUrl: null
    },
    {
      title: "Sign Language Translation Project",
      role: "Collaborative developer",
      description: "A research prototype for recognizing Vietnamese Sign Language letters and supported phrases through deep learning and computer vision.",
      features: ["Image and video uploads", "Live webcam recognition", "Text and speech output"],
      technologies: ["Python", "FastAPI", "PyTorch", "YOLO", "MediaPipe"],
      image: "assets/sign-language-translation.jpg",
      imageAlt: "VSL Studio interface introducing Vietnamese Sign Language recognition with file upload and live webcam options",
      repositoryUrl: "https://github.com/MortyPham/Vietnamese-Sign-Language-Recognition-System-Using-Deep-Learning-and-Computer-Vision",
      liveUrl: null
    }
  ]
};
