import React, { useEffect } from 'react';
import Image from 'next/image'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import styles from './ImageGallery.module.scss'

export default function ImageGallery (props) {

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [props.galleryID]);

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      <div className={styles.gallery}>
        {props.images.map((image, index) => (
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={props.galleryID + '-' + index}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.image}>
              <Image src={image.thumbnailURL} alt="" width={200} height={200}/>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
