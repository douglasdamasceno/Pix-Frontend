import IconQRCode from "../../../assets/qr-code.svg";
import Button from "../../ui/Button";
import CopyClipBoard from "../../ui/CopyClipBoard";
import * as Styles from './styles'

interface QRCodeProps {
    onCloseModal: () => void;
    onOpenPopUp: () => void;
 }

export default function QRCode({ onCloseModal, onOpenPopUp }: QRCodeProps) {
    
    const handleCopyClip = () => { 
        onCloseModal();
        onOpenPopUp();
    }
    
  return (
      <Styles.Container>
          <Styles.Header>
            <Styles.Message>QRCode</Styles.Message>
            <Styles.Title>QRCode Gerado!</Styles.Title>
          </Styles.Header>  
          <div id="copyClip">    
            <Styles.ImgQRCode src={IconQRCode} alt="QRCode" />
            <CopyClipBoard onClick={handleCopyClip} />
          </div>
          <Button
              primary
              width="563px"
              height="68px"
              onClick={onCloseModal}>
              Fechar
          </Button>
    </Styles.Container>
  )
}
