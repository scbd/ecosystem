#vue-cli-service build --watch --mode production --name MapNav --target lib  --formats umd --dest dist/ src/index.vue

# vue-cli-service build --mode production --name MapNavConfig  --target lib --dest dist/config/ src/modules/config.js

vue-cli-service build --watch --mode production --name MapNavWidget  --formats umd --target lib --dest dist/test-widget/ tests/e2e/scaffolding/test-widget.js
