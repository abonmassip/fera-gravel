import styles from './MarkdownText.module.scss'

export default function MarkdownText ({ htmlContent }) {

  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    ></div>
  )
}
