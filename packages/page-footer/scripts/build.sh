rm -rf dist/*

node scripts/build-static.js

vue-cli-service build --mode $NODE_ENV --name PageFooter  --target lib --dest dist/ src/data-providers/Drupal.vue