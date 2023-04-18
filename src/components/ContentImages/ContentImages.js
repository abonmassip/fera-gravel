import Image from 'next/image'
import MarkdownText from '../MarkdownText/MarkdownText'
import styles from './ContentImages.module.scss'

export function FullWidthImage ({ src, height = '100px' }) {
  return (
    <div className={styles.fullWidthImage} style={{ height: height }}>
      <Image src={src} alt="" fill />
    </div>
  )
}

export function CenteredImage ({ src, width, height }) {
  return (
    <div className={styles.centeredImageContainer}>
      <div className={styles.centeredImage} style={{width: width, height: height}}>
        <Image src={src} alt="" fill />
      </div>
    </div>
  )
}

export function BackgroundImage ({
  src,
  scale = 1,
  rotate = 0,
  position = 'center',
  opacity = 0.1,
  blur = 0
}) {
  return (
    <div className={styles.backgroundImage}>
      <Image src={src} alt="" fill
        style={{
          objectPosition: position,
          opacity: opacity,
          transform: `scale(${scale}) rotate(${rotate}deg)`,
          filter: `blur(${blur}px)`
        }}
      />
    </div>
  )
}

export function ImageAndText ({ src, text, height = 'inherit' }) {
  return (
    <div>
      <div className={styles.imageAndText} style={{height: height}}>
        <div className={styles.imageLeft}>
          <Image src={src} alt="" fill/>
        </div>
        <div className={styles.text}>
          <MarkdownText htmlContent={text} />
        </div>
      </div>
    </div>
  )
}
