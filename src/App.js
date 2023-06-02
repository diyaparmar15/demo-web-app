import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/home"
import DogPage from "./components/dog";
import CatPage from "./components/cat";
import FishPage from "./components/fish";
import BirdPage from "./components/bird";
import HomeScreen from './components/home';

function App() {

  return (
    <Router>
      <HomeScreen/>
      <Routes>
      <Route path="/home" element={<HomePage/>} />
        <Route path="/dog" element={<DogPage/>}/>
        <Route path="/cat" element={<CatPage/>} />
        <Route path="/fish" element={<FishPage/>} />
        <Route path="/bird" element={<BirdPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
