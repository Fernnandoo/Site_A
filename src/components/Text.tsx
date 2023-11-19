import styled from "styled-components"

interface TextProps {
  size?: number
  color?: string
}

export const Title = styled.h1<TextProps>`
    font-size: ${({ size }) => size || 4}rem;
`

export const SubTitle = styled.h2<TextProps>`
    font-size: ${({ size }) => size || 3}rem;
    color: ${({ color }) => color || "#212121"};
    font-weight: 650;
`
