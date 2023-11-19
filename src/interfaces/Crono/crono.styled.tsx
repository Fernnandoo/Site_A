import styled from "styled-components"

export const Crono = styled.div`
    background-color: #fff;
    display: grid;
`;

export const Paragraph = styled.p`
color: #555;
margin-bottom: 2rem;
`

export const CronoContainer = styled.div`
display: flex;
flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
    align-content: start;
max-height: 35rem;
max-width: 100%;

@media (max-width: 768px) {
  max-height: 100%;
}
`;

export const Content = styled.div`
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    background-color: #e5e5e5e5;
    height: 5rem;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
}

`;

export const CronoCard = styled.div`
    font-size: 18px;
    background-color: #d48a6f;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 5rem;
    width: 100%;
    padding: 0.5rem;
`;

export const CronoDate = styled.p`
    padding: 1rem;
    color: #fff;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    text-align: center;
`;

export const Description = styled.div`
    background-color: #eee;
    padding: 1rem;
    display: flex;
    align-items: center;
`

export const DescText = styled.p`
    color: #212121;
    font-size: 1.125rem;
`
