import Button from './components/Button'
import Header from './components/Header'

function App() {
  
  return (
    <div className="App">
      <Header />
      <Button
        // width={162}
        // height={48}
        primary={false}
        onClick={() => console.log(`ddd`)}
        
      >
        Adicionar saldo
      </Button>
    </div>
  )
}

export default App
