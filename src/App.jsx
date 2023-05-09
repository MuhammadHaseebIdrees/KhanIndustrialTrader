import React from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Products from './Routes/Products';
import SeamlessPipes from './Routes/SeamlessPipes';
import SeamlessTubes from './Routes/SeamlessTubes';
import ButtWeldFittings from './Routes/ButtWeldFittings';
import ForgedSteelsFittings from './Routes/ForgedSteelsFittings';
import Flanges from './Routes/Flanges';
import Valves from './Routes/Valves';
import Pumps from './Routes/Pumps';
import FooterTopLinks from './Components/FooterTopLinks';

const App = () => {

    return (
        <div className='app_main'>
            <FooterTopLinks />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/products' element={<Products />} />
                <Route exact path='/pipes' element={<SeamlessPipes />} />
                <Route exact path='/tubes' element={<SeamlessTubes />} />
                <Route exact path='/weldfittings' element={<ButtWeldFittings />} />
                <Route exact path='/steelfittings' element={<ForgedSteelsFittings />} />
                <Route exact path='/flanges' element={<Flanges />} />
                <Route exact path='/valves' element={<Valves />} />
                <Route exact path='/pumps' element={<Pumps />} />
            </Routes>
        </div>
    )
}

export default App;