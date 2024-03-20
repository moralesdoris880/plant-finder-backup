import React from 'react';
import {
    Box,
    FooterContainer,
    Column,
    FooterLink
} from "./FooterStyles"

const Footer = () => {
    return (
        <Box>
            <h1 style ={{
                color: '#BAD9A2',
                textAlign: 'center',
                marginTop: '10px'
            }}
            >
                Thanks for using PlantFinder!
            </h1>
            <FooterContainer>
                <Column><FooterLink href='../pages/About'> About </FooterLink> </Column> 
                <Column> <FooterLink href='../pages/Contact'> Contact </FooterLink></Column>
                <Column> <FooterLink href='../pages/MeetDevelopers'> Meet the Developers </FooterLink></Column>
            </FooterContainer>
        </Box>
    );
};
export default Footer;