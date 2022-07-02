import { useState } from 'react';
import { Container, Title } from './styles'

export default function AddSaldo() {
    const [formPayment, setFormPayment] = useState("");
    return (
      <Container>
          <Title>Adicionar saldo</Title>
          <div>
              <label>
                Forma de pagamento  
              </label>
                <select
                    name="pay"
                    value={formPayment}
                    onChange={value => setFormPayment(value.target.value)} >
                    <option value="">Selecione uma forma de pagamento</option>
                    <option value="1">Pix</option>
                    <option value="2">TED</option>
                  </select>           
              <label>
                Valor  
                <input />           
              </label>
          </div>

    </Container>
  )
}
