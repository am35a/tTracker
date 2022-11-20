import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte({
            preprocess: sveltePreprocess()
        }),
    ],
    resolve: {
        alias: {
            $cmp: path.resolve('./src/components'),
            $doc: path.resolve('./src/document'),
            $str: path.resolve('./src/store')
        }
    }
})
