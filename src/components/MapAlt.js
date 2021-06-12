import React, {Component} from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'


function MarkerLayer() {
    let waypoints = [[39.9528, -75.1638]];
    
    const map = useMapEvents({
        click() {
            console.log(map.locate());
            // waypoints.push(map.locate)
        }
    });


    const renderedWaypoints = waypoints.map(coords => {
        return (
            <Marker position={coords} />
        )
      });

      return <div>{renderedWaypoints}</div>;
}

function Map() {

    // return <div>I am a Map </div>
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
        
        <MarkerLayer/>
    </MapContainer>            
</div>
}

export default Map;