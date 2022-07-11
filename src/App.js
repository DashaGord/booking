import React from 'react';
import './App.css';
import App_header from './components/App_header';
import App_footer from './components/App_footer';
import {BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import ApartmentPage from './pages/apartment-page';
import SearchForm from './pages/SearchForm';
import Login from './pages/login';
import Registration from './pages/registration/registration';
import TestPage from './pages/test';



function App() {
    return (
        <Router>
            <App_header/>
            <Routes>
                <Route exact path='/' exact element={<Home/>}/>
                <Route path='/ApartmentPage' element={<ApartmentPage/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/SearchForm' element={<SearchForm/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/test' element={<TestPage/>}/>
            </Routes>
            <App_footer/>
        </Router>
    );
}

export default App;

