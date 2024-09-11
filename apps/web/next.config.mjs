import makeDevServer from '@shared/compiler/make-dev-server.mjs'
// @ts-check
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

export default phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.devServer = makeDevServer()

      return config
    },
  }
  return nextConfig
}
