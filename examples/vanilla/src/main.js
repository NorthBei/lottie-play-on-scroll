import './style.css'
import { loadLottie } from 'lottie-play-on-scroll'

loadLottie({
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'https://lottie.host/7401522f-2d8b-4049-ad18-eb0edb6af224/CE9lFrNlEH.json' // or '/lottie/data.json'
})