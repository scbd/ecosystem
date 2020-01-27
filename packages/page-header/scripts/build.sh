node scripts/build-static.js

rm -rf dist/*

vue-cli-service build --mode $NODE_ENV --name PageHeader  --target lib --dest dist/ src/data-providers/Drupal.vue
