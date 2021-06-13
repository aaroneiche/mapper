import {Marker, useMapEvents } from 'react-leaflet'

const MarkerLayer = (props) => {
    
    const map = useMapEvents({
        click(e) {   
            if(props.activePath) {
                props.setWaypoints([...props.waypoints,[e.latlng.lat, e.latlng.lng]])
            }else{
                props.setActivePath(true);
            }
            
        },
        contextmenu(e) {
            if(props.activePath) {
                props.setActivePath(false);
            }
        },
        mousemove(e) {
            if(props.activePath) {
                // console.log(`${e.originalEvent.clientX},${e.originalEvent.clientX}`);
            }
        }

    });

    const renderedWaypoints = props.waypoints.map((coords) => {
        return <Marker key={coords[0]} position={coords} />
      });

      return <div>{renderedWaypoints}</div>;
}

export default MarkerLayer;