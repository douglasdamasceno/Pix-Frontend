import IconQRCode from "../../../assets/qr-code.svg";
import Button from "../../ui/Button";
import CopyClipBoard from "../../ui/CopyClipBoard";
import * as Styles from './styles'

export default function QRCode() {
  return (
      <Styles.Container>
           <Styles.Title>QRCode</Styles.Title>
          <Styles.Message>QRCode Gerado!</Styles.Message>
          <Styles.ImgQRCode src={IconQRCode} alt="QRCode" />
          <CopyClipBoard />
          <Button
              primary
              width="563px"
              height="68px"
              onClick={() => { }}>
              Fechar
          </Button>
    </Styles.Container>
  )
}
