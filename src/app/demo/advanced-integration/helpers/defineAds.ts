import { defineApstag } from '../helpers/apstagHelper'

export const defineAds = () => {
  window.googletag = window.googletag || { cmd: [] }
  window.pbjs = window.pbjs || { que: [] }
  defineApstag()
}
