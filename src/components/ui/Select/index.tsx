import * as Style from "./styles";

interface SelectProps { 
    label: string;
    children: React.ReactNode;
    name: string;
    value: string;
  onChange: (value:string) => void;
}

export default function Select({label, children,name,onChange,value}: SelectProps) {
  return (
    <Style.Container>
        <label>{label}</label>
          <Style.Select
            name={name}
            value={value}
            onChange={event => onChange(event.target.value)}
          >
            {children}
        </Style.Select>     
    </Style.Container>
  )
}