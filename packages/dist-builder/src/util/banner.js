import { name, pkgName, version, license } from './pkg.js'
import { getConfig                       } from './config.js'

const year   = new Date().getFullYear()

export const banner = `/* eslint-disable */
/*!
* ${name} ${version}
*
* @link www.cbd.int
* @source https://github.com/scbd/${name}
* @copyright (c) 2019-${year} Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license ${license}
* https://github.com/scbd/${name}/blob/master/LICENCE
*/
`

export const getBanner = async() => {
  const { monoRepoName } = await getConfig()

  return monoRepoName? `/* eslint-disable */
/*!
* ${name} ${version}
*
* @link www.cbd.int
* @source https://github.com/scbd/${monoRepoName}/tree/master/packages/${pkgName}
* @copyright (c) 2019-${year} Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license ${license}
* https://github.com/scbd/${monoRepoName || name}/blob/master/LICENCE
*/
` : banner
}