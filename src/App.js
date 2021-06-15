import './App.css';
import Map from './components/Map';
import WayPointList from './components/WayPointList';
import {useState} from 'react';

function App() {

  const [waypoints,setWaypoints] = useState([]);
  const [activePath,setActivePath] = useState(false);
  const [totalDistance, setTotalDistance] = useState(0);
  const [currentLatLong, setcurrentLatLong] = useState([]);

  const clearPoints = () => {
    setWaypoints([]);
  }

  const instructions = ()=>{
    if(activePath) {
      return <div>Use the left Mouse button to add points to a path. Use the right button to stop</div>
    }else{
      return <div>Click on the left mouse button to enter path setting mode</div>
    }
  }
  
  return (
    <div className="App">
      Welcome to Mapper

    <div className="wrapper">
    {instructions()}
      <div>
        <Map 
          waypoints={waypoints} 
          setWaypoints={setWaypoints} 
          activePath={activePath} 
          setActivePath={setActivePath} 
          totalDistance={totalDistance}
          setTotalDistance={setTotalDistance}
          setCurrentLatLong={setcurrentLatLong}
          currentLatLong={currentLatLong}
        />
        <div className="instructions">
          <button onClick={clearPoints}>Clear Points</button>
        </div>

        
      </div>
      <div >
        <WayPointList waypoints={waypoints}/>
        
      </div>
      <div class="stats-wrapper">
          <div><b>Current Latitude: </b> {currentLatLong[0]}˚</div>
          <div><b>Current Longitude: </b> {currentLatLong[1]}˚</div>
          <div><b>Total Distance: </b> {totalDistance.toFixed(2)} mi</div>
        </div>
              
    </div> 
      
      
    </div>
  );
}

export default App;
