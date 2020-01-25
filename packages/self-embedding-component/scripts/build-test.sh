vue-cli-service build --mode production --name widget  --target lib --formats umd -dest dist/test tests/e2e/scaffolding/widget.js
ls -al dist
cp dist/widget.umd.js public/