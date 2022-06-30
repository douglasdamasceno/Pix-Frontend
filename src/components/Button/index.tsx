import React from 'react'
import * as Style from './styles'

type Props = {
    children: React.ReactNode,
    onClick: () => void,
    width?: number,
    height?: number,
    primary?: boolean,
}

const Button: React.FC<Props> = ({ children, onClick }:Props)=> {
  return (
      <Style.Container onClick={onClick}>{children}</Style.Container>
  )
}

export default Button;