import Image from 'next/image';
import type { Location } from '@/types';

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  const { name, description, imageUrl, crowd_density } = location;

  const getBadgeColor = () => {
    if (crowd_density < 40) return 'bg-green-500';
    if (crowd_density < 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg text-white">
      <div className="relative aspect-video">
        <Image 
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center">
          <span className={`h-4 w-4 rounded-full ${getBadgeColor()} mr-2`}></span>
          <span>
            {crowd_density}% Crowd Density
          </span>
        </div>
      </div>
    </div>
  );
}
