

vue-cli-service build --mode $NODE_ENV  --name PageHeader --target lib --dest dist/lib src/index.vue
# vue-cli-service build --mode $NODE_ENV --name page-header --target wc --dest dist/wc src/index.vue  
# vue-cli-service build --mode $NODE_ENV --name page-header --target wc-async --dest dist/wc-async src/index.vue
# vue-cli-service build --mode $NODE_ENV --name i18n --target lib --dest dist/lib src/modules/i18n.js

vue-cli-service build --mode $NODE_ENV --name StaticPageHeader  --target lib --dest dist/static/lib src/data-providers/Static.vue
# vue-cli-service build --mode $NODE_ENV --name static-page-header --target wc --dest dist/static/wc src/data-providers/Static.vue 
# vue-cli-service build --mode $NODE_ENV --name static-page-header --target wc-async --dest dist/static/wc-async src/data-providers/Static.vue
# vue-cli-service build --mode $NODE_ENV --name i18n --target lib --dest dist/static/lib src/modules/i18n.js