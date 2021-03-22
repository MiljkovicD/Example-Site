let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('contact_map'), {
        center: {
            lat: 34.04365727460067,
            lng: -118.2672541408382
        },
        zoom: 16,
    });
}