import styles from './app.module.css'
import { useEffect, useState } from 'react'
import { WORDS, type Challenge } from './utils/words'
import {Header} from './components/Header'
import { Letter } from './components/Letter'
import {Tip} from './components/Tip'
import { Input } from './components/input'
import { Button } from './components/Button'
import {LettersUsed} from './components/LettersUsed'

export default function App() {
  const [score, setScore] = useState(0)
  const [letter, setLetter] = useState("")
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  function handleRestart() {
    alert('Restart clicked')
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]
    setChallenge(randomWord)
    setScore(0)
    setLetter("")
  }

  useEffect(() => {
    startGame()
  }, [])

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
          <LettersUsed/>
      </main>
    </div>
  )
}

