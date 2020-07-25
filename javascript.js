//EX1. FASE1. Crear un mapa utilitzant leaflet i que tingui com a centre La Plaça Catalunya.
var mymap = L.map('mapid').setView([41.387225,2.168548], 17);

L.tileLayer('https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=kVYnuZ3P22KkA5yZKlai', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

//EX1. FASE2. Posar un marcador a la ubicació Carrer Balmes 16.
var marker = L.marker([41.386943, 2.165957]).addTo(mymap);

//EX1. FASE3. Al fer click al marcador, ens haurà de mostrar un missatge amb la direcció.

function onMapClick(e) {
    marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante Mediterráneo<br> Carrer de Balmes, 16, 08007 Barcelona").openPopup();

}

mymap.on('click', onMapClick);