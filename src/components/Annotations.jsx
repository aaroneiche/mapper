import {Marker, Tooltip} from 'react-leaflet';
import { latLngBounds} from 'leaflet';
import {latLongDistance} from '../scripts/utils';


function Annotations(props) {
  //This will need to map between each point.
  if(props.waypoints.length > 1) {

    const renderedDistances = props.waypoints.map((coords,index) => {
      
      if(props.waypoints[index+1] != undefined) {
        const d = latLongDistance(props.waypoints[index], props.waypoints[index+1]);

        // TODO: replace this with a miles calculation conversion.
        const displayVal = (d > 1000)? `${d/1000}km` : `${d}m`;

        return <Marker opacity="0"  position={latLngBounds([props.waypoints[index], props.waypoints[index+1]]).getCenter()}>
            <Tooltip offset={[-20,25]} direction="false" permanent>{displayVal}</Tooltip>
          </Marker>
      }  
    });

    return <div>{renderedDistances}</div>
  }else{
    return "Nothing to see here";
  }
}

export default Annotations;