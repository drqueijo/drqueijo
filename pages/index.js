import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react'

const audioProps = {
  controls: true,
  autoplay: true,
}

export default function Home() {
  const audioRef = useRef(null)

  const playAudio = () => {
    const audio = new Audio('/audio.mp3');
    audio.play();
  }

  return (
    <div onClick={playAudio} className={styles.container}>
        <img src="/download.png" />
    </div>
  )
}
