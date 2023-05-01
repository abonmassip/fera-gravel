import Image from 'next/image'
import MarkdownText from '../MarkdownText/MarkdownText'
import styles from './ContentImages.module.scss'

export function FullWidthImage ({ src, height = 100, resolution = 1000 }) {
  return (
    <div className={styles.fullWidthImage} style={{ height: `${height}px` }}>
      <Image src={src} alt="" width={resolution} height={resolution} />
    </div>
  )
}

export function CenteredImage ({ src, width, height }) {
  return (
    <div className={styles.centeredImageContainer}>
      <div className={styles.centeredImage} style={{width: `${width}px`, height: `${height}px`}}>
        <Image src={src} alt="" width={width} height={height} />
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
  quality = 50
}) {
  return (
    <div className={styles.backgroundImage}>
      <Image src={src} alt="" quality={quality} width={1920 / 100 * quality} height={1080 / 100 * quality} priority
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
