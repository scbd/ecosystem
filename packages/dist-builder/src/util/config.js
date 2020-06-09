import { pathToFileURL  } from 'url'
import { configFilePath } from '../init/index.js'

export const getConfig = async () => {
  const config = (await import(pathToFileURL(configFilePath).href)).default

  const { modern, ssr, legacy, widget, testWidget, clean = true } = config

  const { cjs, umd                          } = legacy || {}
  const   hasEsmBuilds                        = modern || ssr
  const   hasLegacyBuilds                     = cjs    || umd
  const   hasEsmAndLegacyBuilds               = hasEsmBuilds && hasLegacyBuilds

  return { modern, ssr, legacy, clean, cjs, umd, hasEsmBuilds, hasLegacyBuilds, hasEsmAndLegacyBuilds, widget, testWidget }
}