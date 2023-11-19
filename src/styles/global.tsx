import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Outfit', sans-serif;
}

a {
color: inherit;
text-decoration: none;
}

`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 0.5rem;
`

export const Container = styled.div`
  flex: 1;
  width: 100%;
  padding: 0 1rem;
  max-width: 70rem;
  margin: 8rem auto;
`
