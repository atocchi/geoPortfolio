import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Marker from './Marker';
mapboxgl.accessToken = process.env.REACT_APP_API_KEY;


function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.261240);
    const [lat, setLat] = useState(37.849860);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',    
        center: [lng, lat],
        zoom: zoom});

        const me = document.createElement('div');
        me.className = 'marker';

        const vsce = document.createElement('div');
        vsce.className = 'marker-vsce';

        const vms = document.createElement('div');
        vms.className = 'marker-vms';

        const cal = document.createElement('div');
        cal.className = 'marker-cal';

        const near = document.createElement('div');
        near.className = 'marker-near';

        

        new mapboxgl.Marker(me).setLngLat([-122.261240, 37.849860])
            .addTo(map.current);

        new mapboxgl.Marker(cal).setLngLat([-122.268380, 37.873110])
            .addTo(map.current);

        new mapboxgl.Marker(vsce).setLngLat([-122.266130, 37.804660])
            .addTo(map.current);

        new mapboxgl.Marker(near).setLngLat([-118.152458, 34.148621])
            .addTo(map.current);

        new mapboxgl.Marker(vms).setLngLat([-0.305370, 51.619640])
            .addTo(map.current);
        
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
            map.current.on('move', () => {
                setLng(map.current.getCenter().lng.toFixed(4));
                setLat(map.current.getCenter().lat.toFixed(4));
                setZoom(map.current.getZoom().toFixed(2));
            });
        });
 

    return(
        <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    ) 
}

export default Map;