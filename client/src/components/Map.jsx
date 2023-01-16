import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_API_KEY;


function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.261240);
    const [lat, setLat] = useState(37.849860);
    const [zoom, setZoom] = useState(12);
    const [company, setCompany] = useState('home')

    const hash = {
        'home': [-122.261240, 37.849860],
        'cal': [-122.268380, 37.873110],
        'vsce': [-122.266130, 37.804660],
        'near': [-118.152458, 34.148621],
        'vms': [-0.305370, 51.619640]
    }

    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',    
        center: [lng, lat],
        zoom: zoom});

        map.current.addControl(new mapboxgl.NavigationControl());

        const me = document.createElement('div');
        me.className = 'marker';
        me.ref ='home';

        const vsce = document.createElement('div');
        vsce.className = 'marker-vsce';
        vsce.ref = 'vsce';

        const vms = document.createElement('div');
        vms.className = 'marker-vms';
        vms.ref = 'vms';

        const cal = document.createElement('div');
        cal.className = 'marker-cal';
        cal.ref = 'cal';

        const near = document.createElement('div');
        near.className = 'marker-near';
        near.ref = 'near';

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

    const clickHandler = (e) => {
        e.preventDefault();
        console.log(e.target.ref);
        let refer = e.target.ref;
        if(hash[refer] !== undefined){
            map.current.flyTo({center: [hash[refer][0], hash[refer][1]], essential: true, zoom: 12});
            setCompany(refer);
        }
    };
 

    return(
        <div className="map">
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div onClick={clickHandler} ref={mapContainer} className="map-container" />
        </div>
    ) 
}

export default Map;