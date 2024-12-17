import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Futsal from './pages/Futsal';
import Running from './pages/Running';
import  Home from './pages/Home';
import Football from './pages/Football';
import Detailtango from './pages/Detailtango';
import Detailbbs from './pages/Detailbbs';
import Detailstrive from './pages/Detailstrive';
import Detailascend from './pages/Detailascend';
import Detailliberte from './pages/Detailliberte';
import Detaillaegon from './pages/Detailaegon';
import Detailglide from './pages/Detailglide';
import Detailstars from './pages/Detailstars';





const App = () => {
    return (
   <>
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/futsal" element={<Futsal />} />
                <Route path="/running" element={<Running />} />
                <Route path="/football" element={<Football />} />
                <Route path="/detailtango" element={<Detailtango/>} />
                <Route path="/detailbbs" element={<Detailbbs />} />
                <Route path="/detailascend" element={<Detailascend />} />
                <Route path="/detailstrive" element={<Detailstrive />} />
                <Route path="/detailaegon" element={<Detaillaegon />} />
                <Route path="/detailliberte" element={<Detailliberte />} />
                <Route path="/detailstars" element={<Detailstars />} />
                <Route path="/detailglide" element={<Detailglide />} />
                
            </Routes>
        </Router>
   </>
    );
};

export default App;
