import * as Style from "./styles";

interface SelectProps { 
    label: string;
    children: React.ReactNode;
    name: string;
    value: string;
    onChange: () => void;
}

export default function Select({label, children,name,onChange,value}: SelectProps) {
  return (
    <Style.Container>
        <label>{label}</label>
          <Style.Select
            name={name}
            value={value}
            onChange={onChange}
          >
            {children}
        </Style.Select>     
    </Style.Container>
  )
}
