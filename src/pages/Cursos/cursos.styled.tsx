import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.div`
    display: grid;
    margin-bottom: 5rem;
`;

export const Description = styled.span`
    color: #212121;
`;

export const Title = styled.p`
    color: #CF2E2E;
    font-weight: 550;
    font-size: 36px;
    margin-bottom: 1rem;
`;

export const TagArea = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;

export const TagAreaCard = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-left: 0.8rem;
    align-items: end;
`;

export const TagCard = styled.div`
    background-color: #CF2E2E;
    width: fit-content;
    color: #fff;
    border-radius: 4px;
    padding: 3px 0.5rem;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`;

export const Tag = styled.div`
    background-color: #CF2E2E;
    width: fit-content;
    color: #fff;
    border-radius: 4px;
    padding: 3px 0.5rem;
    font-size: 1rem;
    font-weight: 500;
`;

export const CardArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const Card = styled(NavLink)`
    border-radius: 8px;
    border: 2px solid #CF2E2E;
    background-color: #eeeeee;
    width: 15rem;
    height: 15rem;
    box-shadow: -5px 5px #e1e1e1;
    display: grid;
    text-decoration: none;
`;

export const CardTitle = styled.div`
    background-color: #CF2E2E;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    padding: 0.5rem;
`;

export const Indicator = styled.div`
    background-color: #CF2E2E;
    border-bottom-right-radius: 20px;
    width: 3rem;
    height: 3rem;
    padding: 3px 1px 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.div`
    color: #CF2E2E;
    width: 5rem;
    height: 5rem;
    justify-content: center;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`;
