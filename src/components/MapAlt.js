import React, {Component, useState} from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import PathLayer from './PathLayer';
import MarkerLayer from './MarkerLayer';

function Map(props) {
    const mapStyles = {
        height: "400px",
        width: "600px"
    }
    const attribution = "!!!!PLEASE ADD ATTRIBUTION!!!!";
    const tiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const mapCenter = [39.9528, -75.1638];
    const zoomLevel = 10;  

    return <div>  
    <MapContainer center={mapCenter} zoom={zoomLevel} style={mapStyles}>
        <TileLayer
            attribution={attribution}
            url={tiles}
        />
        
        <MarkerLayer waypoints={props.waypoints} setWaypoints={props.setWaypoints} />
        <PathLayer waypoints={props.waypoints}/>
    </MapContainer>            
</div>
}

export default Map;