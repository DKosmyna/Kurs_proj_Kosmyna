var map = L.map('map').setView([48.942722, 24.699596], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([48.94326363844912, 24.73193558690218]).addTo(map);



marker.bindPopup("<b>Interno</b><br>вул. Вовчинецька 223").openPopup();

