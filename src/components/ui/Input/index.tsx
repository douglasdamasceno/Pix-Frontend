import * as Style from "./styles";

interface InputProps {
  label: string;
  value: string;
  type?: string;
  onChangeAmount: (newValue: string) => void;
}

export default function Input({
  label,
  value,
  onChangeAmount,
  type,
}: InputProps) {
  return (
    <Style.Container>
      <Style.Label>{label}</Style.Label>
      <Style.Input
        type={type || "text"}
        value={value}
        onChange={(e) => onChangeAmount(e.target.value)}
      />
    </Style.Container>
  );
}
