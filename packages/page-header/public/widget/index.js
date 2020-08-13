/* eslint-disable */
/*!
* @scbd/page-header 0.1.0
*
* @link www.cbd.int
* @source https://github.com/scbd/@scbd/page-header
* @copyright (c) 2019-2020 Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license MIT
* https://github.com/scbd/@scbd/page-header/blob/master/LICENCE
*/

import { buildWidget, dependencyRef } from 'https://cdn.cbd.int/@scbd/self-embedding-component/dist/browser/index.js';

var name = "@scbd/page-header";
var version = "0.1.0";

const   regX        = new RegExp('(@[^/]+/[^/]+)', 'ig');
const [ libName   ] = name.match(regX);
const   options     = {};
const   propsData   = { options };

const selfUrl = 'http://localhost:8089/dist/browser/index.js';

const { VUE, VUE_I18N } = dependencyRef;


const dependencies      = { all       : [ VUE, VUE_I18N ],
                            vuePlugins: [ VUE_I18N ],
                            css       : [ 'https://cdn.cbd.int/@scbd/www-css' ] };

const config            = { version, name: libName, propsData, dependencies, selfUrl };

buildWidget(config);
//# sourceMappingURL=index.js.map
