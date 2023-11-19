import React from 'react'
import * as Accordion from "@component/Accordion/Accordion"
import * as S from "./provaAccordion.styled"
import provasData from '@/data/provasData'

const ProvaAccordion = () => {
  return (
    <S.Container>
      <Accordion.Root type='multiple' className='accordion'>
        {provasData.map((prova) => (
          <Accordion.Item value={prova.year}>
            <Accordion.Header>
              <Accordion.Trigger>
                {prova.year}
                <Accordion.Chevron />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              {prova.edition.map((edition) => (
                <div>
                  <h2>{edition.semester}° Semestre</h2>
                  <div style={{ display: "grid" }}>
                    <a href={edition.prova}>Prova</a>
                    <a href={edition.gabarito}>Gabarito</a>
                  </div>
                </div>
              ))}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </S.Container>
  )
}

export default ProvaAccordion 
