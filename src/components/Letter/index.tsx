import styles from './styles.module.css'

type Props = {
  value?: string
  size?: "default" | "small"
}

export function Letter({ value = "", size = "default" }: Props) {
  return (
    <div className={`
    ${styles.container}
    ${size === "small" && styles.containerSmall}
    `}>
      <span>{value}</span>
    </div>
  )
}