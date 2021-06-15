import './App.css';
import Map from './components/Map';
import WayPointList from './components/WayPointList';
import {useState} from 'react';
import { wait } from '@testing-library/dom';

function App() {

  const [waypoints,setWaypoints] = useState([]);
  const [activePath,setActivePath] = useState(false);
  const [totalDistance, setTotalDistance] = useState(0);
  const [currentLatLong, setcurrentLatLong] = useState([]);

  const clearPoints = () => {
    setWaypoints([]);
  }
  
  return (
    <div className="App">
      Welcome to Mapper

    <div className="wrapper">
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
        <button onClick={clearPoints}>Clear Points</button>
      </div>
      <div >
        <WayPointList waypoints={waypoints}/>
        
      </div>
      <div class="stats-wrapper">
          <div><b>Current Latitude: </b> {currentLatLong[0]}˚</div>
          <div><b>Current Longitude: </b> {currentLatLong[1]}˚</div>
          <div><b>Total Distance: </b> {totalDistance}</div>
        </div>
              
    </div> 
      
      
    </div>
  );
}

export default App;
