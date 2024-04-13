import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LearnMore from './pages/LearnMore';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';

import MeetDevelopers from './pages/MeetDevelopers';
import Resources from './pages/Resources';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter> 
    <NavBar/>
    <Routes> 
      <Route exact strict path='/'element={<App />} />
      <Route exact path='/about'element={<About />} />
      <Route exact path='/learnMore'element={<LearnMore />} />
      <Route exact path='/about/contact'element={<Contact />} />
      <Route exact path='/about/meetdevelopers'element={<MeetDevelopers />} />
      <Route exact path='/about/resources'element={<Resources />} />
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();  
