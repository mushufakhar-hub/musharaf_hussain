// Static profile data used as a polished fallback when the backend is unavailable.
const profileData = {
  name: 'Musharaf Hussain',
  email: 'musharaf@email.com',
  phone: '+93 3183650531',
  phoneAlt: '+98 9924424986',
  whatsapp: 'https://wa.me/933183650531',
  github: 'https://github.com/mushufakhar-hub',
  linkedin: 'https://www.linkedin.com/in/musharaf-hussain-7a054124a',
  location: 'Skardu, Gilgit-Baltistan, Pakistan',
  profile:
    'BBA Scholar and Generative AI Developer with a strong focus on project management and full-stack web engineering. I combine business administration insight with hands-on technical expertise in AI pipelines, FastAPI, Next.js, and database design.',
  heroTitle: 'Full Stack Developer | Generative AI Engineer',
  heroSubtitle: 'Building scalable digital products with AI, automation, and modern web architecture.',
  resumeUrl: '/resume.pdf',
  profileImage: '/my.jpg',
  typingWords: ['Full Stack Developer', 'Generative AI Engineer', 'Automation Expert', 'Tour Guide'],
};

const educationData = [
  {
    id: 1,
    degree: 'BBA',
    institution: 'Shahid Beheshti University, Tehran, Iran',
    period: '2025 – Present',
    description: 'Studying business administration, strategic management, and tech product management with a focus on AI-enabled ventures.',
  },
  {
    id: 2,
    degree: 'Intermediate (ICS)',
    institution: 'Akhuwat College University Kasur, Lahore',
    period: '2021 – 2023',
    description: 'Built a foundation in computer science, mathematics, and analytical problem-solving.',
  },
];

const experienceData = [
  {
    id: 1,
    role: 'Full Stack Developer & Project Manager',
    company: 'Sckaram Tech',
    period: '2026 – Present',
    responsibilities: [
      'Drive digital solution delivery from concept to deployment.',
      'Oversee project planning, database architecture, and technical execution.',
      'Build performant web applications with Next.js, FastAPI, Python, and SQL.',
      'Integrate Generative AI features and automation workflows into real-world products.',
    ],
  },
];

const defaultSkills = [
  { id: 1, name: 'Generative AI', category: 'Technical', proficiency: 93 },
  { id: 2, name: 'FastAPI', category: 'Technical', proficiency: 90 },
  { id: 3, name: 'Python', category: 'Technical', proficiency: 92 },
  { id: 4, name: 'Project Management', category: 'Professional', proficiency: 88 },
  { id: 5, name: 'Automation Engineering', category: 'Professional', proficiency: 86 },
  { id: 6, name: 'Tour Guide & Tourism Management', category: 'Professional', proficiency: 84 },
];

const languagesData = [
  { id: 1, name: 'English', proficiency: 'Fluent' },
  { id: 2, name: 'Urdu', proficiency: 'Native' },
  { id: 3, name: 'Balti', proficiency: 'Native' },
  { id: 4, name: 'Persian', proficiency: 'Intermediate' },
];

const hobbiesData = ['AI Innovation', 'Travel', 'Photography', 'Hiking'];

const coursesData = [
  {
    id: 1,
    title: 'Front Desk Manager / Receptionist',
    date: '2024',
    description: 'Professional training in receptionist operations, communication, and customer experience.',
    type: 'course',
  },
  {
    id: 2,
    title: 'Generative AI',
    date: '2026',
    description: 'Hands-on learning focused on AI prototyping, model workflows, and practical product integration.',
    type: 'course',
  },
];

const projectData = [
  {
    id: 1,
    title: 'Explore Gilgit-Baltistan',
    description:
      'A full-stack web app that serves as a One-Stop Tourism Hub & Budget Planner for Gilgit-Baltistan. It helps travelers plan trips, manage budgets, and discover tourist destinations.',
    tech_stack: 'Next.js, FastAPI, Python, MySQL',
    github_link: 'https://github.com/mushufakhar-hub/explore-gilgit-baltistan',
    live_link: 'https://explore-gilgit-baltistan.vercel.app',
    image_url: '/gb.png',
    features: [
      'Tourist destination discovery',
      'Budget planning and tracking',
      'Interactive maps',
      'User reviews and ratings',
      'Trip itinerary builder',
    ],
  },
];

const certificatesData = [
  {
    id: 1,
    title: 'Front Desk Manager / Receptionist',
    date: '2024',
    description: 'Officially validated through NAVTTC for professional front desk and reception operations.',
    type: 'certificate',
  },
  {
    id: 2,
    title: 'Generative AI',
    date: '2026',
    description: 'Completed specialized training in generative AI applications and implementation strategy.',
    type: 'certificate',
  },
];

export {
  profileData,
  educationData,
  experienceData,
  defaultSkills,
  languagesData,
  hobbiesData,
  coursesData,
  projectData,
  certificatesData,
};
