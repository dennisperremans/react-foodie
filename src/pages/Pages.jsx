import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Detail from './Detail';

import {Route, Routes, BrowserRouter} from 'react-router-dom';

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/recipe/:recipeName" element={<Detail />} />
    </Routes>
  )
}

export default Pages