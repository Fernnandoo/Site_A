import React from "react";
import * as S from './home.styled';
import Introduction from "./Introduction/Introduction";
import Blog from "@/interfaces/BlogList";
import Crono from "@/interfaces/Crono";
import Gallery from "./Gallery";

export default function Home() {
  return (
    <S.Container>
      <Introduction />
      {/* <Blog /> */}
      <Crono />
      <Gallery />
    </S.Container>
  );
}
