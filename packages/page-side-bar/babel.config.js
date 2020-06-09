module.exports = {
  sourceMaps    : true,
  inputSourceMap: true,
  presets       : [
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    es: {
      plugins: [ [ '@babel/plugin-transform-modules-commonjs', { loose: true } ] ]
    },
    esm: {
      presets: [ [ '@babel/env', { modules: false } ] ]
    },
    test: {
      presets: [ [ '@babel/env', { targets: { node: 'current' } } ] ]
    }
  }
}
