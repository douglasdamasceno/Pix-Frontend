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
  data: AmountProps[];
  onCloseModal: () => void;
  onOpenQRCode: () => void;
  addValue: ([]:AmountProps[]) => void;
}

export default function AddSaldo({onCloseModal,onOpenQRCode,addValue,data}:IAddAmount) {
  const [formPayment, setFormPayment] = useState("");
  const [amount, setAmount] = useState("");
  
  const handleGRCode = () => {
    onCloseModal();
    onOpenQRCode();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    addValue([...data,
      {
      id: data.length + 1,
      destino: "Nova despensa",
      valor: `R$ ${amount}`,
      solicitacao: today.toLocaleDateString(),
      pagamentos: formPayment,
      vencimento: "22/08/2022",
      status: "Em pagamento",
    }
    ]);
  }
  console.log(formPayment);
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
          <option value="" disabled>Selecione um pagamento</option>
          <option value="PIX">PIX</option>
          <option value="TED">TED</option>
        </PaymentMethod>           
        <Input
          type="number"
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
