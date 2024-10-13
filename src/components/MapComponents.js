// import React from 'react';
// import { Map, Marker } from 'react-map-gl'; // Assuming usage of Mapbox or similar

// export const MapView = ({ profile }) => {
//   if (!profile) return null;
//   console.log('>>profile', profile)
//  console.log('>>profile', profile.location.lat, profile.location.lng);
//   return (
//     <Map initialViewState={{ longitude: profile.location.lng, latitude: profile.location.lat, zoom: 12 }}>
//       <Marker longitude={profile.location.lng} latitude={profile.location.lat} />
//     </Map>
//   );
// };


//--------------------------------


// import React from 'react';
// import { Map, Marker } from 'react-map-gl';
// import mapboxgl from 'mapbox-gl';

// export const MapView = ({ profile }) => {
//   if (!profile) return null;
//   mapboxgl.accessToken = 'pk.eyJ1IjoicnV0dWphbmFsZSIsImEiOiJjbTI2ZmxicWQwajk3MmtzNjN4cW5nNG1zIn0.EO7xppIBw5agWcgb0VXDyQ';
//   //const MAPBOX_TOKEN = 'pk.eyJ1IjoicnV0dWphbmFsZSIsImEiOiJjbTI2ZmxicWQwajk3MmtzNjN4cW5nNG1zIn0.EO7xppIBw5agWcgb0VXDyQ'; // Replace with your Mapbox access token

//   return (
//     <Map 
//       mapboxApiAccessToken={MAPBOX_TOKEN}
//       mapStyle="mapbox://styles/mapbox/streets-v11" // This is one of Mapbox's default styles
//       initialViewState={{
//         longitude: profile.location.lng,
//         latitude: profile.location.lat,
//         zoom: 12
//       }}
//     >
//       <Marker longitude={profile.location.lng} latitude={profile.location.lat} />
//     </Map>
//   );
// };

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

export const MapView = ({ profile }) => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicnV0dWphbmFsZSIsImEiOiJjbTI2ZmxicWQwajk3MmtzNjN4cW5nNG1zIn0.EO7xppIBw5agWcgb0VXDyQ';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  });

  return (
    <div
      style={{ height: '100%' }}
      ref={mapContainerRef}
      className="map-container"
    />
  );
};
