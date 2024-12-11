import React from 'react';
import Futsal from './pages/Futsal';
import Running from './pages/Running'
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaRunning } from 'react-icons/fa'; 
import Football from './pages/Football';
import Detailtango from './pages/Detailtango';
import { Home } from './pages/Home';
impo


const App = () => {
    return (
   <>
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/futsal" element={<Futsal />} />
                <Route path="/running" element={<Running />} />
                <Route path="/football" element={<Football />} />
                <Route path="/detail" element={<Detailtango/>} />
                
            </Routes>
        </Router>
   </>
    );
};

export default App;
