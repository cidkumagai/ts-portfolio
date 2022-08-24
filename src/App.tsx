import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Work } from './pages/Work/Work';

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/ts-portfolio' element={<Home />} />
                <Route path='/ts-portfolio/Work' element={<Work />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
