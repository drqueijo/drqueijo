/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useRef } from 'react'

const audioProps = {
  controls: true,
  autoplay: true,
}


export default function Home() {
  const audioRef = useRef(null);
  const [click, setClick] = useState(false);

  const playAudio = () => {
    const audio = new Audio('/audio.mp3');
    audio.play();
    setClick(true)
  }
  
  return (
    <div onClick={playAudio} className={styles.container}>
      {click ? <img src="/gigachad.webp" /> : <img src="/download.png" /> }   
    </div>
  )
}
