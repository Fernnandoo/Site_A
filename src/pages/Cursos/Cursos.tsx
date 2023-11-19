import React from "react";
import { SubTitle } from "@/components/Text";
import * as S from "./cursos.styled";
import { BackpackIcon, Building2, Code2, GraduationCap, LineChart, MapPin, Syringe, Tag } from "lucide-react";

export default function Cursos() {
  return (
    <S.Container>
      <SubTitle>Cursos</SubTitle>
      <S.Description>Confira os cursos disponíveis na ETEC Adolpho Berezin</S.Description>
      <S.TagArea>
        <S.Tag>Tarde</S.Tag>
        <S.Tag>2 cursos</S.Tag>
      </S.TagArea>
      <S.Title>Ensino Médio integrado ao técnico</S.Title>
      <S.CardArea>
        <S.Card to={"/"}>
          <S.Indicator>
            <BackpackIcon color={'#fff'} />
          </S.Indicator>
          <S.Icon>
            <LineChart size={60} />
          </S.Icon>
          <S.CardTitle>Ensino Médio com Técnico em Administração</S.CardTitle>
        </S.Card>
        <S.Card to={'/'}>
          <S.Indicator>
            <BackpackIcon color={'#fff'} />
          </S.Indicator>
          <S.Icon>
            <Code2 size={60} />
          </S.Icon>
          <S.CardTitle>Ensino Médio com Técnico em Desenvolvimento de Sistemas</S.CardTitle>
        </S.Card>
      </S.CardArea>
      <S.TagArea>
        <S.Tag>Manhã</S.Tag>
        <S.Tag>2 cursos</S.Tag>
      </S.TagArea>
      <S.Title>Ensino Médio com ênfase</S.Title>
      <S.CardArea>
        <S.Card to={'/'}>
          <S.Indicator>
            <BackpackIcon color={'#fff'} />
          </S.Indicator>
          <S.Icon>
            <LineChart size={60} />
          </S.Icon>
          <S.CardTitle>Ensino Médio com ênfase em Linguagens e Ciências Humanas</S.CardTitle>
        </S.Card>
        <S.Card to={'/'}>
          <S.Indicator>
            <BackpackIcon color={'#fff'} />
          </S.Indicator>
          <S.Icon>
            <Code2 size={60} />
          </S.Icon>
          <S.CardTitle>Ensino Médio com ênfase em Matemática e suas tecnologias</S.CardTitle>
        </S.Card>
      </S.CardArea>
      <S.TagArea>
        <S.Tag>Manhã</S.Tag>
        <S.Tag>Tarde</S.Tag>
        <S.Tag>Noite</S.Tag>
        <S.Tag>5 cursos</S.Tag>
      </S.TagArea>
      <S.Title>Ensino Técnico</S.Title>
      <S.CardArea>
        <S.Card to={'/'}>
          <S.Indicator>
            <GraduationCap color={'#fff'} />
          </S.Indicator>
          <S.Icon>
            <LineChart size={60} />
          </S.Icon>
          <S.CardTitle>Técnico em Administração</S.CardTitle>
        </S.Card>
        <S.Card to={'/cursopage'}>
          <S.Indicator>
            <GraduationCap color={'#fff'} />
          </S.Indicator>
          <S.Icon>
            <Code2 size={60} />
          </S.Icon>
          <S.CardTitle >Técnico em Informática</S.CardTitle>
        </S.Card>
        <S.Card to={'/'}>
          <S.Indicator>
            <GraduationCap color={'#fff'} />
          </S.Indicator>
          <S.Icon>
            <Building2 size={60} />
          </S.Icon>
          <S.CardTitle>Técnico em Edificações</S.CardTitle>
        </S.Card>
        <S.Card to={'/'}>
          <S.Indicator>
            <GraduationCap color={'#fff'} />
          </S.Indicator>
          <S.Icon>
            <MapPin size={60} />
          </S.Icon>
          <S.CardTitle>Técnico em Turismo Receptivo</S.CardTitle>
        </S.Card>
        <S.Card to={'/'}>
          <S.Indicator>
            <GraduationCap color={'#fff'} />
          </S.Indicator>
          <S.Icon>
            <Syringe size={60} />
          </S.Icon>
          <S.TagAreaCard>
            <S.TagCard>Manhã</S.TagCard>
            <S.TagCard>Tarde</S.TagCard>
          </S.TagAreaCard>
          <S.CardTitle>Técnico em Enfermagem</S.CardTitle>
        </S.Card>
      </S.CardArea>

    </S.Container>
  );
}
