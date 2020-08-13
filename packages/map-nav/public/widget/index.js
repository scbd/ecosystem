/* eslint-disable */
/*!
* @scbd/map-nav 0.1.0
*
* @link www.cbd.int
* @source https://github.com/scbd/@scbd/map-nav
* @copyright (c) 2019-2020 Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license MIT
* https://github.com/scbd/@scbd/map-nav/blob/master/LICENCE
*/

import { buildWidget, dependencyRef } from 'https://cdn.cbd.int/@scbd/self-embedding-component/dist/browser/index.js';

var name = "@scbd/map-nav";
var version = "0.1.0";

const options   = buildOptions();
const propsData = { options };
const selfUrl = 'http://localhost:8089/dist/browser/index.js';

const { VUE } = dependencyRef;
const dependencies      = { all: [VUE], 
                            css: ['https://cdn.cbd.int/@scbd/www-css']
                          };

const config            = { version, name, propsData, dependencies, selfUrl };

buildWidget(config);

function buildOptions(){
  const euIdentifier          = 'eur';
  const initEu                = false; // false means manually init eu with custom functionality

  return { countryParamName: 'country', euIdentifier, initEu }
}
//# sourceMappingURL=index.js.map
