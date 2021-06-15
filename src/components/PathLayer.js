import React, {useState} from 'react';
import {Polyline, useMapEvents} from "react-leaflet";
const PathLayer = (props) =>{

    const pathOptions = { color: 'blue' }
    const lastBranchOptions = { color: 'green' }

    //The mouse position - used while we're placing a new marker.
    // const [currentPosition, setCurrentPosition] = useState([]);
    
    const map = useMapEvents({
        mousemove(e) {
            if(props.activePath) {
                //Let's only change the mouse position if we're setting a path.
                // setCurrentPosition([e.latlng.lat,e.latlng.lng]);
                props.setCurrentLatLong([e.latlng.lat,e.latlng.lng]);
            }
        }
    });

    return <div>
        <Polyline pathOptions={pathOptions} positions={props.waypoints} />
        {props.waypoints.length > 0 && 
         props.currentLatLong.length > 0 && 
         props.activePath && 
            <Polyline pathOptions={lastBranchOptions} 
                positions={[props.waypoints[props.waypoints.length - 1], props.currentLatLong]} 
            />
        }
    </div>
    
}
export default PathLayer;