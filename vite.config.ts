import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from 'vite-plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), commonjs(), nodePolyfills()],
})
