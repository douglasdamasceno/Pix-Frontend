import { useState } from 'react'
import Header from '../../components/dashboard/Header'
import Modal from '../../components/ui/Modal'
import SideBar from '../../components/dashboard/SideBar'
import Table from '../../components/dashboard/Table'
import AddSaldo from '../../components/dashboard/AddSaldo'
import columns from '../../components/dashboard/Table/data/columns'
import dataMock from '../../components/dashboard/Table/data/data'

import { Container, Main } from './styles'
import PopUp from '../../components/dashboard/PopUp'
import QRCode from '../../components/dashboard/QRCode'

export default function App() {
  const [showAddSaldo, setShowAddSaldo] = useState(false);
  const [showGRCode, setShowGRCode] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [data,setData] = useState(dataMock);
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
    return (
      <>
        <Modal
          showModal={showAddSaldo}
          setShowModal={setShowAddSaldo}
        >
          <AddSaldo
            data={data}
            addValue={setData}
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
        <Container>
          <SideBar />
          <Main>
            <Header />
              <Table search={search} columns={columns} data={data} onClick={openAddSaldo} />
          </Main>
        </Container>
      </>
  
  )
}

