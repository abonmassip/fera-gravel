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

export function ImageAndText ({ src, text, height = 'inherit', ratio = [50, 50] }) {
  return (
    <div>
      <div className={styles.imageAndText}>
        <div className={styles.imageLeft} style={{height: height, width: `${ratio[0]}%`}}>
          <Image src={src} alt="" width={600} height={600}/>
        </div>
        <div className={styles.text} style={{width: `${ratio[1]}%`}}>
          <MarkdownText content={text} />
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga minima laudantium quam molestias repudiandae veniam quae nisi, culpa quaerat iure dolorem quasi provident sit, voluptatibus eum nihil dolorum sequi explicabo?</p> */}
        </div>
      </div>
    </div>
  )
}
