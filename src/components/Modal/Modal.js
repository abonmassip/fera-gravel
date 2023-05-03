import React, { useEffect } from 'react';
import Image from 'next/image'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { cx } from '@/src/lib/utils';
import styles from './Modal.module.scss'

export default function SingleImage ({ image, galleryID, width = '100%', height = '100%', res = 500, centered = false }) {

  const classCentered = centered ? styles.centered : ''

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
    <div className={cx(styles.container, 'pswp-gallery', classCentered)} id={galleryID} >
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
