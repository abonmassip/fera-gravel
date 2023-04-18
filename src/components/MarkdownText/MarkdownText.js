import { cx } from '@lib/utils'
import styles from './MarkdownText.module.scss'
import { montserratM } from '@lib/fonts'

export default function MarkdownText ({ htmlContent }) {

  return (
    <div
      className={cx(styles.markdown, montserratM.className)}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    ></div>
  )
}
