#!/usr/bin/env bash

rm -rf dist/*
set -e

VERSION=$(node -p "require('./package.json').version")
BANNER=$(node -p "require('./scripts/util').banner")
FILE_NAME_PRE_FIX=$(node -p "require('./scripts/util').fileNamePreFix")

echo "Building ....."
echo "$BANNER"

echo 'Compile JS...'
BROWSERSLIST_ENV=production vue-cli-service build --mode production --name $FILE_NAME_PRE_FIX --target lib --dest dist/ src/index.js
BROWSERSLIST_ENV=ssr rollup -c scripts/rollup.config.js
BROWSERSLIST_ENV=modern rollup -c scripts/rollup.config.js

MINIFY=true BROWSERSLIST_ENV=ssr rollup -c scripts/rollup.config.js
MINIFY=true BROWSERSLIST_ENV=modern rollup -c scripts/rollup.config.js

node -p "require('./scripts/util').cleanCss()"

node -p "require('./scripts/util').fixSourceMaps()"

echo 'Done.'
echo ''