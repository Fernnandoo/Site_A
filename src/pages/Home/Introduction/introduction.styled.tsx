import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
    justify-content: space-between;
    justify-items: center;
    color: #fff;
    height: 40rem;
`

export const Background = styled.div`
    position: absolute;
    background-color: #d48a6f;
    top: 0;
    left: 0;
    width: 100%;
    height: 50rem;
    z-index: -1;
`

export const Title = styled.h1`
font-size: 4rem;
line-height: 1;
margin-bottom: 0.5rem;
`

export const Left = styled.div`
    display: grid;
    align-content: center;
    align-self: start;
    margin-top: 2.5rem;
`

export const Description = styled.p`
color: #f5f5f5;
font-size: 1.125rem;
font-family: 'Roboto', sans-serif;

span {
    font-weight: bold
}

margin-bottom: 2rem;
`

export const Student = styled.div`
    position: relative;
margin-top: 2.5rem;
`

export const BubbleContainer = styled.div`
position: absolute;
top: -15%;
left: -20%;
`

export const Bubble = styled.div`
position: relative;
width: 200px;
`

export const BubbleText = styled.p`
    position: absolute;
    max-width: 10ch;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.7rem;
    color: #642e14;
    font-weight: 600 
`

export const Button = styled.button``

export const Blog = styled.div`
    grid-column: 1 / -1;
    text-align: center;
    display: grid;
    justify-items: center;
    gap: 0.5rem;
    align-content: center;

    span {
      font-size: 1.5rem;
    }
`
