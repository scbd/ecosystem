/* eslint-disable */
/*!
* @scbd/page-header-fixed 1.0.0
*
* @link www.cbd.int
* @source https://github.com/scbd/@scbd/page-header-fixed
* @copyright (c) 2019-2020 Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license MIT
* https://github.com/scbd/@scbd/page-header-fixed/blob/master/LICENCE
*/

import { buildWidget, dependencyRef } from 'https://cdn.cbd.int/@scbd/self-embedding-component/dist/browser/index.js';

var name = "@scbd/page-header-fixed";
var version = "1.0.0";

const   regX        = new RegExp('(@[^/]+/[^/]+)', 'ig');
const [ libName   ] = name.match(regX);
const   options     = {};
const   propsData   = { options, forceEnv:'dev' };

const selfUrl = 'http://localhost:8089/dist/browser/index.js';

const { VUE, VUE_I18N, SCBD_SSO_AUTH } = dependencyRef;


const dependencies      = { all       : [ VUE, VUE_I18N, SCBD_SSO_AUTH ],
                            vuePlugins: [ VUE_I18N, SCBD_SSO_AUTH ],
                            css       : [ 'https://cdn.cbd.int/@scbd/www-css' ] };

const config            = { version, name: libName, propsData, dependencies, selfUrl };

buildWidget(config);
//# sourceMappingURL=index.js.map
