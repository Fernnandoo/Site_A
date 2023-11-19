import React from "react";
import * as S from "./introduction.styled";
import icon from "@asset/icon.png";
import Student from "@asset/etequiana.png";
import Bubble from "@asset/bubble.png";
import { ChevronsDown, ChevronRightSquare } from "lucide-react";
import Button from "@/components/Button";
import { Link } from "react-router-dom"
import { Icon } from "@/components/Button/Button";

const Introduction = () => {
  return (
    <S.Container>
      <S.Background />
      <S.Left>
        <S.Title>Lorem ipsum dolor sit amet</S.Title>
        <S.Description>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
</S.Description>


        <Link to={"https://maps.app.goo.gl/18Gj3rewRrBUrMA7A"}>
          <Button.Root radius={8}>
            <Button.Text size={2}>Localização</Button.Text>
            <Button.Icon>
              <ChevronRightSquare strokeWidth={3} />
            </Button.Icon>
          </Button.Root>
        </Link>
      </S.Left>

      <span>
        <S.Student>
          <img
            src={icon} width={349}height={350}
          />
          <S.BubbleContainer>
            <S.Bubble>
              <img
                src={Bubble}
              />
              <S.BubbleText>
               Você sabe identificar um bom café?
              </S.BubbleText>
            </S.Bubble>
          </S.BubbleContainer>
        </S.Student>
      </span>
      <S.Blog>
        <span>
          fique por dentro das novidades
        </span>
        <ChevronsDown />
      </S.Blog>
    </S.Container>
  );
};

export default Introduction;
