import { useState } from 'react';
import '../css/About.css';
import Footer from '../components/Footer';

function About() {
  const [ currentState, setCurrentState ] = useState(0);
  const contentItems = [
    {
      headerTitle: `Our Mission`,
      contentText: `The PlantFinder web-program aims to equip its users with the necessary plant information in order to empower them to 
      grow their own plants no matter their geographic or individual circumstances. With readily available, accessible, and 
      consolidated plant indices, users can treat our program as a one-stop shop to guide their planting choices so that everyone 
      can have the tools at their disposal to build a flourishing garden.`,
      imagesrc: `/bernd-dittrich.jpg`
    },
    {
      headerTitle: `Our Story`,
      contentText: `The PlantFinder web-program was developed by a group of undergraduate Computer Science students at Hunter College in New York 
      City, who sought to create a web-based program to create an easy-to-use and individually-tailored plant database in response 
      to the growing urgency of climate change. The developers wanted to embark on a project that would support remediation efforts to 
      restore ideal plant species where they have been adversely impacted by the changing environment. Through the platform, users can 
      explore native plant species tailored to their geographic location and learn about the ecosystem services they provide, such as 
      clean air, water filtration, carbon sequestration, and biodiversity preservation. PlantFinder also educates users on the importance 
      of planting native species and mitigating the spread of invasive plants.`,
      imagesrc: `/daniel-funes-fuentes.jpg`
    },{
      headerTitle: `Motivation`,
      contentText: `A history of environmental degradation and lack of environmental education has left many parts of the United States without strong, 
      forested ecosystems, and rendered individuals lacking knowledge on how to repair them. For this program, the developers wanted to 
      strongly position and propel the notion that plants dont just look pretty, but also provide significant and impactful <b>ecosystem services</b>. 
      These services include providing clean air, water, carbon storage, shade, flood prevention, and food. Native plants are particularly important, 
      as they have evolved for specific geographic ranges and local climates. Native species are essential for preserving biodiversity, as they tend 
      to co-evolve with other species and have mutualistic relationships. On the flip side, a significant threat to environmental health comes 
      from invasive species (which are species introduced to an environment that overpopulate and cause adverse effects). Invasive species are 
      increasingly propagating across North America as a result of global climate change. With PlantFinder, individuals will be able to learn
      more about the plants native to their location, along with the ecosystem services they provide.
      <p3>*Ecosystem Services are the benefits that plants give back to the environment</p3>`,
      imagesrc: `/natalie-pedigo.jpg`
    }
  ]

  function handleContentChange(){
    console.log(currentState)
    if(currentState + 1 >= contentItems.length ){
      setCurrentState(0)
    }
    else {
      setCurrentState(prevCurrentState=>prevCurrentState+1)
    }
    
  }

  return (
  <div >
    {/* <div>     //Merge with MainNavBar
      <div className="sidenav">
        <div className="sidenavhead">
        <h6><b>MORE ABOUT PLANTFINDER</b></h6>
      </div>
      <div className="sidenavbridgewhite"/>
        <p7><a href='/About/MeetDevelopers'> Developers </a></p7> 
        <p7> <a href='/About/Resources'>Helpful Resources</a></p7> 
        <p7> <a href='/About/Contact'>Contact Us </a></p7> 
      </div>
    </div> */}
    <div id="aboutpagecontainer">
      <div id="leftcontent">
        <img src={contentItems[currentState].imagesrc} alt="a group of people with garden tools" id='aboutimg'/>
      </div>
      <div id="rightcontent">
          <h1 id="mission">{contentItems[currentState].headerTitle}</h1>
          <p2>{contentItems[currentState].contentText}</p2>
          <button id="aboutbutton" onClick={handleContentChange}><span class="material-symbols-outlined" id="arrow">arrow_forward</span></button>
      </div>
    </div>
    < Footer />
  </div>
  )
}
export default About;