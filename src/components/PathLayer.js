import {Polyline} from "react-leaflet";
const PathLayer = (props) =>{

    const limeOptions = { color: 'blue' }

    return <div>
        <Polyline pathOptions={limeOptions} positions={props.waypoints} />
    </div>
    
}
export default PathLayer;