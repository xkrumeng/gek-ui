import path from 'path'
import vue from 'rollup-plugin-vue'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import {terser} from 'rollup-plugin-terser'

const config = {
  input: path.resolve(__dirname, '../packages/index.ts'),
  output: {
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'gekView'
  },
  plugins: [
    terser(),
    nodeResolve(),
    vue({
      target: 'browser',
      css: false,
      exposeFilename: false,
    }),
    typescript({
      tsconfigOverride: {
        'include': [
          'packages/**/*',
          'typings/vue-shim.d.ts',
        ],
        'exclude': [
          'node_modules',
          'packages/**/__tests__/*',
        ],
      },
      abortOnError: false,
    })
  ],
  external(id) {
    return /^vue/.test(id)
  },
}

export default config
