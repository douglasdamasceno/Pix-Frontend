import * as Styles from "./styles";
import IconCloseModal from "../../../assets/close.svg";
import IconSucess from "../../../assets/okay.svg";

export default function PopUp() {
  return (
      <Styles.Container>
          <Styles.CloseModal src={IconCloseModal} />
          <Styles.ImgSucess src={IconSucess} />
        <Styles.Message>O PIX foi pago com sucesso!</Styles.Message>
    </Styles.Container>
  )
}
