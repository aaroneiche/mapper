import './App.css';
// import Map from './components/Map.js';
import Map from './components/MapAlt';
import {useState} from 'react';

function App() {

  const [waypoints,setWaypoints] = useState([[39.8528, -75.1638]]);

  const clearPoints = () => {
    setWaypoints([]);
  }
  
  return (
    <div className="App">
      Welcome to Mapper
      <Map waypoints={waypoints} setWaypoints={setWaypoints} />
      <button onClick={clearPoints}>Clear Points</button>
    </div>
  );
}

export default App;
