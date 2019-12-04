rm -rf dist/*

vue-cli-service build --mode $NODE_ENV --name PageHeaderFixed           --target lib      --dest dist/                   src/data-providers/Drupal.vue
vue-cli-service build --mode $NODE_ENV --name FunctionalPageHeaderFixed --target lib      --dest dist/dp/functional/lib  src/index.vue
vue-cli-service build --mode $NODE_ENV --name StaticPageHeaderFixed     --target lib      --dest dist/dp/static/lib      src/data-providers/Static.vue

cp demo/demo.html dist/demo.html