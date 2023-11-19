import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
`;

export const Top = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: fit-content;
`;

export const CursoImage = styled.img`
    z-index: -1;
    border-radius: 8px;
`;
export const TopContainer = styled.div`
    border-radius: 8px;
    width: fit-content;
    
`;

export const TopContentContainer = styled.div`
    background-color: #CF2E2E;
    border-radius: 8px;
    position: absolute;
    padding: 15px;
    left: 0;
    bottom: 0;
    margin-bottom: 20px;
    margin-left: 20px;
`;

export const TopTitle = styled.div`
    color: #fff;
    font-size: 36px;
`;

export const ContentContainer = styled.div`
    color: #fff;
    display: flex;
    flex-direction: row;
`;
export const TopContent = styled.div`
    margin: 5px;
    display: flex;
    font-size: 12px;
    text-align: center;
    align-items: center;
    svg {
        margin-right: 5px;
    }
`;

export const Main = styled.div`
    padding: 15px;
`;

export const Title = styled.div`
    color: #CF2E2E;
    font-size: 36px;
    margin-top: 3rem;
`;

export const Content = styled.p`
    color: #212121;
    font-size: 18px;
    margin-top: 10px;
`;

export const TabContainer = styled.div`
  background-color: #eeeeee;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1rem;
`;

export const TabHeader = styled.div`
  display: flex;
  border-bottom: 2px solid #e1e1e1;
`;

export const TabOption = styled.div<{ active: boolean }>`
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? '4px solid #CF2E2E' : 'none')};

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const TabContent = styled.div`
  padding: 20px;
`;
