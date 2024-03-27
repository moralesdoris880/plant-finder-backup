import React from 'react';
import {
    Box,
    FooterContainer,
    Column,
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
                <Column><FooterLink href='../About'> About </FooterLink> </Column> 
                <Column> <FooterLink href='/About/Contact'> Contact </FooterLink></Column>
                <Column> <FooterLink href='/About/MeetDevelopers'> Meet the Developers </FooterLink></Column>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
