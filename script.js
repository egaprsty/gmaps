mapboxgl.accessToken = 'pk.eyJ1IjoibG9jYWxoZWFydCIsImEiOiJja2hrNDAzNmwwZmFpMnRwODhqdGNsMHUwIn0.9BT4xmUHRu0_e5JCB9gV1g';

navigator.geolocation.getCurrentPosition(successPosition, errorLocation, {enableHighAccuracy: true});

function successPosition(position) { 
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {}

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
    })
}
