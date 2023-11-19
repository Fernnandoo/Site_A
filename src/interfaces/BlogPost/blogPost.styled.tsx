import styled from "styled-components"

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 15rem;
  flex-direction: row;
  align-items: center;
  border-bottom: solid #dddddd 2px;
  background-color: #f5f5f5;
  padding: 1rem;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const BlogPost = styled.div`
    display: grid;
    gap: 1rem;
`;

export const BlogTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const BlogContent = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #4f4f4f;
  font-family: "Roboto", sans-serif;
`;

export const BlogButton = styled.button`
  background-color: #fff;
  color: #cf2e2e;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 550;
  border: none;
`;

export const BlogImage = styled.img`
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: -5px -5px #cf2e2e;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

