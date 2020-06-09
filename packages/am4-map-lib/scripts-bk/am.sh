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
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4/lang/en.js src/amcharts4/lang/en.js

mkdir -p src/amcharts4-geodata
mkdir -p src/amcharts4-geodata/lang

rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/lang/EN.js src/amcharts4-geodata/lang/EN.js
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/lang/ES.js src/amcharts4-geodata/lang/ES.js
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/lang/AR.js src/amcharts4-geodata/lang/AR.js
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/lang/FR.js src/amcharts4-geodata/lang/FR.js
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/lang/RU.js src/amcharts4-geodata/lang/RU.js
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/lang/cn_ZH.js src/amcharts4-geodata/lang/cn_ZH.js
rsync "$HOME"/projects/@scbd/ecosystem/node_modules/@amcharts/amcharts4-geodata/worldLow.js src/amcharts4-geodata/worldLow.js

node  ./scripts/clean-ts-lib.mjs

echo "src/amcharts4" >> .eslintignore
echo "src/amcharts4-geodata" >> .eslintignore
