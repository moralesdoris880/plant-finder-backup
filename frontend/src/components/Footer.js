import React from 'react';
import {
    Box,
    FooterContainer,
    FooterLink,
    Heading
} from "./FooterStyles"
import '../App.css'

const Footer = () => {
    return (
        <Box>
            <img id="plantlogo" href="/" src="/plant.png" alt="plantlogo" className='plant' height='50px' width='50px' margin= '0 auto'/>
            <Heading>
                <h1 id="hfooter">PLANT FINDER</h1>
                <p id="pfooter">Follow Us</p>
                <br /> 
            </Heading>
            <div id="line"></div>
             <FooterContainer>
                <FooterLink href='../About'> Our Story </FooterLink>
                <FooterLink href='/About/MeetDevelopers'> Leadership </FooterLink>
                <FooterLink href='/About/Contact'> Contact Us</FooterLink>
                <FooterLink href='/LearnMore/Resources'> More Resources </FooterLink>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
