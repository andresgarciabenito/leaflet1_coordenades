//EX1. FASE1. Crear un mapa utilitzant leaflet i que tingui com a centre La Plaça Catalunya
var mymap = L.map('mapid').setView([41.386963, 2.170045], 17);

L.tileLayer('https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=kVYnuZ3P22KkA5yZKlai', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

