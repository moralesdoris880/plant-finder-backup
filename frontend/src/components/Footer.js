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
            <Heading>
                <p id="pfooter">Thanks for using</p>
                <h1 id="hfooter">PLANT FINDER</h1>
                <br /> 
                <FooterLink href="/">
                <img  href="/" src="/plant.png" alt="plantlogo"  className='plant' height='50px' width='50px' margin= '0 auto'/>
                </FooterLink>
            </Heading>
             <FooterContainer>
                <FooterLink href='../About'> About </FooterLink>
                <FooterLink href='/About/Contact'> Contact </FooterLink>
                <FooterLink href='/About/MeetDevelopers'> Meet the Developers </FooterLink>
                <FooterLink href='/About/Resources'> Resources </FooterLink>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
