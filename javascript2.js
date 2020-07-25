var mymap = L.map('mapid').setView([41.387225,2.168548], 14);

L.tileLayer('https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=kVYnuZ3P22KkA5yZKlai', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


var popup = L.popup();

function onMapClick(e) {

    popup
        .setLatLng(e.latlng)
        .setContent("Les coordenades són: " + e.latlng.toString())
        .openOn(mymap); 
    //fer zoom amb popup
    mymap.setView(e.latlng, 30);
    
}

mymap.on('click', onMapClick);