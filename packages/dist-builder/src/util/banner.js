
import { name, pkgName, version, license } from './pkg.js'

const year            = new Date().getFullYear()

export const banner = `/*!
* ${name} ${version}
*
* @link www.cbd.int
* @source https://github.com/scbd/ecosystem/packages/${pkgName}
* @copyright (c) 2019-${year} Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license ${license}
* https://github.com/scbd/ecosystem/blob/master/LICENCE
*/
`