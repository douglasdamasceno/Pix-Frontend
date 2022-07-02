import * as Style from './styles'

import Search from "../../../assets/search.svg";

interface InputProps { 
  placeholder?: string;
  type?: string;
  icon?: string;
}

export default function InputWithIcon({ placeholder="Pesquisar", type, icon }: InputProps) {
  return (
    <Style.Container>
      <Style.Input type={type || "text"} placeholder={placeholder} />
      <Style.Icon src={icon || Search} alt={placeholder} />
    </Style.Container>
  )
}
