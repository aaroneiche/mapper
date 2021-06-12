import React, {Component, useState} from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'


const MarkerLayer = () => {
    
    const [waypoints, setWaypoints] = useState([]);
    const map = useMapEvents({
        click(e) {   
            setWaypoints([...waypoints,[e.latlng.lat, e.latlng.lng]])
        },
        contextmenu(e) {
            console.log('Right click handler :)');
        }
    });


    const renderedWaypoints = waypoints.map((coords) => {
        console.log(coords);
        return <Marker key={coords[0]} position={coords} />
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