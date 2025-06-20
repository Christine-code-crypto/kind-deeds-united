
import { CauseProps } from '../components/CauseCard';

export const causes: CauseProps[] = [
  {
    id: '1',
    title: 'Clean Water for Rural Communities',
    organization: 'Water First Initiative',
    description: 'Help provide clean and safe drinking water to rural communities in need. Your donation helps build wells and water filtration systems.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    raised: 24500,
    goal: 50000,
    category: 'Environment',
    featured: true
  },
  {
    id: '2',
    title: 'Education for Underserved Children',
    organization: 'Learn & Grow Foundation',
    description: 'Support education programs for children in underserved communities. Funds go towards school supplies, scholarships, and teaching resources.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    raised: 18750,
    goal: 30000,
    category: 'Education',
    featured: true
  },
  {
    id: '3',
    title: 'Emergency Disaster Relief',
    organization: 'Global Relief Network',
    description: 'Provide emergency aid to communities affected by natural disasters. Your contribution helps deliver food, shelter, and medical assistance.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    raised: 132000,
    goal: 200000,
    category: 'Disaster Relief'
  },
  {
    id: '4',
    title: 'Homeless Shelter Support',
    organization: 'Safe Haven',
    description: 'Help maintain and expand homeless shelters in urban areas. Donations provide meals, beds, and essential services for those in need.',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    raised: 8900,
    goal: 15000,
    category: 'Homelessness'
  },
  {
    id: '5',
    title: 'Wildlife Conservation',
    organization: 'EarthGuard',
    description: 'Support efforts to protect endangered species and their habitats. Funds contribute to conservation programs and anti-poaching initiatives.',
    image: 'https://images.unsplash.com/photo-1719214486028-57c0b8d755b7',
    raised: 42000,
    goal: 75000,
    category: 'Wildlife'
  },
  {
    id: '6',
    title: 'Food Bank Expansion',
    organization: 'Community Harvest',
    description: 'Help expand local food banks to serve more families facing food insecurity. Your donation helps purchase food and improve distribution.',
    image: 'https://images.unsplash.com/photo-1638695684179-3a61a707e6ea',
    raised: 15200,
    goal: 25000,
    category: 'Food Security'
  }
];

export const recentDonations = [
  { id: '1', name: 'Sarah Johnson', amount: 100, cause: 'Clean Water for Rural Communities', date: '2023-05-04' },
  { id: '2', name: 'Anonymous', amount: 50, cause: 'Education for Underserved Children', date: '2023-05-03' },
  { id: '3', name: 'Michael Chen', amount: 75, cause: 'Wildlife Conservation', date: '2023-05-03' },
  { id: '4', name: 'Anonymous', amount: 25, cause: 'Food Bank Expansion', date: '2023-05-02' },
  { id: '5', name: 'Emma Williams', amount: 200, cause: 'Emergency Disaster Relief', date: '2023-05-02' },
];

export const userDonations = [
  { id: '1', amount: 50, cause: 'Clean Water for Rural Communities', date: '2023-04-15', status: 'completed' },
  { id: '2', amount: 75, cause: 'Education for Underserved Children', date: '2023-03-22', status: 'completed' },
  { id: '3', amount: 100, cause: 'Emergency Disaster Relief', date: '2023-02-10', status: 'completed' },
];
