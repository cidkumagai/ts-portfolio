import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Work } from './pages/Work/Work';

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/work' element={<Work />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
