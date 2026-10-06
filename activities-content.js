// Conference photographs use local assets in YASMUN, NKOMUN, SIMUN order.
// Competition certificates are rendered locally from the original Drive PDFs.
export const activities = {
  mun: {
    summary: "Five conferences across economics, disarmament, nuclear energy, and historical diplomacy.",
    photos: [
      {
        image: "assets/yasmun-2026.jpg",
        alt: "YASMUN 2026 conference photograph; pnq is wearing the white hoodie on the right",
        marker: { labelX: 64, labelY: 20, path: "M 67 21.5 C 69.5 21 71 24 72.5 27 M 70 26.4 L 72.5 27 L 72.1 23.5" },
        conference: "YASMUN", year: "2026",
        representation: "Wuya Shi · The Palace",
        recognition: "Best Delegate"
      },
      {
        image: "assets/nkomun-2025.jpg",
        alt: "NKOMUN 2025 conference photograph; pnq is in the back row wearing a pink shirt",
        marker: { labelX: 54, labelY: 16, path: "M 56.5 18 C 58.5 17.8 60 19.6 60.8 21.4 M 58.5 20.6 L 60.8 21.4 L 60.7 18.4" },
        conference: "NKOMUN", year: "2025",
        representation: "Ukraine · IAEA",
        recognition: "Honorable Mention"
      },
      {
        image: "assets/simun-2025.jpg",
        alt: "SIMUN 2025 conference photograph; pnq is on the far left wearing a white shirt and holding a water bottle",
        marker: { labelX: 9.5, labelY: 7.5, path: "M 12 9 C 14 8.8 16 10.7 17.5 13 M 15 12.4 L 17.5 13 L 17.1 9.7" },
        conference: "SIMUN", year: "2025",
        representation: "Serbia · UNODA",
        recognition: "Best Position Paper"
      }
    ],
    otherConferences: "Also: Rwanda in ECOFIN at SIMUN 2024, and Maximilian Graf von Montgelas of Bavaria in the Congress of Vienna at SVMUN 2025."
  },
  report: {
    competition: "HiMCM", role: "Four-student team", year: "2025",
    title: "Modeling the environmental impact of sporting events",
    description: "Our team modeled the environmental impact of a major sporting event, using Super Bowl LIX as the baseline.",
    contributions: ["Developed the water-waste formula", "Supported electricity analysis", "Led LaTeX editing of the report"],
    result: "Successful Participant",
    image: "assets/himcm-2025-certificate.jpg",
    imageAlt: "HiMCM 2025 certificate naming Phan Nhat Quan and his team as Successful Participants",
    certificateUrl: "https://drive.google.com/file/d/1kcWolGkZTKpy5jZuQkQKJStSPjMAZnNv/view"
  },
  computerScienceCompetition: {
    title: "International Computer Science Competition",
    competition: "ICSC", year: "2025", role: "Individual participant · Final round",
    description: "An international competition testing computer science and algorithmic knowledge.",
    result: "Bronze Honour · Top 8% worldwide",
    image: "assets/icsc-2025-certificate.jpg",
    imageAlt: "ICSC 2025 Bronze Honour certificate awarded to Phan Nhat Quan, ranked in the top 8% of participants",
    certificateUrl: "https://drive.google.com/file/d/1KHgZC94LRa5ti6cQNDF6Zl6gTTLrCj5k/view"
  }
};
