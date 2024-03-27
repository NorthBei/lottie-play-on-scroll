import { useRef } from 'react'
import './App.css'
import { attachScroll } from 'lottie-play-on-scroll'
import { Player } from '@lottiefiles/react-lottie-player'

function App() {
  const lottieWrapper = useRef<HTMLDivElement>(null)

  return (
    <div id="lottie-wrapper" ref={lottieWrapper}>
      <Player
        id="player"
        autoplay={false}
        loop={true}
        controls={false}
        src="https://lottie.host/7401522f-2d8b-4049-ad18-eb0edb6af224/CE9lFrNlEH.json"
        lottieRef={(animation) => {
          if(lottieWrapper.current) attachScroll(animation, lottieWrapper.current)
        }}
      />
    </div>
  )
}

export default App
