'use client';

import { locations } from '@/lib/mockData';
import LocationCard from '@/components/LocationCard';
import MapView from '@/components/MapView';

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-screen bg-slate-950 text-slate-200 overflow-hidden">
      <div className="w-full h-[40vh] md:w-1/2 md:h-full relative z-0 border-b md:border-b-0 md:border-r border-slate-800">
        <MapView locations={locations} />
      </div>

      <div className="w-full h-[60vh] md:w-1/2 md:h-full flex flex-col bg-slate-900 z-10 shadow-2xl">
        <div className="p-6 pb-2 border-b border-slate-800 bg-slate-900 sticky top-0 z-20">
          <h1 className="text-2xl font-bold text-white mb-1">
            Find Your Quiet Spot
          </h1>
          <p className="text-slate-400 text-sm">
            Live crowd tracking & recommendations.
          </p>
        </div>

        <div className="overflow-y-auto p-4 md:p-6 space-y-4 pb-20">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </main>
  );
}