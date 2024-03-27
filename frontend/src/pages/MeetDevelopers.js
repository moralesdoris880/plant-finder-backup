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
              <p1> Senior Media Studies Major and Computer Science minor at Hunter College! Previously working as a Solutions Engineer 2 at Datadog and a Flatiron School alumni for Software Engineering. Currently exploring the world of Cybersecurity and Archaeology.</p1>
            </div>
            <div class="grid-item">
              <img src="/Peter.jpg" alt="Profile"  className='profile'/>          
              <h2> Peter Manos</h2>
              <p1> Senior Environmental Studies Major and Computer Science Minor at Hunter College! Currently working as a research assistant studying Forest Ecology at the CUNY Advanced Science Research Center. Loves hiking, gardening, reading, and playing with his dog Molly.  </p1>
            </div>
            <div class="grid-item">
              <img src="/Naia.jpg" alt="Profile"  className='profile'/>          
              <h2> Naia Lehtinen</h2>
              <p1> Undergraduate student at CUNY Hunter College majoring in Environmental Studies, minoring in Computer Science, and gaining a Certificate in Business Studies. Currently interning as a Public Service Scholar at the Teaching Kitchen and have previous experience in government work, nonprofit work and real estate. My interests include photography, fashion, and fostering environmental awareness.  </p1>
            </div>
            <div class="grid-item">
              <img src="/profile.png" alt="Profile"  className='profile'/>          
              <h2> Daniela Urbano</h2>
              <p1> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p1>
            </div>
            <br></br>
          <br></br>
          <br></br>
          <br></br>
          </div>
      </div>
    </div>
    )
  }
  export default MeetDevelopers;
