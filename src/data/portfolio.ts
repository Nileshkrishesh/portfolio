/**
 * Portfolio Data Types and Content
 * 
 * This file contains all personal content for the portfolio.
 * Components receive data via props only - never hardcode content inside components.
 */

export interface PersonalInfo {
  firstName: string
  lastName: string
  name: string // Full name for general use
  title: string
  bio: string
  intro: string // Short 2-3 sentence professional intro for Hero
  location: string
  email: string
  phone?: string
  image?: string
  openToOpportunities?: boolean
}

export interface SocialLink {
  name: string
  url: string
  icon: string // Lucide icon name
}

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

export interface Skill {
  name: string
  category: string
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  image?: string
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
  year: string
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string | null // null or "Present" for current roles
  description: string
  achievements?: string[]
  tags: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  location: string
  startDate: string
  endDate: string
  gpa?: string
  achievements?: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  category: string
  icon?: string
  url?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
  image?: string
}

export interface CompetitiveProgramming {
  id: string
  platform: string
  username: string
  rating?: number
  rank?: string
  profileUrl: string
  achievements?: string[]
}

export interface Research {
  id: string
  title: string
  authors: string[]
  publication?: string
  date: string
  abstract: string
  tags: string[]
  paperUrl?: string
  citationCount?: number
}

export interface ContactInfo {
  title: string
  subtitle: string
  availability: string
}

export interface ResumeHighlight {
  label: string
  value: string
}

// =============================================================================
// PLACEHOLDER DATA
// Replace these with real content when available
// =============================================================================

export const personalInfo: PersonalInfo = {
  firstName: 'Nilesh',
  lastName: 'Gupta',
  name: 'Nilesh Gupta',
  title: 'AI & Robotics Engineering Student | Research Intern',
  bio: 'B.Tech student in Computer Science Engineering (Robotics and AI) at Lovely Professional University with a strong foundation in machine learning, embedded systems, and data analytics. Research Intern at Centre for Artificial Intelligence and Robotics (CAIR), IIT Mandi. Passionate about leveraging AI and IoT to solve real-world problems, with hands-on experience in hardware-software integration and competitive achievements in hackathons and research competitions.',
  intro: 'B.Tech student specializing in Robotics and AI at Lovely Professional University. Research Intern at CAIR, IIT Mandi. Ranked 4th in LPU-GCI Competition at University of Tokyo, 2nd place at SemiXthon\'26 (DTU), and actively building AI-powered solutions in healthcare, education, and data analytics.',
  location: 'Punjab, India',
  email: 'nileshkrishesh@gmail.com',
  phone: '+91-8770601362',
  image: '/images/profile.jpg',
  openToOpportunities: true,
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Nileshkrishesh', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/nileshkrishesh', icon: 'Linkedin' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/mGNIpvHoqw', icon: 'Code2' },
  { name: 'Email', url: 'mailto:nileshkrishesh@gmail.com', icon: 'Mail' },
]

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const stats: Stat[] = [
  { label: 'CGPA', value: 8.92, suffix: '' },
  { label: 'Projects Completed', value: 4, suffix: '+' },
  { label: 'Hackathon Wins', value: 2, suffix: '' },
  { label: 'Global Rank 285', value: 285, suffix: '', prefix: '#' },
]

export const heroStats: Stat[] = [
  { label: 'CGPA', value: 8.92, suffix: '/10' },
  { label: 'Projects', value: 4, suffix: '+' },
  { label: 'Achievements', value: 5, suffix: '+' },
]

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', level: 'Expert' },
  { name: 'C++', category: 'Languages', level: 'Advanced' },
  { name: 'C', category: 'Languages', level: 'Advanced' },
  { name: 'JavaScript', category: 'Languages', level: 'Advanced' },
  
  // Frontend
  { name: 'HTML', category: 'Frontend', level: 'Expert' },
  { name: 'CSS', category: 'Frontend', level: 'Expert' },
  { name: 'JavaScript', category: 'Frontend', level: 'Advanced' },
  { name: 'React.js', category: 'Frontend', level: 'Advanced' },
  
  // Database
  { name: 'PostgreSQL', category: 'Database', level: 'Advanced' },
  { name: 'MongoDB', category: 'Database', level: 'Advanced' },
  
  // Tools & Hardware
  { name: 'Git/GitHub', category: 'Tools', level: 'Expert' },
  { name: 'MATLAB', category: 'Tools', level: 'Intermediate' },
  { name: 'Arduino', category: 'Hardware', level: 'Advanced' },
  { name: 'ESP32', category: 'Hardware', level: 'Advanced' },
  { name: 'Raspberry Pi', category: 'Hardware', level: 'Advanced' },
  
  // Core CS & AI/ML
  { name: 'Data Structures & Algorithms', category: 'Core CS', level: 'Advanced' },
  { name: 'Machine Learning', category: 'AI/ML', level: 'Advanced' },
  { name: 'Deep Learning', category: 'AI/ML', level: 'Intermediate' },
  { name: 'Embedded Systems', category: 'Core CS', level: 'Advanced' },
  { name: 'OpenCV', category: 'AI/ML', level: 'Advanced' },
  { name: 'NumPy', category: 'AI/ML', level: 'Expert' },
  { name: 'Pandas', category: 'AI/ML', level: 'Expert' },
  { name: 'Matplotlib', category: 'AI/ML', level: 'Advanced' },
]

export const projects: Project[] = [
  {
    id: 'hr-analytics',
    title: 'Business Proposal: Leveraging HR Analytics to Reduce Employee Attrition',
    description: 'Created a comprehensive business proposal for predicting and reducing employee attrition using machine learning and data analytics. Conducted market analysis, EDA, and built predictive models with actionable recommendations.',
    longDescription: 'Final assignment for Global Consumer Intelligence (GCI) Course 2025 at Matsuo Laboratory, University of Tokyo. Identified employee attrition as the key business problem through extensive data and market analysis. Built and evaluated multiple machine learning models to predict attrition patterns and presented strategic recommendations to stakeholders.',
    tags: ['Python', 'Machine Learning', 'Data Analytics', 'EDA', 'Business Intelligence'],
    featured: true,
    year: '2025',
  },
  {
    id: 'home-credit',
    title: 'Home Credit Default Risk',
    description: 'Developed a machine learning model to predict loan default probability using multidimensional customer data, estimating the likelihood of default for individual customers.',
    longDescription: 'Competition project for Global Consumer Intelligence (GCI) at Matsuo Laboratory, University of Tokyo. Analyzed complex customer financial data, performed feature engineering, and built predictive models to assess credit risk and default probability.',
    tags: ['Python', 'Machine Learning', 'Risk Analytics', 'Feature Engineering', 'pandas', 'scikit-learn'],
    featured: true,
    year: '2025',
  },
  {
    id: 'edumic',
    title: 'Smart AI Classroom Microphone (EduMic)',
    description: 'ESP32-based smart classroom assistant that converts teacher speech into real-time text, lecture summaries, key formulas, and AI-generated MCQs using speech recognition and NLP.',
    longDescription: 'Developed an intelligent classroom assistant that captures and processes teacher lectures in real-time. Integrated with a web platform for cloud-based lecture storage and student access. Implemented noise filtering algorithms to reduce background interference and improve speech recognition accuracy.',
    tags: ['ESP32', 'Python', 'NLP', 'Speech Recognition', 'IoT', 'Web Platform', 'Cloud Storage'],
    featured: true,
    year: '2025',
  },
  {
    id: 'medivue',
    title: 'MediVue – Smart Health Monitoring System for Elderly Care',
    description: 'IoT-based healthcare monitoring system for elderly individuals with real-time vital sign monitoring, fall detection, and automated emergency alerts.',
    longDescription: 'Designed and developed a comprehensive IoT healthcare solution to improve safety and continuous monitoring for elderly individuals living independently. Integrated sensors for heart rate, SpO2, body temperature, and fall detection. Implemented automated alert mechanisms with instant notifications and caregiver communication for critical health events. Built using embedded programming with sensor integration and intelligent automation.',
    tags: ['IoT', 'Embedded Systems', 'Arduino', 'ESP32', 'Healthcare Tech', 'Sensor Integration', 'Real-time Monitoring'],
    featured: true,
    year: '2025',
  },
]

export const experiences: Experience[] = [
  {
    id: 'cair-iit-mandi',
    company: 'Centre for Artificial Intelligence and Robotics (CAIR), IIT Mandi',
    position: 'Research Intern',
    location: 'IIT Mandi, Himachal Pradesh',
    startDate: 'August 2026',
    endDate: 'December 2026',
    description: 'Selected for the prestigious Research Internship Programme at CAIR, IIT Mandi, under the supervision of Dr. Jagadeesh Kadiyam, mentored by Lakshyajit Behera. Working on cutting-edge research in artificial intelligence and robotics.',
    achievements: [
      'Selected for competitive 4-month research internship program',
      'Working under the supervision of Dr. Jagadeesh Kadiyam',
      'Mentored by Lakshyajit Behera on advanced AI and robotics research',
      'Contributing to research projects at the intersection of AI and robotics',
    ],
    tags: ['AI Research', 'Robotics', 'Machine Learning', 'Research', 'IIT Mandi'],
  },
]

export const education: Education[] = [
  {
    id: 'lpu',
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering (Robotics and AI)',
    location: 'Punjab, India',
    startDate: '2024',
    endDate: 'Present',
    gpa: '8.92/10.0',
    achievements: [
      'CGPA: 8.92 (Current)',
      'Specialization in Robotics and Artificial Intelligence',
      'Active participant in research competitions and hackathons',
      'Focus on Machine Learning, Embedded Systems, and IoT',
    ],
  },
  {
    id: 'senior-secondary',
    institution: 'Madhya Pradesh Board of Secondary Education (MPBSE)',
    degree: 'Senior Secondary',
    field: 'Science',
    location: 'Madhya Pradesh, India',
    startDate: '2022',
    endDate: '2024',
    gpa: '87%',
    achievements: [
      'Secured 87% in Senior Secondary Examination',
      'Strong foundation in Mathematics and Science',
    ],
  },
  {
    id: 'secondary',
    institution: 'Madhya Pradesh Board of Secondary Education (MPBSE)',
    degree: 'Secondary',
    field: 'General',
    location: 'Madhya Pradesh, India',
    startDate: '2020',
    endDate: '2022',
    gpa: '86%',
    achievements: [
      'Secured 86% in Secondary Examination',
      'National Means-cum-Merit Scholarship (NMMSS) Scholar',
    ],
  },
]

// Helper to get primary degree for Hero section
export const primaryDegree = education[0]
  ? `${education[0].degree} in ${education[0].field}`
  : undefined

export const primaryUniversity = education[0]?.institution

export const achievements: Achievement[] = [
  {
    id: 'quantum-computing-iitg',
    title: 'Certificate of Merit – Quantum Computing Summer Course (QC101)',
    description: 'Successfully completed the Easy Track of QC101: Quantum Computing Summer Course organized by 4i Labs, IIT Guwahati. Ranked in the top 10% of participants and awarded Certificate of Merit for outstanding performance in track project evaluation.',
    date: '2024',
    category: 'Course',
    icon: 'Award',
  },
  {
    id: 'semixthon-2026',
    title: '2nd Position – Human Device Interface Track, SemiXthon\'26',
    description: 'Secured 2nd place in the Human Device Interface track at SemiXthon\'26 hosted by Delhi Technological University (DTU), competing against top teams in hardware and IoT innovation.',
    date: '2026',
    category: 'Hackathon',
    icon: 'Trophy',
    url: 'https://lnkd.in/dg5R97Aa',
  },
  {
    id: 'lpu-gci-rank4',
    title: 'Rank 4 Out of 10 Finalists – LPU-GCI Competition',
    description: 'Achieved Rank 4 among 10 finalists in the Lovely Professional University - Global Consumer Intelligence Competition conducted by Matsuo Laboratory, University of Tokyo.',
    date: '2025',
    category: 'Competition',
    icon: 'Award',
  },
  {
    id: 'gci-rank285',
    title: 'Rank 285 Worldwide – GCI Competition',
    description: 'Secured global rank 285 in the Global Consumer Intelligence Competition at Matsuo Laboratory, University of Tokyo, competing against participants from around the world.',
    date: '2025',
    category: 'Competition',
    icon: 'Globe',
  },
  {
    id: 'nmmss-scholar',
    title: 'National Means-cum-Merit Scholarship (NMMSS)',
    description: 'Awarded the prestigious National Means-cum-Merit Scholarship by the Government of India, recognizing academic excellence and merit.',
    date: '2021',
    category: 'Scholarship',
    icon: 'GraduationCap',
  },
]

export const certifications: Certification[] = [
  {
    id: 'quantum-computing-iitg',
    name: 'Certificate of Merit – QC101: Quantum Computing Summer Course (Easy Track)',
    issuer: '4i Labs, IIT Guwahati',
    date: '2024',
    credentialId: 'Top 10% of participants',
    credentialUrl: 'https://lnkd.in/dKkPZxPM',
  },
  {
    id: 'oracle-ai-agent',
    name: 'Oracle Fusion AI Agent Studio Certified Foundations Associate – Rel 1',
    issuer: 'Oracle',
    date: '2026',
    credentialId: 'Oracle Certified',
    credentialUrl: 'https://www.linkedin.com/posts/nileshkrishesh_oraclecertified-oracleuniversity-ai-activity-7410727915547492352-u7Ep',
  },
  {
    id: 'qualcomm-ai',
    name: 'AI Upskilling Certificate – Technical Foundations',
    issuer: 'Qualcomm Academy',
    date: '2025',
    credentialUrl: 'https://www.linkedin.com/posts/nileshkrishesh_qualcommacademy-aiupskilling-artificialintelligence-activity-7409511265234124800-1gTm',
  },
  {
    id: 'gci-utokyo-completion',
    name: 'Certificate of Completion – Global Consumer Intelligence Course 2025',
    issuer: 'University of Tokyo',
    date: '2025',
  },
  {
    id: 'advitiya-fastline',
    name: 'Certificate of Participation – Fast Line Follower, ADVITIYA\'26',
    issuer: 'IIT BHU',
    date: '2026',
    credentialUrl: 'https://drive.google.com/file/d/16doTwTEHVt1zEl3h1so-uipPLiKYw5oY/view?usp=drive_link',
  },
  {
    id: 'advitiya-prismbreak',
    name: 'Certificate of Participation – Prism Break, ADVITIYA\'26',
    issuer: 'IIT Ropar',
    date: '2026',
    credentialUrl: 'https://drive.google.com/file/d/1qNKWUlaA3bzsLG5MCYQpX9W8KK2yk_Qz/view?usp=drive_link',
  },
  {
    id: 'codecarvan-lpu',
    name: 'Certificate of Participation – Code Carvan 3.0 Mentor Session',
    issuer: 'Coding Blocks, LPU',
    date: '2025',
  },
  {
    id: 'convolve-hackathon',
    name: 'Certificate of Merit – Screening Round of Convolve 4.0',
    issuer: 'IIT Madras, IIT Bombay, IIT Delhi, IIT Roorkee, IIT Kharagpur, IIT Varanasi, IIT Hyderabad',
    date: '2026',
    credentialId: 'Pan-IIT AI/ML Hackathon',
  },
  {
    id: 'thingqbator-embedded',
    name: 'Certificate of Excellence – An Introduction to Embedded Systems',
    issuer: 'thingQbator (Nasscom Foundation)',
    date: '2025',
  },
  {
    id: 'thingqbator-ml',
    name: 'Certificate of Excellence – Machine Learning and Image Processing',
    issuer: 'thingQbator (Nasscom Foundation)',
    date: '2025',
  },
  {
    id: 'indian-laws',
    name: 'Certificate of Completion – Indian Laws: Know Your Rights',
    issuer: 'Learning Foundation Online',
    date: '2025',
    credentialId: '25OCT25/LFO/LAW/A113',
  },
  {
    id: 'cybersmart-volunteer',
    name: 'CyberSmart Volunteer Certificate',
    issuer: 'WNS Cares & Cyber Smart',
    date: '2026',
  },
  {
    id: 'techmarathon-lpu',
    name: 'Certificate of Participation – Techmarathon 2K25',
    issuer: 'School of Electronics and Electrical Engineering, LPU',
    date: '2025',
    credentialId: 'Certificate No. 418071',
  },
  {
    id: 'medha-iitb',
    name: 'Participant – MEDHA 2.0',
    issuer: 'IIT Bombay',
    date: '2026',
  },
  {
    id: 'gci-utokyo',
    name: 'Participant – Global Consumer Intelligence Course 2025',
    issuer: 'University of Tokyo',
    date: '2025',
    credentialUrl: 'https://www.linkedin.com/posts/nileshkrishesh_universityoftokyo-datascience-al-activity-7423983081830764544-jPmS',
  },
  {
    id: 'dtu-hardware',
    name: 'Appreciation Certificate – North India Biggest Hardware Edition',
    issuer: 'Delhi Technological University (DTU)',
    date: '2025',
    credentialUrl: 'https://www.linkedin.com/posts/nileshkrishesh_what-techstack-team-activity-7449713675009019904-s9PH',
  },
]

export const competitiveProgramming: CompetitiveProgramming[] = [
  {
    id: 'leetcode',
    platform: 'LeetCode',
    username: 'mGNIpvHoqw',
    profileUrl: 'https://leetcode.com/u/mGNIpvHoqw',
    achievements: [
      'Currently learning and practicing DSA in C++',
      'Active problem solver',
    ],
  },
]

export const research: Research[] = []

export const contactInfo: ContactInfo = {
  title: 'Let\'s Connect',
  subtitle: 'Interested in collaborating on AI, robotics, or IoT projects? Let\'s build something innovative together.',
  availability: 'Open to research opportunities, internships, and collaborative projects',
}

// Resume configuration
export const resumePath = '/resume/Latest CV(1).pdf' // Your CV is ready to download

export const resumeHighlights: ResumeHighlight[] = [
  { label: 'CGPA', value: '8.92/10' },
  { label: 'Projects', value: '4+ Delivered' },
  { label: 'Global Rank', value: '285 (GCI)' },
]

// About section additional content
export const focusAreas = [
  'Artificial Intelligence & Machine Learning',
  'Robotics & Embedded Systems',
  'IoT & Healthcare Technology',
  'Data Analytics & Business Intelligence',
]

export const philosophy =
  'I believe in leveraging technology to solve real-world problems. Whether it\'s building intelligent systems for healthcare, creating smart educational tools, or analyzing data for business insights, my goal is to create solutions that make a meaningful impact.'
