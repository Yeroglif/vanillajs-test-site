// stored in /routes/maps.js

import { getGeoLocation } from '../lib/geoLocation.js';

export default async (hostComponent) => {
  // Get user browser's geoLocation
  const location = await getGeoLocation(true);

  // Define markers
  let locationMarkers = [
    { lat: 57.3229, lng: -4.4244, name: 'Lochness Monster', description: 'Mythical aquatic Scottish creature in Lochness Loch, Scotland' },
    { lat: 47.6062, lng: -122.3321, name: 'Bigfoot', description: 'Large humanoid forest dweller in Pacific Northwest, USA' },
    { lat: 18.2208, lng: -66.5901, name: 'Chupacabra', description: 'Goat-sucking mysterious predator in Puerto Rico' },
    { lat: 38.9072, lng: -82.1369, name: 'Mothman', description: 'Winged red-eyed harbinger in Point Pleasant, West Virginia' },
    { lat: 34.1706, lng: -80.4585, name: 'Lizard Man', description: 'Reptilian swamp-dwelling cryptid in Scape Ore Swamp, South Carolina' },
    { lat: 27.9878, lng: 86.9250, name: 'Yeti', description: 'Snowy Himalayan ape-like being in the Himalayas, Nepal' },
  ];

  // Set up the HTML for the map container
  hostComponent.innerHTML = `
    <div id="map" style="width: 100%; height: 100vh; z-index:0"></div>
  `;

  // Load Leaflet's CSS
  const leafletCSS = document.createElement('link');
  leafletCSS.rel = 'stylesheet';
  leafletCSS.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
  document.head.appendChild(leafletCSS);

  // Load Leaflet's JS
  const loadLeafletScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      document.body.appendChild(script);
    });
  };

  // Initialize the map once Leaflet is loaded
  const initMap = () => {
    const map = L.map('map').setView([location.latitude, location.longitude], 4);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);
      

    // Add markers to the map
    locationMarkers.forEach((marker) => {
      const leafletMarker = L.marker([marker.lat, marker.lng]).addTo(map);

      // Add a popup with name and description
      leafletMarker.bindPopup(`
        <div>
          <h2>${marker.name}</h2>
          <p>${marker.description}</p>
        </div>
      `);
    });
  };

  await loadLeafletScript();
  initMap();
};
