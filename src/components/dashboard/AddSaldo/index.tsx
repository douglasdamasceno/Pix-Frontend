import { useState } from 'react';
import { Container, ContainerButtons, PaymentMethods, Title } from './styles'
import PaymentMethod from '../../ui/Select';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

interface IAddAmount{
  onCloseModal: () => void;
  onOpenQRCode: () => void;
}

export default function AddSaldo({onCloseModal,onOpenQRCode}:IAddAmount) {
  const [formPayment, setFormPayment] = useState("");
  const [amount, setAmount] = useState("");
  console.log(formPayment);  
  console.log(amount);  

  const handleGRCode = () => {
    onCloseModal();
    onOpenQRCode();
  }

  return (
    <Container>
      <Title>Adicionar saldo</Title>
      <PaymentMethods>
        <PaymentMethod
          label='Forma de pagamento'
          name="pay"
          value={formPayment}
          onChange={(event:any ) => setFormPayment(event.target.value)}
        >
          <option value="1">PIX</option>
          <option value="2">TED</option>
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
