import IconQRCode from "../../../assets/qr-code.svg";
import * as Styles from './styles'

export default function QRCode() {
  return (
      <Styles.Container>
           <Styles.Title>QRCode</Styles.Title>
          <Styles.Message>QRCode Gerado!</Styles.Message>
          <Styles.ImgQRCode src={IconQRCode} alt="QRCode"/>
    </Styles.Container>
  )
}
