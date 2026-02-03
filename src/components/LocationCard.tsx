import { Location } from '@/types';
import Image from 'next/image';

const getCrowdStatus = (percentage: number) => {
  if (percentage < 40) {
    return { text: 'Hidden Gem', color: 'bg-green-500' };
  }
  if (percentage <= 75) {
    return { text: 'Moderate', color: 'bg-yellow-500' };
  }
  return { text: 'Busy', color: 'bg-red-500' };
};

const LocationCard = ({ location }: { location: Location }) => {
  const crowdStatus = getCrowdStatus(location.crowdPercentage);

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Image src={location.imageUrl} alt={location.name} className="w-full h-48 object-cover" width={500} height={300} />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white mb-2">{location.name}</h3>
          <span className={`px-2 py-1 text-sm font-semibold text-white rounded-full ${crowdStatus.color}`}>
            {crowdStatus.text}
          </span>
        </div>
        <p className="text-slate-400 text-sm mb-4 h-20 overflow-y-auto">{location.description}</p>
        <div className="flex justify-between items-center">
            <div className="text-sm text-slate-300">
                Crowd: {location.crowdPercentage}%
            </div>
            <button className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Navigate
            </button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
