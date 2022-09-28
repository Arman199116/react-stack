import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Navigation from './components/Navigation';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <>
            <Navigation />
            <br/>
            <Routes >
                <Route path='/' element={<HomePage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
            </Routes>
        
        </>
    );
}

export default App;
