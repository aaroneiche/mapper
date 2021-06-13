import {SVGOverlay} from 'react-leaflet';
import {latLongDistance} from '../scripts/utils';


function Annotations(props) {

  //This will need to map between each point.
  if(props.waypoints.length > 1) {

    const renderedDistances = props.waypoints.map((coords,index) => {
      
      if(props.waypoints[index+1] != undefined) {
        const d = latLongDistance(props.waypoints[index], props.waypoints[index+1]);
        const displayVal = (d > 1000)? `${d/1000}km` : `${d}m`;

        return <SVGOverlay bounds={[props.waypoints[index], props.waypoints[index+1]]}>
          <text stroke="black" dy="0" x="50%" y="50%">{displayVal}</text> 
        </SVGOverlay>
      }  
    });

    return <div>{renderedDistances}</div>
  }else{
    return "Nothing to see here";
  }
}

export default Annotations;