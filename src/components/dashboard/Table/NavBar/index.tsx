import { useState } from "react";
import Date from "../../../../assets/calendar.svg"
import Button from '../../../ui/Button';
import InputWithIcon from '../../../ui/InputWithIcon';
import { Container, ContainerInputions } from "./styles";

interface NavBarProps {
  onClick: () => void;
  onChangeSearch: (e :string) => void;
 }

export default function NavBar({ onClick ,onChangeSearch }: NavBarProps) {
  return (
    <Container>
      <ContainerInputions>
        <InputWithIcon onChangeFilter={onChangeSearch} />
        <InputWithIcon onChangeFilter={onChangeSearch} icon={Date} placeholder="Pesquisar data" />
      </ContainerInputions>

      <Button
        width="162px"
        height="48px"
        primary
        onClick={onClick}
      >
        Adicionar saldo
      </Button>
		</Container>
  )
}
