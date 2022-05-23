import resolve from '@rollup/plugin-node-resolve'
import sveltePreprocess from 'svelte-preprocess'
import { terser } from 'rollup-plugin-terser'
import svelte from 'rollup-plugin-svelte'
import autoprefixer from 'autoprefixer'

export default {
  input: './src/lib/Purr.svelte',
  output: {
    file: 'build/purr.js'
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        postcss: {
          plugins: [autoprefixer()]
        }
      }),
      compilerOptions: {
        customElement: true,
        tag: 'purr-element'
      }
    }),
    resolve({ browser: true }),
    terser()
  ]
}
