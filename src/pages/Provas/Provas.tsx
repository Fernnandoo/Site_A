import React from 'react'
import * as S from "./provas.styled"
import { SubTitle } from '@/components/Text'
import ProvaAccordion from '@/interfaces/ProvaAccordion'

const Provas = () => {

  return (
    <S.Container>
      <SubTitle>Provas anteriores</SubTitle>

      <ProvaAccordion />
    </S.Container>
  )
}

export default Provas
