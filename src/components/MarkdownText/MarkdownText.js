import styles from './MarkdownText.module.scss'

export default function MarkdownText ({ content }) {
  return (
    <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: content }} />
  )
}
