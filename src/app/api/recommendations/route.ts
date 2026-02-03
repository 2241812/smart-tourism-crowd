import { Location } from '@/types';

export const locations: Location[] = [
  {
    id: 1,
    name: 'Trevi Fountain',
    category: 'History',
    description: 'Iconic 18th-century fountain in the Trevi district, designed by Italian architect Nicola Salvi.',
    crowdPercentage: 92,
    coordinates: { lat: 41.9009, lng: 12.4833 },
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197936086b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Villa Borghese Gardens',
    category: 'Nature',
    description: 'A landscape garden in Rome, containing a number of buildings, museums and attractions.',
    crowdPercentage: 35,
    coordinates: { lat: 41.9128, lng: 12.4852 },
    imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Trastevere Hidden Bakery',
    category: 'Food',
    description: 'A quiet local spot serving traditional Roman pastries away from the main tourist streets.',
    crowdPercentage: 15,
    coordinates: { lat: 41.8890, lng: 12.4680 },
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Pantheon',
    category: 'History',
    description: 'Former Roman temple and now a Catholic church, on the site of an earlier temple commissioned by Marcus Agrippa.',
    crowdPercentage: 88,
    coordinates: { lat: 41.8986, lng: 12.4769 },
    imageUrl: 'https://images.unsplash.com/photo-1542820229-081e0c12af0b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Janiculum Hill',
    category: 'Nature',
    description: 'The second-tallest hill in the contemporary city of Rome, offering panoramic views.',
    crowdPercentage: 45,
    coordinates: { lat: 41.8913, lng: 12.4616 },
    imageUrl: 'https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=1000&auto=format&fit=crop'
  }
];

export function getSimulatedCrowdLevel(level: number): number {
  return Math.max(0, Math.min(100, level));
}