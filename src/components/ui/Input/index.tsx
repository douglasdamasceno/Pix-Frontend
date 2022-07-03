import * as Style from './styles'

interface InputProps {
    label: string;
    value: string;
    onChangeAmount: (newValue:string) => void;
 }

export default function Input({label,value,onChangeAmount}: InputProps) {
  return (
    <Style.Container>
          <Style.Label>{label}</Style.Label>
          <Style.Input
            value={value}
            onChange={(e) => onChangeAmount(e.target.value)}
          />  
    </Style.Container>
  )
}
