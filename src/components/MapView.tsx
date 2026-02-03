'use client';

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin
} from '@vis.gl/react-google-maps';
import { Location } from '@/types';

interface MapViewProps {
  locations: Location[];
}

export default function MapView({ locations }: MapViewProps) {
  const defaultCenter = locations.length > 0 
    ? { lat: locations[0].coordinates.lat, lng: locations[0].coordinates.lng }
    : { lat: 41.9028, lng: 12.4964 };
  
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "";

  return (
    <APIProvider apiKey={apiKey}>
      <div className="w-full h-full bg-slate-900 relative">
        <Map
          defaultCenter={defaultCenter}
          defaultZoom={13}
          mapId="DEMO_MAP_ID"
          className="w-full h-full"
          disableDefaultUI={true}
          style={{ width: '100%', height: '100%' }}
        >
          {locations.map((loc) => (
            <AdvancedMarker
              key={loc.id}
              position={{ lat: loc.coordinates.lat, lng: loc.coordinates.lng }}
              title={`${loc.name} (${loc.crowdPercentage}%)`}
            >
              <Pin 
                background={loc.crowdPercentage < 40 ? '#10b981' : loc.crowdPercentage < 70 ? '#eab308' : '#f43f5e'} 
                borderColor={'#0f172a'}
                glyphColor={'#ffffff'}
              />
            </AdvancedMarker>
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}