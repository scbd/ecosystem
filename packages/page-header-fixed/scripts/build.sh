rm -rf dist/*

vue-cli-service build --mode production --name PageHeaderFixed           --target lib      --dest dist/                   src/data-providers/Drupal.vue
vue-cli-service build --mode production --name FunctionalPageHeaderFixed --target lib      --dest dist/dp/functional/lib  src/index.vue
#vue-cli-service build --mode production --name StaticPageHeaderFixed     --target lib      --dest dist/dp/static/lib      src/data-providers/Static.vue
#vue-cli-service build --mode production --name PageHeaderFixedWidget     --target lib      --dest dist/widget/            src/modules/widget.js

cp demo/demo.html dist/demo.html