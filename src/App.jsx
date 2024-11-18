import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsWidget from './Components/NewsWidget';
import WeatherWidget from './Components/WeatherWidget';
import Navbar from './Components/Navbar';
import Home from './Pages/Home.jsx';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path='/newsWidget' element={<NewsWidget />} />
                    <Route path='/weatherWidget' element={<WeatherWidget />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
