import { ModalContainer, ModalWrapper,CloseModalButton,CloseModal } from './styles';
 
interface ModalProps { 
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: React.ReactNode;
}

export default function Modal({ showModal, setShowModal, children }: ModalProps) {
  if(!showModal) return null;
  return (
    <>
      {showModal && (
        <ModalContainer onClick={() => setShowModal(!showModal)}>
          <ModalWrapper onClick={(event) => event.stopPropagation()}>
            {children}
          </ModalWrapper>
        </ModalContainer>
      )}
    </>
  )
}
