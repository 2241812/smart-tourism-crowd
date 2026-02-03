'use client';

import {
  APIProvider,
  Map,
  AdvancedMarker,
} from '@vis.gl/react-google-maps';
import type { Location } from '@/types';

interface MapViewProps {
  locations: Location[];
}

export default function MapView({ locations }: MapViewProps) {
  const defaultCenter = {
    lat: 41.9028,
    lng: 12.4964,
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!}>
      <Map
        defaultCenter={defaultCenter}
        defaultZoom={12}
        mapId="b181cac70f14b527"
      >
        {locations.map((location) => (
          <AdvancedMarker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
          />
        ))}
      </Map>
    </APIProvider>
  );
}
