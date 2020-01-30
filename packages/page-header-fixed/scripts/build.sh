node scripts/build-static.js
rm -rf dist/*

node scripts/build-static.js
vue-cli-service build --mode production --name PageHeaderFixed  --target lib   --dest dist/  src/data-providers/Drupal.vue
# vue-cli-service build --mode production --name PageHeaderFixedWidget     --target lib      --dest dist/widget/            src/modules/widget.js

cp demo/demo.html dist/demo.html

# vue-cli-service build --mode production --name PageHeaderFixed  --dest dist/  --watch