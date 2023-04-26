import React, { useEffect } from 'react';
import Image from 'next/image'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { cx } from '@/src/lib/utils';
import styles from './Modal.module.scss'

export default function SingleImage ({ image, galleryID }) {

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
    <div className={cx(styles.container, 'pswp-gallery')} id={galleryID}>
      <a
        href={image.src}
        data-pswp-width={image.width}
        data-pswp-height={image.height}
        target="_blank"
        rel="noreferrer"
      >
        <Image src={image.src} alt="" width={500} height={500} />
      </a>
    </div>
  )
}
