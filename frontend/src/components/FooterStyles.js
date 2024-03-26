import styled from 'styled-components';

export const Box = styled.div`
    padding: 5% 2.5%;
    background: #ADBF97
    // position: absolute;
    bottom: 0;
    width: 95%;
    
    @media (max-width: 1000px){
        // padding: 70px 30px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    // margin-left: 60px;
`;

export const FooterLink = styled.a`
    color: #E2EB99;
    margin-bottom: 20 px;
    font-size: 18px;
    text-decoration: none;
    
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    font-size: 24px;
    color: #E2EB98;
    margin-bottom: 40px;
    font-weight: bold;
    text-Align: center;
`;