import { Divider, Image } from 'antd'
import React from 'react'
import styles from './gallery.module.css'

const Gallery = () => {
  return (
    <>
      <Divider orientation='center'>My Work</Divider>
      <section className={styles.photos}>
        <Image src='/images/image1.webp' />
        <Image src='/images/image2.webp' />
        <Image src='/images/image3.webp' />
        <Image src='/images/image4.webp' />
        <Image src='/images/image5.webp' />
        <Image src='/images/image6.webp' />
        <Image src='/images/image7.webp' />
        <Image src='/images/image8.webp' />
        <Image src='/images/image9.webp' />
        <Image src='/images/image10.webp' />
        <Image src='/images/image11.webp' />
        <Image src='/images/image12.webp' />
        <Image src='/images/image13.webp' />
      </section>
    </>
  )
}

export default Gallery
