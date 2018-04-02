// rollup.config.js
import commonjs from "rollup-plugin-commonjs";
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';

export default {
  input: './index.js',
  entry: './src/index.tsx',

  external: ['react', 'react-dom'],

  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  plugins: [
    resolve({ jsnext: true, main: true}),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    typescript({
      typescript: require('typescript')
    }),
    uglify()
  ],

  output: {
    file: "bundle.js",
    format: "iife",
    name: "Swipeout",
    globals: {
      react: 'React'
    }
  }
}
