export type Category = 'History' | 'Food' | 'Nature' | 'Art';

export interface CrowdStatus {
  level: 'Hidden Gem' | 'Moderate' | 'Busy';
  color: 'bg-green-500' | 'bg-yellow-500' | 'bg-red-500';
}

export interface Location {
  id: string;
  name: string;
  description: string;
  category: Category;
  crowdPercentage: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  imageUrl: string;
}
