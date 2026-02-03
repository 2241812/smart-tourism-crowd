import LocationCard from '@/components/LocationCard';
import MapView from '@/components/MapView';
import { locations } from '@/lib/mockData';

export default function Home() {
  const locations = mockLocations;

  return (
    <main className="flex flex-col md:flex-row h-screen bg-slate-900">
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <MapView locations={locations} />
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto p-4 space-y-4">
        <h2 className="text-2xl font-bold text-white">Locations</h2>
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </main>
  );
}
