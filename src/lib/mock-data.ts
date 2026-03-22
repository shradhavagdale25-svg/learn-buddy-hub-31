export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  price: number;
  originalPrice?: number;
  thumbnail: string;
  category: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  lessons: Lesson[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  updatedAt: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  isPreview: boolean;
  completed?: boolean;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export const categories = [
  'All', 'Web Development', 'Mobile Development', 'Data Science',
  'Machine Learning', 'Design', 'Business', 'Marketing'
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete React Developer in 2024',
    description: 'Learn React from scratch. Build real-world projects including a massive e-commerce app with Redux, Hooks, GraphQL, and more.',
    instructor: 'Sarah Chen',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    price: 12.99,
    originalPrice: 89.99,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=340&fit=crop',
    category: 'Web Development',
    rating: 4.8,
    reviewCount: 12453,
    studentCount: 68420,
    level: 'Beginner',
    duration: '42h 30m',
    updatedAt: 'March 2024',
    lessons: [
      { id: 'l1', title: 'Introduction to React', duration: '12:30', videoUrl: 'SqcY0GlETPk', isPreview: true },
      { id: 'l2', title: 'Setting Up Your Environment', duration: '8:45', videoUrl: 'hQAHSlTtcmY', isPreview: true },
      { id: 'l3', title: 'JSX Deep Dive', duration: '18:20', videoUrl: '9D1x7-2FmTA', isPreview: false },
      { id: 'l4', title: 'Components & Props', duration: '22:10', videoUrl: 'Tn6-PIqc4UM', isPreview: false },
      { id: 'l5', title: 'State Management', duration: '25:00', videoUrl: 'O6P86uwfdR0', isPreview: false },
      { id: 'l6', title: 'Hooks In Depth', duration: '30:15', videoUrl: 'TNhaISOUy6Q', isPreview: false },
    ],
  },
  {
    id: '2',
    title: 'Python for Data Science & Machine Learning',
    description: 'Master Python for data analysis, visualization, machine learning, and deep learning with TensorFlow and Keras.',
    instructor: 'Dr. James Miller',
    instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    price: 14.99,
    originalPrice: 94.99,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=340&fit=crop',
    category: 'Data Science',
    rating: 4.7,
    reviewCount: 8932,
    studentCount: 45230,
    level: 'Intermediate',
    duration: '56h 15m',
    updatedAt: 'February 2024',
    lessons: [
      { id: 'l1', title: 'Python Fundamentals Review', duration: '15:00', videoUrl: 'kqtD5dpn9C8', isPreview: true },
      { id: 'l2', title: 'NumPy Essentials', duration: '20:30', videoUrl: 'QUT1VHiLmmI', isPreview: false },
      { id: 'l3', title: 'Pandas for Data Analysis', duration: '25:45', videoUrl: 'vmEHCJofslg', isPreview: false },
      { id: 'l4', title: 'Data Visualization with Matplotlib', duration: '18:20', videoUrl: 'UO98lJQ3QGI', isPreview: false },
    ],
  },
  {
    id: '3',
    title: 'UI/UX Design Masterclass',
    description: 'Learn UI/UX design from scratch. Master Figma, design systems, user research, and build a professional portfolio.',
    instructor: 'Emma Rodriguez',
    instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    price: 11.99,
    originalPrice: 79.99,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=340&fit=crop',
    category: 'Design',
    rating: 4.9,
    reviewCount: 6721,
    studentCount: 32150,
    level: 'Beginner',
    duration: '38h 45m',
    updatedAt: 'January 2024',
    lessons: [
      { id: 'l1', title: 'What is UX Design?', duration: '10:00', videoUrl: 'SRec90j6lTY', isPreview: true },
      { id: 'l2', title: 'Design Thinking Process', duration: '22:15', videoUrl: 'gHGN6hs2gZY', isPreview: false },
      { id: 'l3', title: 'Figma Basics', duration: '28:30', videoUrl: 'FTFaQWZBqQ8', isPreview: false },
    ],
  },
  {
    id: '4',
    title: 'Full-Stack Node.js & Express',
    description: 'Build scalable backend applications with Node.js, Express, MongoDB, and deploy to production.',
    instructor: 'Alex Thompson',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    price: 13.99,
    originalPrice: 84.99,
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=340&fit=crop',
    category: 'Web Development',
    rating: 4.6,
    reviewCount: 5432,
    studentCount: 28900,
    level: 'Intermediate',
    duration: '48h 20m',
    updatedAt: 'March 2024',
    lessons: [
      { id: 'l1', title: 'Node.js Fundamentals', duration: '14:00', videoUrl: 'TlB_eWDSMt4', isPreview: true },
      { id: 'l2', title: 'Express Framework', duration: '19:45', videoUrl: 'SccSCuHhOw0', isPreview: false },
      { id: 'l3', title: 'RESTful API Design', duration: '24:30', videoUrl: 'fgTGADljAMk', isPreview: false },
    ],
  },
  {
    id: '5',
    title: 'Flutter & Dart - Complete Guide',
    description: 'Build beautiful native mobile apps for iOS and Android from a single codebase using Flutter.',
    instructor: 'Priya Sharma',
    instructorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    price: 15.99,
    originalPrice: 99.99,
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=340&fit=crop',
    category: 'Mobile Development',
    rating: 4.7,
    reviewCount: 4210,
    studentCount: 21500,
    level: 'Beginner',
    duration: '44h 10m',
    updatedAt: 'February 2024',
    lessons: [
      { id: 'l1', title: 'Dart Language Basics', duration: '16:00', videoUrl: 'Ej_Pcr4uC2Q', isPreview: true },
      { id: 'l2', title: 'Flutter Widgets', duration: '21:30', videoUrl: 'x0uinJvhNxI', isPreview: false },
    ],
  },
  {
    id: '6',
    title: 'Digital Marketing A-Z',
    description: 'Master digital marketing strategy, SEO, social media marketing, Google Ads, and analytics.',
    instructor: 'Mark Johnson',
    instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    price: 10.99,
    originalPrice: 74.99,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop',
    category: 'Marketing',
    rating: 4.5,
    reviewCount: 7890,
    studentCount: 54300,
    level: 'Beginner',
    duration: '32h 00m',
    updatedAt: 'March 2024',
    lessons: [
      { id: 'l1', title: 'Digital Marketing Overview', duration: '11:00', videoUrl: 'bixR-KIJKYM', isPreview: true },
      { id: 'l2', title: 'SEO Fundamentals', duration: '18:45', videoUrl: 'DvwS7cV9GmQ', isPreview: false },
    ],
  },
];

export const reviews: Review[] = [
  { id: 'r1', user: 'Michael S.', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=50&h=50&fit=crop', rating: 5, comment: 'Best React course I have ever taken. The projects are amazing and the instructor explains everything clearly.', date: '2 weeks ago' },
  { id: 'r2', user: 'Lisa K.', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop', rating: 4, comment: 'Very comprehensive and well-structured. A few sections could use more depth, but overall excellent.', date: '1 month ago' },
  { id: 'r3', user: 'David R.', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50&h=50&fit=crop', rating: 5, comment: 'Went from zero to building full apps. The real-world projects gave me confidence to apply for jobs.', date: '3 weeks ago' },
];
