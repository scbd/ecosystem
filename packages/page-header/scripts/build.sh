node scripts/build-static.js

rm -rf dist/*

vue-cli-service build --mode production --name PageHeader  --target lib --dest dist/ src/data-providers/Drupal.vue
