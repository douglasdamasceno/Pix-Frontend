import { useState } from 'react'
import Button from '../../components/ui/Button'
import Header from '../../components/dashboard/Header'
import Modal from '../../components/ui/Modal'
import SideBar from '../../components/dashboard/SideBar'
import Table from '../../components/dashboard/Table'
import AddSaldo from '../../components/dashboard/AddSaldo'
import columns from '../../components/dashboard/Table/data/columns'
import data from '../../components/dashboard/Table/data/data'

import { Container, Main } from './styles'
import PopUp from '../../components/dashboard/PopUp'
import QRCode from '../../components/dashboard/QRCode'

export default function App() {
  
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(preve => !preve);
  }  
//remover padding do container pra ajuste modal
  return (
    <Container>
      
      <SideBar />
      <Button onClick={openModal}>Adicionar saldo</Button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <QRCode />
      </Modal>
      <Main>
        <Header />
        <Table columns={columns} data={data} />
      </Main>
    </Container>
  )
}

