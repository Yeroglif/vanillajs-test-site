// stored in /routes/maps.js

import { getGeoLocation } from '../lib/geoLocation.js';

export default async (hostComponent) => {
  // Get user browser's geoLocation
  const location = await getGeoLocation(true);

  // Define markers
  let locationMarkers = [
    { lat: 34.0522, lng: -118.2437, name: 'Cafe 1', description: 'This is Cafe 1 in California' },
    { lat: 37.7749, lng: -122.4194, name: 'Cafe 2', description: 'This is Cafe 2 in California' },
    { lat: 51.5072, lng: -0.1276, name: 'Cafe 3', description: 'This is Cafe 3 in London' },
    { lat: 56.4907, lng: -4.2026, name: 'Cafe 4', description: 'This is Cafe 4 in Scotland' },
    { lat: 48.2082, lng: 16.3738, name: 'Cafe 5', description: 'This is Cafe 5 in Austria' },
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
