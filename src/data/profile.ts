export const contact = {
  name: "Amjad Ali",
  phone: "+91 7260004480",
  email: "mrxamjad@gmail.com",
  links: {
    github: "https://github.com/mrxdevs",
    linkedin: "https://www.linkedin.com/in/mrxamjad",
    instagram: "https://instagram.com/mrxamjad",
    x: "https://x.com/MrxAmjad",
    medium: "https://medium.com/@mrxamjad",
    code360: "https://www.codingninjas.com/codestudio/profile/mrxamjad",
    tufplus: "#",
  },
};

export const experience = [
  {
    company: "RAPTEE ENERGY PVT LTD",
    role: "Software Developer",
    location: "Chennai",
    period: "Dec 2023 – Present",
    type: "Full-Time",
    bullets: [
      "Developed cross-platform apps using Flutter, Kotlin, and Swift with 98% code reuse.",
      "Integrated BLE and Google Maps for diagnostics and tracking; built WearOS/watchOS companions.",
      "Automated deployments with GitHub Actions CI/CD, reducing time by 60%.",
    ],
  },
  {
    company: "DIGIWELLIE TECHNOLOGY",
    role: "Founder & Mentor",
    location: "Chennai",
    period: "May 2023 – Present",
    type: "Hybrid",
    bullets: [
      "Lead the team of 20+ developers to deliver 50+ projects in diverse domains.",
      "Spearheaded end-to-end development of high-performance mobile applications using Flutter, Firebase, and MongoDB, attracting over 10,000 users. Led agile development processes, ensuring 95% test coverage and continuous integration pipelines for robust product delivery.",
    ],
  },

  {
    company: "REGAMI SOLUTIONS",
    role: "Mobile App Developer (Intern)",
    location: "Chennai",
    period: "Jan 2023 – Apr 2023",
    type: "Internship",
    bullets: [
      "Built IoT apps with BLE, WebRTC, and WebSocket in Kotlin/Swift for real-time monitoring.",
      "Designed MD3 UIs with real-time data sync via Firebase.",
    ],
  },
];

export const projects = [
  {
    title: "Raptee App",
    summary: "Mobile solution for premium EVs with real-time tracking.",
    points: [
      "Flutter, MQTT, Firebase for background operations.",
      "99.9% uptime and 30% reduced battery consumption.",
      "Raptee Map, IoT, Push Notifications, in-app chat.",
    ],
    links: { playstore: "https://play.google.com/store/apps/details?id=com.raptee.app&hl=en_IN", appstore: "https://apps.apple.com/in/app/raptee/id6657984133", caseStudy: "https://rapteehv.com" } as Record<string, string>,
    image: "/raptee-profile.jpg",
    featured: true,
  },
  {
    title: "Ntelcare Family App",
    summary: "Remote health monitoring with BLE and real-time alerts.",
    points: [
      "Integrated BLE sensors and REST APIs for multi-sensor tracking.",
      "Sub-second alert latency via WebSocket notifications.",
      "Instant alerts via Firebase push notifications.",
    ],
    links: { playstore: "https://play.google.com/store/apps/details?id=com.ntelcare.family&hl=en_IN", appstore: "https://apps.apple.com/in/app/ntelcare-family/id1643125625", caseStudy: "#" } as Record<string, string>,
    image: "/ntelcare-profile.jpg",
    featured: true,
  },
  {
    title: "Digiwellie",
    summary: "Education management platform with a mobile-first approach.",
    points: [
      "Backend with Firebase and MongoDB, REST integrations.",
      "Adaptive UIs optimized for Android and iOS.",
      "10K+ active users, 4.6 Play Store rating.",
    ],
    links: { site: "https://www.digiwellie.com", caseStudy: "https://www.digiwellie.com" } as Record<string, string>,
    image: "/digiwellie-profile.png",
    featured: true,
  },
  {
    title: "Baatu: Speak with Confidence",
    summary: "Secure real-time communication over voice and chat.",
    points: [
      "Concurrent users handled via Socket-based architecture.",
      "Stripe integration for PCI-compliant transactions.",
    ],
    links: { site: "https://play.google.com/store/apps/details?id=com.digiwellie.baatu&hl=en_IN", playstore: "https://play.google.com/store/apps/details?id=com.digiwellie.baatu&hl=en_IN", caseStudy: "#" } as Record<string, string>,
    image: "/baatu-profile.jpg",
    featured: true,
  },
];

export const skills = {
  mobile: {
    expert: ["Flutter", "BLoC", "Kotlin", "Swift", "Jetpack Compose"],
    advanced: ["SwiftUI", "Material Design 3"],
    proficient: ["Android Native", "iOS Native", "React Native", "WatchOS"],
  },
  tools: [
    "Git",
    "GitHub Actions",
    "Xcode",
    "Android Studio",
    "VS Code",
    "Firebase",
    "AWS",
    "MongoDB",
    "Play Console",
    "App Store Connect",
  ],
  backend: ["Firebase", "AWS", "MongoDB", "REST APIs", "GraphQL", "WebSocket"],
};

export const education = {
  institute: "Aarupadai Veedu Institute of Technology",
  degree: "BE - Computer Science and Engineering",
  period: "2020 – 2024",
  cgpa: "8.9",
  coursework: ["Mobile Computing", "Cloud Computing"],
};

export const certifications = [
  "Flutter Advanced Development - Infosys | Udemy",
  "Android Certification - Infosys | Google",
  "iOS Development - Udemy | Apple Developer Academy",
  "Java Certification - Infosys | IIT Bombay",
];

export const achievements = [
  "Solved 200+ coding problems across Leetcode, GFG, CodingStudio.",
  "Led team at Hackathon CREA-2023; secured 2nd place among 1k+ students.",
];

export const languages = ["English", "Hindi"];

