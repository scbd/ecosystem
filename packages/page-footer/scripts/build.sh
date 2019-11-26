

vue-cli-service build --mode $NODE_ENV  --name PageFooter --target lib --dest dist/lib src/index.vue
# vue-cli-service build --mode $NODE_ENV --name page-footer --target wc --dest dist/wc src/index.vue  
# vue-cli-service build --mode $NODE_ENV --name page-footer --target wc-async --dest dist/wc-async src/index.vue

vue-cli-service build --mode $NODE_ENV --name StaticPageFooter  --target lib --dest dist/static/lib src/data-providers/Static.vue
# vue-cli-service build --mode $NODE_ENV --name static-page-footer --target wc --dest dist/static/wc src/data-providers/Static.vue 
# vue-cli-service build --mode $NODE_ENV --name static-page-footer --target wc-async --dest dist/static/wc-async src/data-providers/Static.vue
