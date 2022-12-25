import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Toolbar from './Toolbar';
import Dasboard from './Dasboard';

function App() {
  return (
    <div >
     <Dasboard></Dasboard>
    </div>
  );
}

export default App;
