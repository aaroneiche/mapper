import {Marker, useMapEvents } from 'react-leaflet'

const MarkerLayer = (props) => {
    
    const map = useMapEvents({
        click(e) {   
            props.setWaypoints([...props.waypoints,[e.latlng.lat, e.latlng.lng]])
        },
        contextmenu(e) {
            console.log('Right click handler :)');
        }
    });

    const renderedWaypoints = props.waypoints.map((coords) => {
        return <Marker key={coords[0]} position={coords} />
      });

      return <div>{renderedWaypoints}</div>;
}

export default MarkerLayer;