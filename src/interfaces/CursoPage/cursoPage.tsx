import React, { useState } from "react";
import * as S from "./cursoPage.styled";
import { Calendar, Clock } from "lucide-react";
import cursoData from "@/data/cursoData";

export default function CursoPage() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <S.Container>
      <S.Top>
        <S.TopContainer>
          <S.CursoImage src="https://img.freepik.com/fotos-premium/homem-de-tiro-no-escuro-explorando-a-natureza_23-2149884252.jpg?w=740" />
          <S.TopContentContainer>
            <S.TopTitle>Informática</S.TopTitle>
            <S.ContentContainer>
              <S.TopContent>
                <Clock />Noite
              </S.TopContent>
              <S.TopContent>
                <Calendar />3 semestres
              </S.TopContent>
            </S.ContentContainer>
          </S.TopContentContainer>
        </S.TopContainer>
      </S.Top>
      <S.Main>
        <S.Title>Sobre o curso</S.Title>
        <S.Content>O curso de Técnico em Informática é uma opção popular para estudantes que desejam adquirir habilidades práticas relacionadas à informática. Na ETEC, esse curso é ministrado com um foco prático e abrange uma variedade de tópicos relacionados a criação de sites, banco de dados, a manutenção de computadores, redes e muito mais.</S.Content>
        <S.Title>Grade curricular</S.Title>
        <S.TabContent>
          {activeTab === 1 && (
            <>
              <p>Linguagem, Trabalho e Tecnologia</p>
              <p>Suporte ao Usuário</p>
              <p>Operação e Configuração de Aplicativos I</p>
              <p>Gestão de Sistemas Operacionais I</p>
              <p>Sistemas de Tecnologia de Informação e Comunicação</p>
              <p>Instalação e Manutenção de Computadores</p>
              <p>Programação de Computadores I</p>
              <p>Modelagem de Banco de Dados</p>
            </>
          )}
          {activeTab === 2 && (
            <>
              <p>Suporte em Informática</p>
              <p>Operação e Configuração de Aplicativos II</p>
              <p>Gestão de Sistemas Operacionais II</p>
              <p>Redes de Comunicação de Dados I</p>
              <p>Programação de Computadores II</p>
              <p>Suporte a Banco de Dados</p>
              <p>Planejamento do Trabalho de Conclusão de Curso (TCC) em Informática</p>
            </>
          )}
          {activeTab === 3 && (
            <>
              <p>Inglês Instrumental</p>
              <p>Gestão de Sistemas Operacionais III</p>
              <p>Segurança Digital</p>
              <p>Redes de Comunicação de Dados II 4</p>
              <p>Desenvolvimento de Sistemas Embarcados</p>
              <p>Computação em Nuvem e Mídias Sociais</p>
              <p>Ética e Cidadania Organizacional</p>
              <p>Desenvolvimento do Trabalho de Conclusão de Curso (TCC) em Informática</p>
            </>
          )}
        </S.TabContent>

      </S.Main>
    </S.Container>
  );
}
