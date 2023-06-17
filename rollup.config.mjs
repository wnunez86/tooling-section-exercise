import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: [
    {
      format: 'cjs',
      file: './dist/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};