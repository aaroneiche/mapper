import React, {Component} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

class Map extends Component {
    //This is going to be our map.

    constructor() {
        super();
    }
    componentDidMount() {
        //TODO: Populate with saved markers. Probably attach this to a hook. 
    }
    render() {
        const mapStyles = {
            height: "300px",
            width: "500px"
        }
        const attribution = "!!!!PLEASE ADD ATTRIBUTION!!!!";
        const tiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
        const mapCenter = [39.9528, -75.1638];
        const zoomLevel = 12;  

        return <div>  
            <MapContainer center={mapCenter} zoom={zoomLevel} style={mapStyles}>
                <TileLayer
                    attribution={attribution}
                    url={tiles}
                />
            </MapContainer>            
        </div>
    }
}

export default Map;