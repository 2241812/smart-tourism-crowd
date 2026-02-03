import { Location } from '../types';

export const getSimulatedCrowdLevel = (basePercentage: number): number => {
  const randomFactor = (Math.random() - 0.5) * 10;
  const newPercentage = basePercentage + randomFactor;
  return Math.max(0, Math.min(100, Math.round(newPercentage)));
};

export const locations: Omit<Location, 'crowdPercentage'>[] = [
  {
    id: '1',
    name: 'Colosseum',
    description: 'Iconic Roman amphitheater, a testament to ancient engineering.',
    category: 'History',
    coordinates: { lat: 41.8902, lng: 12.4922 },
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197936086b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    name: 'Trastevere',
    description: 'Charming neighborhood with cobblestone streets and lively trattorias.',
    category: 'Food',
    coordinates: { lat: 41.8899, lng: 12.4673 },
    imageUrl: 'https://images.unsplash.com/photo-1590453995893-5471c53545a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    name: 'Appian Way Regional Park',
    description: 'Ancient Roman road surrounded by lush greenery and historical ruins.',
    category: 'Nature',
    coordinates: { lat: 41.853, lng: 12.5297 },
    imageUrl: 'https://images.unsplash.com/photo-1606035042456-104c4b449b84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    name: 'Borghese Gallery and Museum',
    description: 'A stunning collection of art, including masterpieces by Bernini and Caravaggio.',
    category: 'Art',
    coordinates: { lat: 41.9143, lng: 12.4925 },
    imageUrl: 'https://images.unsplash.com/photo-1628172819283-34354a5592a8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    name: 'Roman Forum',
    description: 'The heart of ancient Rome, featuring ruins of temples, basilicas, and public spaces.',
    category: 'History',
    coordinates: { lat: 41.8925, lng: 12.4853 },
    imageUrl: 'https://images.unsplash.com/photo-1528148344697-72a392b45394?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6',
    name: 'Testaccio Market',
    description: 'A foodie paradise offering authentic Roman street food and fresh produce.',
    category: 'Food',
    coordinates: { lat: 41.8794, lng: 12.4735 },
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '7',
    name: 'Aventine Hill Keyhole',
    description: 'A hidden gem offering a perfectly framed view of St. Peter\'s Basilica.',
    category: 'Nature',
    coordinates: { lat: 41.8847, lng: 12.4795 },
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '8',
    name: 'Palazzo Doria Pamphilj',
    description: 'A private art gallery with a vast collection of paintings, sculptures, and furniture.',
    category: 'Art',
    coordinates: { lat: 41.898, lng: 12.4811 },
    imageUrl: 'https://images.unsplash.com/photo-1604122342211-163d3947c699?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '9',
    name: 'Pantheon',
    description: 'A former Roman temple, now a church, famous for its magnificent dome.',
    category: 'History',
    coordinates: { lat: 41.8986, lng: 12.4769 },
    imageUrl: 'https://images.unsplash.com/photo-1555992831-7b0b2b3531e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '10',
    name: 'Campo de\' Fiori',
    description: 'A bustling market by day and a lively nightlife hub by night.',
    category: 'Food',
    coordinates: { lat: 41.8955, lng: 12.4722 },
    imageUrl: 'https://images.unsplash.com/photo-1563412360275-81233b20e0a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
