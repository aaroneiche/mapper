import './App.css';
// import Map from './components/Map.js';
import Map from './components/MapAlt';
import {useState, useEffect} from 'react';

function App() {

  const [waypoints,setWaypoints] = useState([[39.8528, -75.1638]]);

  return (
    <div className="App">
      Welcome to Mapper
      <Map waypoints={waypoints} setWaypoints={setWaypoints} />
    </div>
  );
}

export default App;
