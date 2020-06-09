/* config.module.rule('css') */
{
  test: /\.css$/,
  oneOf: [
    /* config.module.rule('css').oneOf('vue-modules') */
    {
      resourceQuery: /module/,
      use: [
        /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-style-loader/index.js',
          options: {
            sourceMap: false,
            shadowMode: false
          }
        },
        /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/css-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            importLoaders: 3,
            modules: {
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          }
        },
        /* config.module.rule('css').oneOf('vue-modules').use('cssnano') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/postcss-loader/src/index.js',
          options: {
            sourceMap: false,
            plugins: [
              function () { /* omitted long function */ }
            ]
          }
        },
        /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/postcss-loader/src/index.js',
          options: {
            sourceMap: false
          }
        }
      ]
    },
    /* config.module.rule('css').oneOf('vue') */
    {
      resourceQuery: /\?vue/,
      use: [
        /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-style-loader/index.js',
          options: {
            sourceMap: false,
            shadowMode: false
          }
        },
        /* config.module.rule('css').oneOf('vue').use('css-loader') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/css-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            importLoaders: 3
          }
        },
        /* config.module.rule('css').oneOf('vue').use('cssnano') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/postcss-loader/src/index.js',
          options: {
            sourceMap: false,
            plugins: [
              function () { /* omitted long function */ }
            ]
          }
        },
        /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/postcss-loader/src/index.js',
          options: {
            sourceMap: false
          }
        }
      ]
    },
    /* config.module.rule('css').oneOf('normal-modules') */
    {
      test: /\.module\.\w+$/,
      use: [
        /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-style-loader/index.js',
          options: {
            sourceMap: false,
            shadowMode: false
          }
        },
        /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/css-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            importLoaders: 3,
            modules: {
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          }
        },
        /* config.module.rule('css').oneOf('normal-modules').use('cssnano') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/postcss-loader/src/index.js',
          options: {
            sourceMap: false,
            plugins: [
              function () { /* omitted long function */ }
            ]
          }
        },
        /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/postcss-loader/src/index.js',
          options: {
            sourceMap: false
          }
        }
      ]
    },
    /* config.module.rule('css').oneOf('normal') */
    {
      use: [
        /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-style-loader/index.js',
          options: {
            sourceMap: false,
            shadowMode: false
          }
        },
        /* config.module.rule('css').oneOf('normal').use('css-loader') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/css-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            importLoaders: 3
          }
        },
        /* config.module.rule('css').oneOf('normal').use('cssnano') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/postcss-loader/src/index.js',
          options: {
            sourceMap: false,
            plugins: [
              function () { /* omitted long function */ }
            ]
          }
        },
        /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
        {
          loader: '/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/postcss-loader/src/index.js',
          options: {
            sourceMap: false
          }
        }
      ]
    }
  ]
}
