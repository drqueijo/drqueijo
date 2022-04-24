/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

function narga() {
  const [click, setClick] = useState(false);
  return (
    <div onClick={() => setClick(true)} style={{
      width: '100vw',
      height: '100vh',
      display: 'grid',
      placeItems: 'center',
    }}>
      {!click ? <img src="/download.png" /> :  
        <video autoPlay controls loop style={{ width: '50%', aspectRatio: '1/1' }}>
          <source src="/e o narga_.mp4" />
        </video>
      } 

    </div>
  )
}

export default narga