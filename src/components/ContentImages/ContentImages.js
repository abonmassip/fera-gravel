import Image from 'next/image'
import MarkdownText from '../MarkdownText/MarkdownText'
import styles from './ContentImages.module.scss'

export function FullWidthImage ({ src, resolution = 1000, height = '100px' }) {
  return (
    <div className={styles.fullWidthImage} style={{ height: height }}>
      <Image src={src} alt="" width={resolution} height={resolution} />
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
  opacity = 0.1
}) {
  return (
    <div className={styles.backgroundImage}>
      <Image src={src} alt="" fill quality={100}
        style={{
          objectPosition: position,
          opacity: opacity,
          transform: `scale(${scale}) rotate(${rotate}deg)`,
        }}
      />
    </div>
  )
}

export function ImageAndText ({ src, text, height = 'inherit', ratio = [50, 50] }) {
  return (
    <div>
      <div className={styles.imageAndText}>
        <div className={styles.imageLeft} style={{height: height, width: `${ratio[0]}%`}}>
          <Image src={src} alt="" width={600} height={600}/>
        </div>
        <div className={styles.text} style={{width: `${ratio[1]}%`}}>
          <MarkdownText content={text} />
        </div>
      </div>
    </div>
  )
}
