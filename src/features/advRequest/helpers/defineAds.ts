import { defineApstag } from './apstagHelper'

export const defineAds = () => {
  window.googletag = window.googletag || { cmd: [] }
  window.pbjs = window.pbjs || { que: [] }
  defineApstag()
}
