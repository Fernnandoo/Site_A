import Button from "@/components/Button";
import { SubTitle } from "@/components/Text";
import { Search } from "lucide-react";
import React from "react";
import * as S from "./gallery.styled";
import eyeImage from "@asset/emoji-eyes.png"
import { Link } from "react-router-dom"
import Min from "../../../assets/imagens/2-min.jpg"
import miN from "../../../assets/imagens/3-min.jpg"
import MiN from "../../../assets/imagens/4-min.jpg"
import MIN from "../../../assets/imagens/5-min.jpg"


const Gallery = () => {
  const array = new Array(4).fill(true);
  return (
    <S.Container>
      <S.Background />
      <S.Col1>
        <S.Eye src={eyeImage} />
        <SubTitle color="#fff" size={4.5}>Dê uma olhada em nosso estabelecimento</SubTitle>
        <Link to={"/galeria"}>
          <Button.Root>
            <Button.Text>Explorar Santo Sal Doce</Button.Text>
            <Button.Icon>
              <Search />
            </Button.Icon>
          </Button.Root>
        </Link>
      </S.Col1>

      <S.Col2>
      <S.Image
          src={miN} 
          data-img="1"
        />
           <S.Image
          src={Min} 
          data-img="2"
        />
             <S.Image
          src={MiN} 
          data-img="3"
        />
               <S.Image
          src={MIN} 
          data-img="4"
        />
      </S.Col2>
    </S.Container>
  );
};

export default Gallery;
