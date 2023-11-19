import colors from "@/styles/theme"
import styled from "styled-components"

export const Container = styled.div`
display: grid;
gap: 1rem;
max-width: 44rem;
margin: 0 auto;
`

export const Header = styled.header`
display: grid;
width: 100%;
border-radius: 8px;
overflow: hidden;
`

export const Image = styled.img`
grid-area: 1 / -1;
width: 100%;
`

export const Info = styled.div`
grid-area: 1 / -1;
align-self: end;
justify-self: start;
margin: 1rem;
background-color: ${colors.red};
padding: 1rem;
border-radius: 8px;
  display: grid;
`

export const Title = styled.h1`
color: #fff;
font-size: 2.125rem;
`

export const Description = styled.div`
grid-column: 1 / -1;
display: flex;
gap: 1rem;
`

export const DescItem = styled.span`
display: flex;
gap: 0.25rem;
align-items: center;
`

export const DescText = styled.p`
  color: #fff;
  font-size: 1rem;
`

export const Share = styled.div``

export const Content = styled.div`
  display: grid;
  gap: 1rem;
  min-height: 20rem;
  align-items: start;
`

export const Paragraph = styled.span`
background-color: #eee;
position: relative;
  z-index: 1;
padding: 1rem;
border-radius: 4px;
line-height: 1.5;
font-size: 1.125rem;
  font-family: 'Roboto', sans-serif;

&[data-typing="true"] {
  span {
    position: relative;

  }
  span::after {
    content: "";
    background-color: ${colors.red};
    width: 3rem;;
    height: 100%;
    position: absolute;
    border-radius: 2px;
    z-index: -1;
    opacity: 0.5;
    transform: translateX(-100%);
  }
}
`

export const Controls = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-bottom: 1rem;
  background-color: ${colors.red};
  padding: 0.5rem;
  border-radius: 4px;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  gap: 1rem;

  &[data-paused="true"] {
    animation: tilt-n-move-shaking 2s ease-in-out infinite;
  }

    @keyframes tilt-n-move-shaking {
  0% { transform: translate(-50%, 0) rotate(0deg); }
  20% { transform: translate(-47%, 5px) rotate(5deg); }
  30% { transform: translate(-50%, 0) rotate(0eg); }
  40% { transform: translate(-53%, 5px) rotate(-5deg); }
  50% { transform: translate(-50%, 0) rotate(0deg); }
  55% { transform: translate(-50%, 0) rotate(0deg); }
  60% { transform: translate(-50%, 0) rotate(0deg); }
  80% { transform: translate(-50%, 0) rotate(0deg); }
  90% { transform: translate(-50%, 0) rotate(0deg); }
  100% { transform: translate(-50%, 0) rotate(0deg); }
}
`
