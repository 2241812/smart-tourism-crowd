export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Location {
  id: number;
  name: string;
  category: 'History' | 'Food' | 'Nature' | 'Art';
  description: string;
  crowdPercentage: number;
  coordinates: Coordinates;
  imageUrl: string;
}