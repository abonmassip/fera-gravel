import React, { useEffect } from 'react';
import Image from 'next/image'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { cx } from '@/src/lib/utils';
import styles from './ImageGallery.module.scss'

export default function ImageGallery ({ galleryID, images, resolution = 400}) {

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryID]);

  return (
    <div className="pswp-gallery" id={galleryID}>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={galleryID + '-' + index}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.image}>
              <Image src={image.thumbnailURL} alt="" width={resolution} height={resolution}/>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export function SingleImage ({ image, galleryID, res = 500 }) {

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryID} a`,
      showHideAnimationType: 'fade',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryID]);

  return (
    <div className={cx(styles.container, 'pswp-gallery')} id={galleryID} >
      <a
        href={image.src}
        data-pswp-width={image.width}
        data-pswp-height={image.height}
        target="_blank"
        rel="noreferrer"
      >
        <Image src={image.src} alt="" width={res} height={res} />
      </a>
    </div>
  )
}
