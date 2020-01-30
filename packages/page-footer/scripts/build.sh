rm -rf dist/*

node scripts/build-static.js

vue-cli-service build --mode production --name PageFooter  --target lib --dest dist/ src/data-providers/Drupal.vue
