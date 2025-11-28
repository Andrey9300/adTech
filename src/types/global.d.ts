import * as googletag from '@types/google-publisher-tag'

declare global {
  interface Window {
    googletag: googletag
    pbjs: any
    apstag: any
    dataLayer: any
  }
}
