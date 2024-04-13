import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    padding: 20px;  
    background: #ADBF97;
    position: relative;

    
    @media (max-width: 1000px){
        // padding: 70px 30px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 60px;
`;

export const FooterLink = styled.a`
    color: #E2EB99;
    margin-bottom: 20 px;
    font-size: 18px;
    font-family:"Abel", sans-serif;
    text-decoration: none;
    
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    font-size: 52px;
    font-family: "Koulen", sans-serif;
    color: #E2EB98;
    text-align: center;
    margin-bottom: 5px;
`;

