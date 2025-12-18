import styles from './app.module.css'
import {Header} from './components/Header'
import { Letter } from './components/Letter'
import {Tip} from './components/Tip'
import { Input } from './components/input'
import { Button } from './components/Button'

function App() {

  function handleRestart() {
    alert('Restart clicked')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestart} />

        <Tip tip="Lembre-se de revisar seu código antes de enviar!" />

        <div className={styles.word}>
          <Letter value="R"/>
          <Letter value="E"/>
          <Letter value="A"/>
          <Letter value="C"/>
          <Letter value="T"/>
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?"/>
          <Button name="Confirmar" />
        </div>
      </main>
    </div>
  )
}

export default App
