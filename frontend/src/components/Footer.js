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
            <Heading>
                Thanks for using PlantFinder!
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
