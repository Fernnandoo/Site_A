import { SubTitle } from "@/components/Text";
import React from "react";
import * as S from "./crono.styled";
import cronoData from "@/data/cronoData";

const Crono = () => {
  return (
    <S.Crono>
      <SubTitle>Cronograma</SubTitle>
      <S.Paragraph>nostrud exercitation ullamco laboris nisi ut aliquip ex </S.Paragraph>
      <S.CronoContainer>
        {cronoData.map((p) => (
          <S.Content>
            <S.CronoCard>
              <S.CronoDate>{p.date}</S.CronoDate>
            </S.CronoCard>
            <S.Description>
              <S.DescText>
                {p.content}
              </S.DescText>
            </S.Description>
          </S.Content>
        ))}
      </S.CronoContainer>
    </S.Crono>
  );
};

export default Crono;
