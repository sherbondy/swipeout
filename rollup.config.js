// rollup.config.js
import commonjs from "rollup-plugin-commonjs";
import env from "rollup-plugin-env";
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
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
    env({ NODE_ENV: "production" }),
    resolve({ jsnext: true, main: true}),
    commonjs(),
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
