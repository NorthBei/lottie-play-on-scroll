import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lottie-play-on-scroll/examples/react/demo/',
  plugins: [react()],
})
