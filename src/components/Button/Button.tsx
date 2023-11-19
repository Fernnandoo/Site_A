import React from 'react'
import * as S from "./button.styled"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  radius?: number
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const Button = ({ children, radius, ...props }: Props) => {
  return (
    <S.Container {...props} radius={radius}>
      {children}
    </S.Container>
  )
}

export const ButtonText = S.ButtonText

interface IconProps {
  children: React.ReactNode
}

export const Icon = ({ children }: IconProps) => {

  return (
    <S.ContainerIcon>
      {children}
    </S.ContainerIcon>
  )
}

export default Button
