import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Upload from './pages/Upload';
import Verify from './pages/Verify';

const App = () => {
    return (
        <>
            <Navbar />
            <div className="p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/listing" element={<Listing />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/verify" element={<Verify />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
