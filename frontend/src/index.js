import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LearnMore from './pages/LearnMore';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Weed from './pages/Weed';
import MeetDevelopers from './pages/MeetDevelopers';
import Resources from './pages/Resources';
import Mulch from './pages/Mulch';
import FAQ from './pages/FAQ';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter> 
    <NavBar/>
    <Routes> 
      <Route exact strict path='/'element={<App />} />
      <Route exact path='/about'element={<About />} />
      <Route exact path='/learnMore'element={<LearnMore />} />
      <Route exact path='/learnMore/faq'element={<FAQ />} />
      <Route exact path='/learnMore/resources'element={<Resources />} />
      <Route exact path='/about/contact'element={<Contact />} />
      <Route exact path='/about/meetdevelopers'element={<MeetDevelopers />} />
      <Route exact path='/tools/weed'element={<Weed />} />
      <Route exact path='/tools/mulch'element={<Mulch />} />
    </Routes>
    </BrowserRouter>
);
