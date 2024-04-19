import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    padding: 20px;  
    background-color: #ADBF97;
    position: relative;
    align-items: center;
    @media (max-width: 1000px){
        // padding: 70px 30px;
    }
    width:100vw;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    margin-left:10px;
    margin-top:0px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 60px;
`;

export const FooterLink = styled.a`
    color: black;
    margin-bottom: 20 px;
    font-size: 18px;
    font-family: "Abel", sans-serif;
    text-decoration: none;
    margin-left:10px;
    text-align:left;
    &:hover {
        color: #FAFAFA;
        transition: 200ms ease-in;
    }
    padding-top:20px;
`;

export const Heading = styled.p`
font-family: "Raleway", serif;
font-weight: 800;
font-style: normal;
color: #1A2B28;
font-size: 40px;
padding: 12px;
width: 350px;
margin-left: 30%;
text-shadow: 3px 3px #ADBF97;
`;

