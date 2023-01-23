import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
// import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from '../store/Slice';
import Legend from './Legend';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken = process.env.REACT_APP_API_KEY;



function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.261240);
    const [lat, setLat] = useState(37.849860);
    const [zoom, setZoom] = useState(12);
    const company = useSelector((state) => state.counter.value)

    const dispatch = useDispatch()

    const hash = {
        'home': [-122.261240, 37.849860],
        'cal': [-122.268380, 37.873110],
        'vsce': [-122.266130, 37.804660],
        'near': [-118.152458, 34.148621],
        'vms': [-0.305370, 51.619640]
    }
    
    const classHash = {
        "marker": 'home',
        "marker-cal": 'cal',
        "marker-vsce": 'vsce',
        'marker-near' : 'near',
        'marker-vms' : 'vms',
    }

    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',    
        center: [lng, lat],
        zoom: zoom,
        });

        map.current.addControl(new mapboxgl.NavigationControl());

        map.current.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                enableHighAccuracy: true
            },

            trackUserLocation: true,

            showUserHeading: true
            })
        );

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
        console.log(e.target.className);
        let refer ='';
        if(e.target.className.length < 20){
            refer = classHash[e.target.className];
        }
        else{
            refer = e.target.ref;
        }
        if(hash[refer] !== undefined){
            map.current.flyTo({center: [hash[refer][0], hash[refer][1]], essential: true, zoom: 12});
            dispatch(incrementByAmount(refer));
        }
    };
 

    return(
        <div className="map">
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div className="legend" onClick={clickHandler}>
                <div  className='marker-near'></div>
                <div  className="marker-vms"></div>
                <div  className="marker-vsce"></div>
                <div  className="marker"></div>
                <div  className="marker-cal"></div>
            </div>
            <div className="email" href="mailto:andrewtocchi@gmail.com">
                <a  href={`mailto:andrewtocchi@gmail.com?subject=im%20looking%20at%20_lat${lat}_long${lng}%20how%20are%20you%20doing?`}>
                    Contact Me
                </a>
            </div>
            <div onClick={clickHandler} ref={mapContainer} className="map-container" />
        </div>
    ) 
}

export default Map;