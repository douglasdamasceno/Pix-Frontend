import { useState } from 'react';
import { Container, ContainerButtons, PaymentMethods, Title } from './styles'
import PaymentMethod from '../../ui/Select';
import Input from '../../ui/Input';

export default function AddSaldo() {
  const [formPayment, setFormPayment] = useState("");
  const [amount, setAmount] = useState("");
  console.log(formPayment);  
  console.log(amount);  
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
          <option value="1">Pix</option>
          <option value="2">TED</option>
        </PaymentMethod>           
        <Input
          label='Valor'
          value={amount}
          onChangeAmount={setAmount}
        />
      </PaymentMethods>
      <ContainerButtons>

      </ContainerButtons>
    </Container>
  )
}
