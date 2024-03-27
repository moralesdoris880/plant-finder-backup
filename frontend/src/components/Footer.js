import React from 'react';
import {
    Box,
    FooterContainer,
    FooterLink,
    Heading
} from "./FooterStyles"

const Footer = () => {
    return (
        <Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Heading>
                Thanks for using PlantFinder! <br />
                <img src="/plant.png" alt="plantlogo"  className='Image' height='50px' width='50px' margin= '0 auto'/>
            </Heading>
             <FooterContainer>
                <FooterLink href='../About'> About </FooterLink>
                <FooterLink href='/About/Contact'> Contact </FooterLink>
                <FooterLink href='/About/MeetDevelopers'> Meet the Developers </FooterLink>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
