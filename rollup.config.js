// rollup.config.js
import commonjs from "rollup-plugin-commonjs";
import globals from 'rollup-plugin-node-globals';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';

export default {
  input: './index.js',
  entry: './src/index.tsx',

  external: ['react', 'react-dom'],

  plugins: [
    commonjs(),
    globals(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({ jsnext: true, main: true}),
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
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  }
}
