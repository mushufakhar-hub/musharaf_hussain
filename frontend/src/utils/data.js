// Static profile data (used as fallback when database is not connected)
const profileData = {
  name: 'Musharaf Hussain',
  email: 'mushufakhar@gmail.com',
  phone: '+923183650531',
  whatsapp: 'https://wa.me/923183650531',
  linkedin: 'https://linkedin.com/in/musharaf-hussain-7a054124a',
  location: 'Skardu, Gilgit-Baltistan, Pakistan',
  profile:
    'Experienced receptionist skilled in managing communication channels and providing excellent customer service. Strong multitasking and professionalism.',
  heroTitle: 'Receptionist & Aspiring Business Professional',
  resumeUrl: '/resume.pdf',
  profileImage: '/my.jpg',
};

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Business Administration',
    institution: 'Shahid Beheshti University, Tehran',
    period: 'Aug 2025 – Present',
    description: 'Pursuing BBA with focus on organizational management and business strategy.',
  },
  {
    id: 2,
    degree: 'HSSC (Higher Secondary School Certificate)',
    institution: 'Akhuwat College Kasur, Lahore',
    period: 'Oct 2021 – Sep 2023',
    description: 'Completed higher secondary education with strong academic performance.',
  },
];

const experienceData = [
  {
    id: 1,
    role: 'Receptionist',
    company: 'Al Asar Travel and Tours, Skardu',
    period: 'Aug 2023 – Aug 2024',
    responsibilities: [
      'Managed multi-line phone systems',
      'Directed calls and handled messages efficiently',
      'Provided excellent customer service to visitors',
      'Maintained professional front desk operations',
    ],
  },
];

const defaultSkills = [
  { id: 1, name: 'Organizational Behavior', category: 'Professional', proficiency: 85 },
  { id: 2, name: 'Front Desk Management', category: 'Professional', proficiency: 90 },
  { id: 3, name: 'C++', category: 'Technical', proficiency: 65 },
  { id: 4, name: 'Python', category: 'Technical', proficiency: 70 },
  { id: 5, name: 'Generative AI', category: 'Technical', proficiency: 75 },
];

const languagesData = [
  { id: 1, name: 'English', proficiency: 'Fluent' },
  { id: 2, name: 'Urdu', proficiency: 'Native' },
  { id: 3, name: 'Balti', proficiency: 'Native' },
  { id: 4, name: 'Persian', proficiency: 'Intermediate' },
];

const hobbiesData = ['Reading', 'Volunteering', 'Hiking', 'Music'];

const coursesData = [
  {
    id: 1,
    title: 'Front Desk Management',
    date: 'Apr 2024',
    description: 'Professional training in front desk operations and customer service management.',
    type: 'course',
  },
  {
    id: 2,
    title: 'Generative AI Engineer',
    date: 'Present',
    description: 'Experience with TensorFlow and PyTorch. Building AI-powered applications.',
    type: 'course',
  },
];

const certificatesData = [
  {
    id: 1,
    title: 'Front Desk Management',
    date: 'Oct 2025',
    description: 'Certified in professional front desk management and customer service.',
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
  certificatesData,
};
