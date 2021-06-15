
const WayPointList = props => {

    const listItems = props.waypoints.map(point=>{
        return <li className="waypoint-item">
            <div>Lat: {point[0]}</div>
            <div>Long: {point[1]}</div>
        </li>;
    })

    return <ul className="waypoint-list">
        {listItems}
    </ul>
}

export default WayPointList;