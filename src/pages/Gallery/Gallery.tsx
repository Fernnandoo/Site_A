import React from 'react';
import * as S from "./gallery.styled";
import icon from "@asset/icon.png";
import min from "../../assets/imagens/1-min.jpg"
import Min from "../../assets/imagens/2-min.jpg"
import miN from "../../assets/imagens/3-min.jpg"
import MiN from "../../assets/imagens/4-min.jpg"
import MIN from "../../assets/imagens/5-min.jpg"
const Gallery = () => {
  const [imageLoading, setImageLoading] = React.useState(true);

  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image
          src={miN} 
        />
           <S.Image
          src={min} 
        />
           <S.Image
          src={Min} 
        />
             <S.Image
          src={MiN} 
        />
               <S.Image
          src={MIN} 
        />
      </S.ImageContainer>
    </S.Container>
  );
};

export default Gallery;

