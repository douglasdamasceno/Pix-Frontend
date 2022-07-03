import React from 'react'
import * as Style from './styles'

type Props = {
    children: React.ReactNode,
    onClick: () => void,
    width?: string,
    height?: string,
    primary?: boolean,
    type?: "button" | "submit" | "reset",
}

const Button: React.FC<Props> = ({ children, onClick, width,height,primary,type }:Props)=> {
  return (
    <Style.Container
      width={width}
      onClick={onClick}
      primary={primary}
      height={height}
      type={type || 'button'}
    >
      {children}
    </Style.Container>
  )
}

export default Button;