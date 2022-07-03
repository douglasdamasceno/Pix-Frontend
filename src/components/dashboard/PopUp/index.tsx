import * as Styles from "./styles";
import IconCloseModal from "../../../assets/close.svg";
import IconSucess from "../../../assets/okay.svg";

interface PopUpProps{
  onCloseModal: () => void;
}

export default function PopUp({onCloseModal}:PopUpProps) {
  return (
      <Styles.Container>
          <Styles.CloseModal src={IconCloseModal} onClick={onCloseModal} />
          <Styles.ImgSucess src={IconSucess} />
        <Styles.Message>O PIX foi pago com sucesso!</Styles.Message>
    </Styles.Container>
  )
}
