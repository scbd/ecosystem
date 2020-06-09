node scripts/load-Countries

vue-cli-service build --mode production --name MapNav   --target lib --dest dist/ src/index.vue

vue-cli-service build --mode production --name MapNavWidget  --target lib --dest dist/widget/ src/widget.js
