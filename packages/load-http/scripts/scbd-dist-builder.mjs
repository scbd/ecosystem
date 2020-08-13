const umd    = true
const cjs    = true
const legacy = { umd, cjs }

const modern = { output: { dir: './dist/browser' } }
const ssr    = { output: { dir: './dist/esm' } }

const widget     = { legacy: true, modern: true }
const testWidget = { legacy: true, modern: true }

export default {
  legacy, modern, ssr
}