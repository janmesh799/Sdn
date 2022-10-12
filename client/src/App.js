import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Configuration from './components/Configuration/Configuration'
import Stats from './components/Stats/Stats'
import Test from './components/Test/Test';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/configuration" element={<Configuration />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/test" element={<Testin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
