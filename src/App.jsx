import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsWidget from './Components/NewsWidget';
import WeatherWidget from './Components/WeatherWidget';
import Navbar from './Components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path='/newsWidget' element={<NewsWidget />} />
                    <Route path='/weatherWidget' element={<WeatherWidget />} />
                    <Route path='/' element={<h1>Welcome to the Dashboard</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
