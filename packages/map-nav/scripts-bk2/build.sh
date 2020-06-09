#!/usr/bin/env bash

rm -rf dist/*
set -e


VERSION=$(node -p "require('./package.json').version")
BANNER=$(node -p "require('./scripts/util').banner")
PKG_NAME=$(node -p "require('./scripts/util').fileNamePreFix")

echo "Building ....."
echo "$BANNER"

echo 'Compile JS...'
BROWSERSLIST_ENV=legacy vue-cli-service build --mode production --name $PKG_NAME --target lib --formats commonjs --dest dist/legacy/cjs/ --filename index src/index.js
BROWSERSLIST_ENV=legacy vue-cli-service build --mode production --name $PKG_NAME --target lib --formats umd,umd-min --dest dist/legacy/umd/ --filename index src/index.js 

# mkdir -p dist/browser
# chmod 777 dist/browser

#BROWSERSLIST_ENV=ssr rollup -c scripts/rollup.config.js
#BROWSERSLIST_ENV=modern rollup -c scripts/rollup.config.js

node -p "require('./scripts/util').useCdn()" 

echo 'Done.'
echo ''