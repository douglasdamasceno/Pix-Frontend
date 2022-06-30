import Button from './components/Button'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {
  
  return (
    <div className="App">
      {/* <Header /> */}
      <Button
        // width={162}
        // height={48}
        primary={false}
        onClick={() => console.log(`ddd`)}
        
      >
        Adicionar saldo
      </Button>
      <SideBar />
    </div>
  )
}

export default App
