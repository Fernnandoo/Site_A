import { useState } from "react";
import * as S from './header.styled';
import { ExternalLink } from "lucide-react";
import Logo from "@asset/logo-connect-vestibulinho.png"
import { Link } from "react-router-dom"

const Header = () => {

  return (
    <S.Container>
      <Link to={"/"}>
      </Link>
      <S.Nav>
        <S.Item>
          <S.StyledLink
            to='/'
            className={({ isActive }) => isActive ? "active" : ""}>
            Início
          </S.StyledLink>
        </S.Item>
        {/* <S.Item>
          <S.StyledLink className={({ isActive }) => isActive ? "active" : ""} to='/blog'>Blog</S.StyledLink>
        </S.Item> */}
        <S.Item>
          <S.StyledLink className={({ isActive }) => isActive ? "active" : ""} to='/cronograma'>Cronograma</S.StyledLink>
        </S.Item>
        {/* <S.Item>
          <S.StyledLink className={({ isActive }) => isActive ? "active" : ""} to='/provas'>Provas</S.StyledLink>
        </S.Item> */}
        <S.Item>
          <S.StyledLink className={({ isActive }) => isActive ? "active" : ""} to='/#'>Cardápio</S.StyledLink>
        </S.Item>
        <S.Item>
          <S.StyledLink className={({ isActive }) => isActive ? "active" : ""} to='/galeria'>Galeria</S.StyledLink>
        </S.Item>
        <S.Item data-link="true">
          <S.StyledLink to={"https://maps.app.goo.gl/18Gj3rewRrBUrMA7A"} data-link="true" >
            Local
            <ExternalLink size={18} />
          </S.StyledLink>
        </S.Item>
      </S.Nav>
    </S.Container>
  );
}

export default Header
