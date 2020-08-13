!/usr/bin/env bash

#COPY JUST WHAT IS USED FROM AMCHARTS
EXCL="--exclude .internal/pdfmake --exclude core.js --exclude maps.js --exclude lang --exclude charts.js --exclude node_modules --exclude *.ts --exclude examples --exclude themes --exclude *.md --exclude LICENCE --exclude *.map --exclude LICEN* --exclude CHANGELOG* --exclude package.*"
echo $EXCL
rm -rf src/amcharts4
rm -rf src/amcharts4-geodata

CMMD="rsync -r  $EXCL  $HOME/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4/ src/amcharts4"
$CMMD
mkdir -p src/amcharts4/lang
mkdir -p src/amcharts4/.internal/themes

cp scripts/templates/core.js src/amcharts4/core.js
cp scripts/templates/maps.js src/amcharts4/maps.js
cp scripts/templates/Export.js src/amcharts4/.internal/core/export/Export.js
cp scripts/templates/ExportMenu.js src/amcharts4/.internal/core/export/ExportMenu.js

rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4/.internal/themes/animated.js src/amcharts4/.internal/themes/animated.js
# rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4/lang/en.js src/amcharts4/lang/en.js

mkdir -p src/amcharts4-geodata
mkdir -p scripts/temp

rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/lang/EN.js scripts/temp/EN.mjs
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/lang/ES.js scripts/temp/ES.mjs
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/lang/AR.js scripts/temp/AR.mjs
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/lang/FR.js scripts/temp/FR.mjs
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/lang/RU.js scripts/temp/RU.mjs
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/lang/cn_ZH.js scripts/temp/ZH.mjs

rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/worldLow.js scripts/temp/worldLow.mjs
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/worldHigh.js scripts/temp/worldHigh.mjs
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/worldUltra.js scripts/temp/worldUltra.mjs

node  ./scripts/clean-ts-lib.mjs
node  ./scripts/apply-political-mappings.mjs
rm -rf scripts/temp/*

echo "src/amcharts4" >> .eslintignore
echo "src/amcharts4-geodata" >> .eslintignore
