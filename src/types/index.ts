export interface Coordinates {
  lat: number;
  lng: number;
}
export type Category = 'park' | 'cafe' | 'museum' | 'library';


export interface Location {
  id: number;
  name: string;
  category: 'History' | 'Food' | 'Nature' | 'Art';
  description: string;
  crowdPercentage: number;
  coordinates: Coordinates;
  imageUrl: string;
}