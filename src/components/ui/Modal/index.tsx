import { ModalContainer, ModalWrapper,CloseModalButton,CloseModal } from './styles';
 
interface ModalProps { 
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: React.ReactNode;
}

export default function Modal({showModal, setShowModal,children}: ModalProps) {
  return (
    <>
      {showModal ?
        <ModalContainer>
          <ModalWrapper>
            {/* <CloseModalButton
              onClick={() => setShowModal(prev => !prev)}
              src={IconCloseModal} />
            <CloseModal onClick={() => setShowModal(prev => !prev)}/> */}
              {children}  
          </ModalWrapper>
        </ModalContainer> :
      null}
    </>
  )
}
