import { useState } from 'react';
import { Container, ContainerButtons, PaymentMethods, Title } from './styles'
import PaymentMethod from '../../ui/Select';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

interface AmountProps {
    id: number;
    destino: string;
    valor: string;
    solicitacao: string;
    pagamentos: string;
    vencimento: string;
    status: string;
}

interface IAddAmount{
  onCloseModal: () => void;
  onOpenQRCode: () => void;
  addValue: ([] :AmountProps[]) => void;
}

export default function AddSaldo({onCloseModal,onOpenQRCode,addValue}:IAddAmount) {
  const [formPayment, setFormPayment] = useState("");
  const [amount, setAmount] = useState("");
  
  const handleGRCode = () => {
    onCloseModal();
    onOpenQRCode();
    addValue(prev => [...prev, {
      id: prev.length + 1,
      destino: "Nova despensa",
      valor: amount,
      solicitacao: "20/05/2022 20:00",
      pagamentos: formPayment,
      vencimento: "22/08/2022",
      status: "Em pagamento",
      }]);
  }

  return (
    <Container>
      <Title>Adicionar saldo</Title>
      <PaymentMethods>
        <PaymentMethod
          label='Forma de pagamento'
          name="pay"
          value={formPayment}
          onChange={setFormPayment}
        >
          <option value="PIX">PIX</option>
          <option value="TED">TED</option>
        </PaymentMethod>           
        <Input
          label='Valor'
          value={amount}
          onChangeAmount={setAmount}
        />
      </PaymentMethods>
      <ContainerButtons>
        <Button
          onClick={onCloseModal}
          width='256px'
          height='68px'
        >
          Voltar
        </Button>
        <Button
          primary
          onClick={handleGRCode}
          width='256px'
          height='68px'
        >
          Gerar QRCode
        </Button>
      </ContainerButtons>
    </Container>
  )
}
