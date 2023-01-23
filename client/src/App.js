import logo from './logo.svg';
import Map from './components/Map';
import Background from './components/Background'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {useState} from 'react';
import Modal from './components/Modal'


function App() {
  const [bool, setBool] = useState();

  return (
    <div className="App">
        <Modal bool={bool} setBool={setBool} />
        <Map />
        <Background />
    </div>
  );
}

export default App;
