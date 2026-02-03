'use client';

import { Location } from '@/types';
import { useState } from 'react';

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  const [imgSrc, setImgSrc] = useState(location.imageUrl);

  const getStatusColor = (percent: number) => {
    if (percent < 40) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    if (percent < 70) return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
  };

  const handleNavigate = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="group flex flex-col sm:flex-row bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-500 transition-all shadow-lg shrink-0">
      <div className="w-full h-48 sm:w-32 sm:h-auto relative shrink-0">
        <img 
          src={imgSrc} 
          alt={location.name}
          className="w-full h-full object-cover"
          onError={() => setImgSrc('https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2029&auto=format&fit=crop')} 
        />
      </div>

      <div className="p-4 flex flex-col justify-between w-full">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-white text-lg leading-tight">{location.name}</h3>
            <span className={`px-2 py-1 rounded text-xs font-bold border ml-2 whitespace-nowrap ${getStatusColor(location.crowdPercentage)}`}>
              {location.crowdPercentage}%
            </span>
          </div>
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-2 font-semibold">{location.category}</p>
          <p className="text-sm text-slate-300 line-clamp-2">{location.description}</p>
        </div>

        <div className="mt-4 flex justify-end">
          <button 
            onClick={handleNavigate}
            className="text-xs flex items-center gap-1 font-bold text-blue-400 hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700/50"
          >
            NAVIGATE
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}