const map = new mapboxgl.Map({
    accessToken: mapToken,
    container: 'map',
    center: listing.geometry.coordinates,
    zoom: 9
});

const marker1 = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`)
            .setMaxWidth("300px")
    )
    .addTo(map);