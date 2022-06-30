import * as Style from "./styles";

export default function Header() {
  return (
    <Style.Container>
          <Style.PageTitle>Credito</Style.PageTitle>
          <Style.Card>
              <Style.CardAmout>    
                <Style.CardTitle>Saldo disponível:</Style.CardTitle>
                <Style.CardValue>R$35.500,00</Style.CardValue>
              </Style.CardAmout>
              <Style.TransactionCard>
                  <Style.TransactionPositive>Aprovisionado: <strong>R$99.700,00</strong> </Style.TransactionPositive>
                  <Style.TransactionNegative>Dias pendentes: <strong>R$30.000,00</strong></Style.TransactionNegative>
              </Style.TransactionCard>
          </Style.Card>  
    </Style.Container>
  )
}
