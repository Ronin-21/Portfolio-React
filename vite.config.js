import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
		assetsInlineLimit: 0,
		rollupOptions: {
			input: {
				main: 'index.html',
				pdf: 'src/Assets/Abel_Acuña-CV.pdf',
				social: 'src/Assets/img/Portada.png',
			},
		},
	},
})
