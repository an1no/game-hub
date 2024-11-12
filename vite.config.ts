import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from 'vite-plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import checker from 'vite-plugin-checker';


// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), checker({typescript: true}), commonjs(), nodePolyfills(),], resolve: {
        dedupe: ['react', 'react-dom'],
    },
})
