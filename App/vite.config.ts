import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
// import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte({
            preprocess: sveltePreprocess()
        }),
    ],
    resolve: {
        alias: {
            $cmp: 'src/components'
            // 'src': path.resolve(__dirname, 'src'),
            // 'cmp': path.resolve(__dirname, './src/components'),
            // src: path.resolve('src/components/')
            // cmp: path.resolve('./src/components'),
            // $msw: path.resolve("./src/msw")
        }
    }
})
