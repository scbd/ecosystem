/*!
* @scbd/action-search 0.0.21
*
* @link www.cbd.int
* @source https://github.com/scbd/ecosystem/packages/action-search
* @copyright (c) 2019-2020 Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license MIT
* https://github.com/scbd/ecosystem/blob/master/LICENCE
*/

import { buildWidget, dependencyRef } from 'https://cdn.cbd.int/@scbd/self-embedding-component/dist/browser/index.min.js';

var name = "@scbd/action-search";
var version = "0.0.21";

const libName   = name.replace('https://cdn.cbd.int/', '');//hack for browser build
const options   = {};
const propsData = { options, forceEnv:'dev' };

const selfUrl = 'http://localhost:8089/dist/browser/index.js';

const { VUE, VUE_I18N, SCBD_SSO_AUTH } = dependencyRef;

const dependencies      = { all: [VUE, VUE_I18N, SCBD_SSO_AUTH ], 
                            vuePlugins:[VUE_I18N, SCBD_SSO_AUTH], 
                            css: ['https://cdn.cbd.int/@scbd/www-css']
                          };

const config            = { version, name:libName, propsData, dependencies, selfUrl };

buildWidget(config);
//# sourceMappingURL=index.js.map
