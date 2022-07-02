import React from 'react'
import * as Style from './styles'

type Props = {
    children: React.ReactNode,
    onClick: () => void,
    width?: string,
    height?: string,
    primary?: boolean,
}

const Button: React.FC<Props> = ({ children, onClick, width,height,primary }:Props)=> {
  return (
    <Style.Container
      width={width}
      onClick={onClick}
      primary={primary}
      height={height}
    >
      {children}
    </Style.Container>
  )
}

export default Button;