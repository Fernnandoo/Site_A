import styled from "styled-components";
import { Link, NavLink } from 'react-router-dom';



export const Container = styled.nav`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    position: fixed;
    justify-content: space-between;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    margin-top: 2.5rem;

    /* @media (max-width: 768px) {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    position: fixed;
    justify-content: space-between;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    margin-top: 2.5rem;
    } */
`;

export const Nav = styled.ul`
    border: 2px solid #642e14;
    background-color: #fff;
    padding: 4px;
    align-items: center;
    display: flex;
    list-style: none;
    border-radius: 8px;
    gap: 8px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    /* @media (max-width: 768px) {
        display: none;
        flex-direction: column;
        width: 100%;
        position: static;
    } */
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 4px;
    padding: 4px 12px;
    position: relative;

    &:hover {
        opacity: 1;
    }

    &[data-link="true"] {
        background-color: #642e14;
    }

    /* @media (max-width: 768px) {
        width: 100%;

        &:hover {
            opacity: 1;
        }

        &[data-link="true"] {
            background-color: #642e14;
        }
    } */
`;

// export const Logo = styled.img`
//   width: 15rem;
// `

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    position: relative;
    color: #642e14;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
  gap: 0.5rem;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: #642e14;
        transition: width 0.3s;
    }

    &:hover:after {
        width: 100%;
    }

   &[data-link="true"] {
        color: #fff;

        &::after {
            width: 0;
        }

        &:hover::after {
            width: 0;
        }
    }

    &.active {
        &::after {
        width: 20%;
        }

        &:hover:after {
        width: 100%;
    }
    }
`;
