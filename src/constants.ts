import { Project, Skill, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NexGen Analytics Dashboard',
    description: 'A high-performance analytics platform built for scalability. Features real-time data visualization and deep insights.',
    image: 'https://picsum.photos/seed/analytics/800/600',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'Pulse Commerce',
    description: 'Modern e-commerce experience with seamless transitions and lightning-fast checkout process.',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    tags: ['React', 'Motion', 'Stripe', 'Node.js'],
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'CryptoVerse Explorer',
    description: 'Real-time cryptocurrency tracking application using advanced API integrations and complex filtering.',
    image: 'https://picsum.photos/seed/crypto/800/600',
    tags: ['React', 'Redux', 'Chart.js', 'API'],
    link: '#',
    github: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Express', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 75, category: 'Backend' },
  { name: 'Figma', level: 80, category: 'Design' },
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'Docker', level: 70, category: 'Tools' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Framer Motion for Seamless UX',
    excerpt: 'Learn how to elevate your user experience with purposeful animations that guide and delight your users.',
    date: 'Oct 12, 2025',
    readTime: '5 min read',
    category: 'Development'
  },
  {
    id: '2',
    title: 'The Future of Frontend: Server Components',
    excerpt: 'Exploring the shift towards React Server Components and what it means for the standard SPA architecture.',
    date: 'Sep 28, 2025',
    readTime: '8 min read',
    category: 'Architecture'
  },
  {
    id: '3',
    title: 'Design Systems for Scale',
    excerpt: 'How to build a flexible, maintainable design system that grows with your application and team.',
    date: 'Sep 15, 2025',
    readTime: '6 min read',
    category: 'Design'
  }
];
