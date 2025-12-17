import styles from './app.module.css'
import {Header} from './components/Header'
import {Tip} from './components/Tip'

function App() {

  function handleRestart() {
    alert('Restart clicked')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestart} />

        <Tip tip="Lembre-se de revisar seu código antes de enviar!" />
      </main>
    </div>
  )
}

export default App
