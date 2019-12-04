vue-cli-service build --mode $NODE_ENV --name PageFooter  --target lib --dest dist/ src/data-providers/Drupal.vue

vue-cli-service build --mode $NODE_ENV  --name PageFooter --target lib --dest dist/dp/functional/ src/index.vue

vue-cli-service build --mode $NODE_ENV --name PageFooter  --target lib --dest dist/dp/static/ src/data-providers/Static.vue