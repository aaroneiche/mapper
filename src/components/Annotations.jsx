import {Marker, Tooltip} from 'react-leaflet';
import { latLngBounds} from 'leaflet';
import {latLongDistance} from '../scripts/utils';


function Annotations(props) {

  let runningTotal = 0;

  //This will need to map between each point.
  if(props.waypoints.length > 1) {

    const renderedDistances = props.waypoints.map((coords,index) => {
      
      if(props.waypoints[index+1] != undefined) {
        const d = latLongDistance(props.waypoints[index], props.waypoints[index+1]);
        runningTotal += d;

        // TODO: replace this with a miles calculation conversion.
        const displayVal = (d > 1000)? `${d/1000}km` : `${d}m`;

        return <Marker opacity="0"  position={latLngBounds([props.waypoints[index], props.waypoints[index+1]]).getCenter()}>
            <Tooltip offset={[-20,25]} direction="false" permanent>{displayVal}</Tooltip>
          </Marker>
      }  
    });

    props.setTotalDistance(runningTotal);
    const displayTotal = (runningTotal > 1000)? `${runningTotal/1000}km` : `${runningTotal}m`;

    return <div>{renderedDistances}
        <Marker opacity="0"  position={[
            props.waypoints[props.waypoints.length-1][0], 
            props.waypoints[props.waypoints.length-1][1] 
          ]}>
          <Tooltip offset={[-20,25]} direction="false" permanent>Total:<br/>{displayTotal}</Tooltip>
        </Marker>
    </div>
  }else{
    return "Nothing to see here";
  }
}

export default Annotations;