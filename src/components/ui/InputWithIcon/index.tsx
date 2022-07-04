import * as Style from './styles'

import Search from "../../../assets/search.svg";
import { useEffect, useState } from 'react';

interface InputProps { 
  placeholder?: string;
  type?: string;
  icon?: string;
  onChangeFilter: (value:string) => void;
 
}

export default function InputWithIcon({ placeholder = "Pesquisar", type, icon, onChangeFilter }: InputProps) {
  const [value, setValue] = useState('');
  
  useEffect(() => { 
    onChangeFilter(value);
  }, [value]);
  
  return (
    <Style.Container>
      <Style.Input type={type || "text"} value={value} onChange={(e)=> setValue(e.target.value)} placeholder={placeholder} />
      <Style.Icon src={icon || Search} alt={placeholder} />
    </Style.Container>
  )
}
