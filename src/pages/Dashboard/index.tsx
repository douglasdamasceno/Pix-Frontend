import { useState } from 'react'
import Button from '../../components/ui/Button'
import Header from '../../components/dashboard/Header'
import Modal from '../../components/ui/Modal'
import SideBar from '../../components/dashboard/SideBar'
import Table from '../../components/dashboard/Table'
import AddSaldo from '../../components/dashboard/AddSaldo'
import columns from '../../components/dashboard/Table/data/columns'
import data from '../../components/dashboard/Table/data/data'

import { Container, Main, Section } from './styles'
import PopUp from '../../components/dashboard/PopUp'
import QRCode from '../../components/dashboard/QRCode'
import NavBar from '../../components/dashboard/Table/NavBar'

export default function App() {
  
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');

  const openModal = () => {
    setShowModal(preve => !preve);
  }  
//remover padding do container pra ajuste modal
  return (
    <Container>
      <SideBar />
      {/* <Button onClick={openModal}>Adicionar saldo</Button> */}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <QRCode />
      </Modal>
      <Main>
        <Header />
        <Section>
          <NavBar onClick={openModal} />
          <Table columns={columns} data={data} />
        </Section>
      </Main>
    </Container>
  )
}

