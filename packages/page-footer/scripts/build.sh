rm -rf dist/*

node scripts/build-static.js

vue-cli-service build --mode $NODE_ENV --name PageFooter  --target lib --dest dist/ src/data-providers/Drupal.vue
vue-cli-service build --mode production --name PageFooterWidget     --target lib      --dest dist/widget/            src/modules/widget.js

