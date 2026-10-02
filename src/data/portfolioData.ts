export interface Project {
  id: string;
  sceneNumber: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  tech: string[];
  description: string;
  details: string[];
  metrics?: { label: string; value: string }[];
  visualType: 'timeline' | 'analytics' | 'multimodal';
  githubUrl?: string;
  liveUrl?: string;
  apkUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  grade: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    connections: string[];
  }[];
}

export const PERSONAL_DATA = {
  name: "NAITIK DONDA",
  headline: "Turning data, code and ideas into interactive experiences.",
  title: "B.Tech Data Science · Developer · Builder",
  intro: "I build across multiple layers of technology — bridging machine learning models, local AI systems, intuitive mobile applications, full-stack web platforms, and interactive visual technologies. Focused on craftsmanship, performance, and real-world impact.",
  status: "B.Tech Data Science Student",
  batch: "2025 — 2028",
  contact: {
    email: "dondanaitik@gmail.com",
    phone: "+91 83293 55641",
    linkedin: "https://linkedin.com/in/naitik-donda",
    github: "https://github.com/naitikdonda",
    location: "Mumbai, India"
  },
  stats: [
    { label: "Hackathons", value: "8+" },
    { label: "Production Websites", value: "10+" },
    { label: "Bugs Documented in QA", value: "50+" },
    { label: "Years Development Exp.", value: "3.5+" }
  ],
  techStrip: [
    "Python", "C/C++", "Java", "Dart", "JavaScript", "TypeScript",
    "React", "Flutter", "Tailwind CSS", "Scikit-learn", "Pandas",
    "NLP", "OCR", "OpenCV", "Ollama", "Qwen", "Flask", "SQLite",
    "Supabase", "Firebase", "Unity", "Figma"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "backbone",
    sceneNumber: "04",
    title: "BACKBONE",
    subtitle: "Fragmented information. One continuous story.",
    category: "AI / Healthcare / Flutter",
    date: "Aug. 2026 — Sept. 2026",
    tech: ["Flutter", "React", "TypeScript", "Ollama", "OCR", "SQLite", "Qwen3 1.7B"],
    description: "Built a local-first platform that transforms fragmented medical records such as lab reports, prescriptions, and discharge summaries into a chronological patient timeline without sending data to external AI APIs.",
    details: [
      "Local Ollama LLM inference engine using Qwen3 1.7B",
      "PDF medical document parsing with OCR fallback",
      "Temporal entity extraction & chronological timeline assembly",
      "Flutter mobile app with encrypted SQLite local storage",
      "Engineered & validated over 40+ AI evaluation documents"
    ],
    visualType: "timeline",
    githubUrl: "https://github.com/naitikdonda/backbone",
    apkUrl: "https://drive.google.com/file/d/1HUdhVtMzXOidXVis7lWOlW6ZiLbRXFfX/view?usp=drive_link"
  },
  {
    id: "ipl-predictor",
    sceneNumber: "05",
    title: "IPL MATCH PREDICTOR",
    subtitle: "Can data predict what happens next?",
    category: "Machine Learning / Analytics",
    date: "Apr. 2026 — May 2026",
    tech: ["Python", "Scikit-learn", "Flask", "Pandas"],
    description: "Built a two-model ML system trained on 10+ seasons of ball-by-ball IPL data for dynamic pre-match outcome and live in-game win probability estimation.",
    details: [
      "Two-phase classification model (pre-match odds & live match dynamics)",
      "Processed 10+ seasons of high-granularity ball-by-ball cricket data",
      "Lightweight Flask REST API microservice delivering sub-500ms inference"
    ],
    metrics: [
      { label: "Live In-Game Accuracy", value: "75%" },
      { label: "Pre-Match Classifier Accuracy", value: "59%" },
      { label: "Response Time", value: "<500ms" }
    ],
    visualType: "analytics",
    githubUrl: "https://github.com/NaitikDonda/ipl-match-prediction-v2",
    liveUrl: "https://ipl-match-prediction-v2-1.onrender.com/"
  },
  {
    id: "cogniscan",
    sceneNumber: "06",
    title: "COGNISCAN",
    subtitle: "Multimodal Affective Signal Analysis",
    category: "Computer Vision / Audio Signal ML",
    date: "Feb. 2026 — Mar. 2026",
    tech: ["Python", "OpenCV", "Speech Recognition", "Machine Learning"],
    description: "Prototyped a multimodal system that combines real-time facial-expression analysis and speech features using OpenCV and speech-processing pipelines to explore emotion and cognitive-state signals.",
    details: [
      "Real-time webcam visual feature extraction with OpenCV",
      "Audio acoustic feature extraction & Speech Recognition integration",
      "Early-stage feature fusion pipeline feeding machine learning classifiers",
      "Explored emotional signals & cognitive state indicators"
    ],
    visualType: "multimodal",
    githubUrl: undefined,
    liveUrl: undefined
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "zeroone",
    company: "ZeroOne Tech Labs LLP",
    role: "Frontend Developer Intern",
    period: "Mar. 2026 — Jun. 2026",
    location: "Mumbai, India",
    highlights: [
      "Developed 10+ reusable React.js & Tailwind CSS components across 3 product modules",
      "Reduced UI build time by 35% and increased UI component modularity",
      "Boosted Lighthouse performance score from 68 to 91 through bundle & DOM optimization",
      "Integrated 8+ REST API endpoints and improved data-loading efficiency by 40%"
    ],
    metrics: [
      { label: "Reusable Components", value: "10+" },
      { label: "Product Modules", value: "3" },
      { label: "UI Build Time Saved", value: "35%" },
      { label: "Lighthouse Score", value: "68 → 91" },
      { label: "REST API Endpoints", value: "8+" },
      { label: "Data Load Improvement", value: "40%" }
    ]
  },
  {
    id: "freelance",
    company: "Freelance Full Stack Developer",
    role: "Full Stack Developer",
    period: "Jan. 2022 — Present",
    location: "Remote",
    highlights: [
      "Engineered 10+ production websites spanning E-commerce, Healthcare, Solar, and Jewellery sectors",
      "Crafted conversion-focused UX using React, Tailwind CSS, Shopify, Liquid, and WordPress",
      "Delivered full frontend development for Gulmohartree Healthcare Pvt. Ltd."
    ],
    metrics: [
      { label: "Production Websites", value: "10+" },
      { label: "Key Sectors", value: "E-Commerce / Healthcare / Solar" }
    ]
  },
  {
    id: "havoc",
    company: "Havoc Games",
    role: "QA Game Tester",
    period: "Dec. 2025 — Feb. 2026",
    location: "Remote",
    highlights: [
      "Identified, isolated, and documented 50+ reproducible game bugs with detailed reproduction steps",
      "Executed fix-validation cycles and pre-release quality assurance for production builds"
    ],
    metrics: [
      { label: "Bugs Documented", value: "50+" },
      { label: "QA Cycle", value: "Pre-Release Validation" }
    ]
  },
  {
    id: "ioft",
    company: "IOFT",
    role: "AR/VR Developer Intern",
    period: "May 2024 — Jun. 2024",
    location: "Mumbai, India",
    highlights: [
      "Created an interactive Unity-based VR car showroom with realistic material shaders & lighting",
      "Developed an AI-powered AR body-scanning application prototype",
      "Built an IoT smoke and fire alert monitoring system"
    ],
    metrics: [
      { label: "VR Prototype", value: "Unity Showroom" },
      { label: "AR Innovation", value: "AI Body Scanner" }
    ]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: "NMIMS Deemed-to-be-University — MPSTME",
    location: "Mumbai, India",
    degree: "B.Tech in Data Science",
    grade: "CGPA: 8.20 / 10",
    period: "2025 — 2028"
  },
  {
    institution: "Thakur Polytechnic",
    location: "Mumbai, India",
    degree: "Diploma in Computer Engineering",
    grade: "Percentage: 85.96%",
    period: "2022 — 2025"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "Python", connections: ["ipl-predictor", "cogniscan"] },
      { name: "C/C++", connections: ["ioft"] },
      { name: "Java", connections: ["zeroone"] },
      { name: "Dart", connections: ["backbone"] },
      { name: "JavaScript", connections: ["zeroone", "freelance"] },
      { name: "TypeScript", connections: ["backbone", "zeroone"] },
      { name: "HTML/CSS", connections: ["freelance", "zeroone"] }
    ]
  },
  {
    title: "AI & ML",
    skills: [
      { name: "Scikit-learn", connections: ["ipl-predictor", "cogniscan"] },
      { name: "Pandas", connections: ["ipl-predictor"] },
      { name: "NLP", connections: ["backbone"] },
      { name: "OCR", connections: ["backbone"] },
      { name: "OpenCV", connections: ["cogniscan"] },
      { name: "Ollama", connections: ["backbone"] },
      { name: "Qwen", connections: ["backbone"] }
    ]
  },
  {
    title: "FRONTEND & MOBILE",
    skills: [
      { name: "React", connections: ["zeroone", "backbone", "freelance"] },
      { name: "Flutter", connections: ["backbone"] },
      { name: "Tailwind", connections: ["zeroone", "freelance"] },
      { name: "Liquid", connections: ["freelance"] },
      { name: "WordPress", connections: ["freelance"] }
    ]
  },
  {
    title: "BACKEND & TOOLS",
    skills: [
      { name: "Flask", connections: ["ipl-predictor"] },
      { name: "REST APIs", connections: ["zeroone"] },
      { name: "SQLite", connections: ["backbone"] },
      { name: "Supabase", connections: ["backbone"] },
      { name: "Firebase", connections: ["backbone"] },
      { name: "Git", connections: ["zeroone", "freelance"] },
      { name: "Vercel", connections: ["freelance"] },
      { name: "Figma", connections: ["freelance"] },
      { name: "Unity", connections: ["ioft"] }
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "8 Hackathons",
    description: "Participated in 8 national level hackathons including Smart India Hackathon 2025 & 2026.",
    highlight: true,
    badge: "Smart India Hackathon 2025 & 2026"
  },
  {
    title: "Certificate of Merit",
    description: "Awarded Certificate of Merit at the NeoFuture Hackathon for outstanding solution architecture.",
    highlight: false,
    badge: "NeoFuture Hackathon"
  },
  {
    title: "Web Development",
    description: "Certified in advanced modern full-stack web architectures and responsive interfaces.",
    highlight: false,
    badge: "Certification"
  },
  {
    title: "Unity — IOFT",
    description: "Recognized certification in Unity 3D engine, spatial computing, and VR development.",
    highlight: false,
    badge: "IOFT"
  }
];
