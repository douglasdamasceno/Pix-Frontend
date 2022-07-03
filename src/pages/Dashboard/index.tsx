import { useState } from 'react'
// import Button from '../../components/ui/Button'
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
// import NavBar from '../../components/dashboard/Table/NavBar'

export default function App() {
  const [showAddSaldo, setShowAddSaldo] = useState(false);
  const [showGRCode, setShowGRCode] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [search, setSearch] = useState('');

  const openAddSaldo = () => {
    setShowAddSaldo(preve => !preve);
  }  
  const openModalShowQRCode = () => {
    setShowGRCode(preve => !preve);
  }  
  const openModalShowPopUp = () => {
    setShowPopUp(preve => !preve);
  }  
//remover padding do container pra ajuste modal
  return (
    <Container>
      <SideBar />
      <Modal
        showModal={showAddSaldo}
        setShowModal={setShowAddSaldo}
      >
        <AddSaldo
          onCloseModal={openAddSaldo}
          onOpenQRCode={openModalShowQRCode}
        />
      </Modal>
      <Modal
        showModal={showGRCode}
        setShowModal={setShowGRCode}
      >
        <QRCode
          onCloseModal={openModalShowQRCode}
          onOpenPopUp={openModalShowPopUp}
        />
      </Modal>
      <Modal
        showModal={showPopUp}
        setShowModal={setShowPopUp}
      >
        <PopUp onCloseModal={openModalShowPopUp} />
      </Modal>
      <Main>
        <Header />
        {/* <Section> */}
          {/* <NavBar onClick={openModal} /> */}
          <Table columns={columns} data={data} onClick={openAddSaldo} />
        {/* </Section> */}
      </Main>
    </Container>
  )
}

