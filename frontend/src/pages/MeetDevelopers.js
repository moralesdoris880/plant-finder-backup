import * as React from 'react';
import './MeetDevelopers.css';


function MeetDevelopers() {
  return (
    <div >
      <div>
          <h1> Meet our developers! </h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div class="grid-container">
            <div class="grid-item">
              <img src="/Doris.jpg" alt="Profile"  className='profile' />          
              <h2> Doris Morales</h2>
              <p1> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p1>
            </div>
            <div class="grid-item">
              <img src="/Peter.jpg" alt="Profile"  className='profile'/>          
              <h2> Peter Manos</h2>
              <p1> Senior Environmental Studies Major and Computer Science Minor at Hunter College! Currently working as a research assistant studying Forest Ecology at the CUNY Advanced Science Research Center. Loves hiking, gardening, reading, and playing with his dog Molly.  </p1>
            </div>
            <div class="grid-item">
              <img src="/Naia.jpg" alt="Profile"  className='profile'/>          
              <h2> Naia Lehtinen</h2>
              <p1> Student at CUNY Hunter College and currently employed Part-time at Compass. My major is in Environmental Studies and I hope to pursue other opportunities through internships, volunteering and working.   </p1>
            </div>
            <div class="grid-item">
              <img src="/profile.png" alt="Profile"  className='profile'/>          
              <h2> Daniela Urbano</h2>
              <p1> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p1>
              <br></br>
          <br></br>
          <br></br>
          <br></br>
            </div>
          </div>
         
      </div>
    </div>
    )
  }
  export default MeetDevelopers;
