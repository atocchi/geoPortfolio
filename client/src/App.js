import logo from './logo.svg';
import Map from './components/Map';
import Background from './components/Background'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'


function App() {

  return (
    <div className="App">
        <Map />
        <Background />
    </div>
  );
}

export default App;
