
import { Letter } from '../Letter';
import styles from './styles.module.css';

export function LettersUsed() {
  return (
    
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        <Letter size="small" value="R" />
        <Letter size="small" value="X" />
      </div>
    </div>
  )
}