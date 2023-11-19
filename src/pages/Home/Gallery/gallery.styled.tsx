import styled from "styled-components";

export const Container = styled.div`
    color: #fff;
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    padding: 1rem 0;
    height: 30rem;
    align-content: center;
    gap: 3rem;
`

export const Background = styled.div`
    background-color: #d48a6f;
    width: 100%;
    height: 100%;
    max-height: 30rem;
    position: absolute;
    z-index: -1;
    left: 0;
`

export const Eye = styled.img`
  width: 7rem;
  height: 7rem;
  position: absolute;
  top: 6.5rem;
  right: 1.5rem;

`

export const Col1 = styled.div`
display: grid;
gap: 1rem;
align-content: center;
position: relative;
`

export const Col2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-items: center;
`

export const Image = styled.img`
    width: 100%;
    height: 12rem;
    object-fit: cover;
    aspect-ratio: 1 / 4;
    border-radius: 8px;
    cursor: pointer;

    &[data-img="1"] {

    }

    &[data-img="2"] {
      height: 9rem;
      width: 90%;
      justify-self: start;
      transform: translateY(10%);
    }

    &[data-img="3"] {
      height: 10rem;
      width: 80%;
      justify-self: end;
      transform: translateX(10%);
    }

    &[data-img="4"] {
      width: 60%;
      height: 8rem;
      transform: translate(-20%, -27%);
    }


    &:hover {
      filter: brightness(0.8);
    }
`
