import styled from "styled-components"

export const Footer = styled.div`
    background-color: #EEEEEE;
    height: 15rem;
`;

export const FooterBottom = styled.div`
    height: 10vh;
    background-color: #d48a6f;
`;

export const Copy = styled.span`
     color: #fff;
     display: grid;
     height: 100%;
     justify-content: center;
     align-items: center;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    margin-top: 15px;
    margin-bottom: 2rem;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: fit-content;
`;

export const Title = styled.h3`
    color: #212121;
    font-size: 24px;
    margin-bottom: 5px;
    font-weight: 500;
`;

export const Item = styled.a`
    color: #555555;
    text-decoration: none;
    font-size: 18px;
`;
