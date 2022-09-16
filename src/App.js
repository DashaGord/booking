import React from 'react';
import './App.css';
import App_header from './components/App_header/App_header';
import App_footer from './components/App_footer/App_footer';
import {BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import ApartmentPage from './pages/apartment-page';
import {SearchForm} from './pages/SearchForm';
import Login from './pages/login';
import Registration from './pages/registration/registration';




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
            </Routes>
            <App_footer/>
        </Router>
    );
}

export default App;

