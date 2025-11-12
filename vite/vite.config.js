import path from 'path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// absoluter Pfad zur aktuellen Datei
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),

    ],

    base: 'static', // <--- wichtig, damit keine /static/ Präfixe erzeugt werden

    root: path.resolve(__dirname, 'src'), // <--- jetzt richtig! Root ist src/
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true,
        minify: false,
        sourcemap: true,
        manifest: true,
        rollupOptions: {
            input: path.resolve(__dirname, 'src/main.js'),
        },
    },

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            vue: 'vue/dist/vue.esm.js',
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '~bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons'),
            '~fontawesome': path.resolve(__dirname, 'node_modules/fontawesome-free'),
            '~plyr': path.resolve(__dirname, 'node_modules/plyr'),
            'hls': path.resolve(__dirname, 'node_modules/hls.js'),
        },
    },

    server: {
        origin: 'http://localhost:5173',
        port: 5173,
        cors: true,
    },
})
