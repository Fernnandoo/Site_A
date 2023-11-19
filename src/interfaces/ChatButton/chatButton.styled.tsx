import colors from '@/styles/theme';
import styled from 'styled-components';

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #CF2E2E;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  font-size: 24px;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);

  &:hover {
    background-color: #BA2929;
  }
`;

export const Content = styled.div`
position: fixed;
bottom: 1rem;
right: 1rem;
z-index: 100;
border-radius: 8px;
overflow: hidden;
border: 2px solid ${colors.red}
`

export const Header = styled.div`
background-color: ${colors.red};
  color: #fff;
padding: 0.5rem 1rem;
display: flex;
justify-content: space-between;
align-items: center;

span {
  cursor: pointer;
}

p {
  font-size: 1.125rem;
  font-weight: 500
}

`
