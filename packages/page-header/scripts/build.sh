rm -rf dist/*

vue-cli-service build --mode $NODE_ENV --name PageHeader  --target lib --dest dist/ src/data-providers/Drupal.vue

vue-cli-service build --mode $NODE_ENV  --name PageHeader --target lib --dest dist/dp/functional/ src/index.vue

vue-cli-service build --mode $NODE_ENV --name PageHeader  --target lib --dest dist/static/dp/static/ src/data-providers/Static.vue