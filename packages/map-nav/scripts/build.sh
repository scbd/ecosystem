vue-cli-service build --mode production --name MapNav   --target lib --dest dist/ src/index.vue

vue-cli-service build --mode production --name MapNavWidget  --target lib --dest dist/widget/ src/modules/widget.js
vue-cli-service build --mode production --name DefaultOptions  --target lib --dest dist/options/ src/modules/default-options.js

#vue-cli-service build --mode production --name MapNavWidget  --formats umd --target lib --dest dist/test-widget/ tests/e2e/scaffolding/test-widget.js

# vue-cli-service build --mode production --name MapNavConfig  --target lib --dest dist/config/ src/modules/config.js
