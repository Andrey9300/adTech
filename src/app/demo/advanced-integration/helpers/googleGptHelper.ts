import { DFP_ID, UNIT } from '../constants/units'

export const initGpt = () => {
  window.googletag.cmd.push(function () {
    googletag.pubads().enableSingleRequest()
    googletag.pubads().collapseEmptyDivs()
    googletag.enableServices()
  })
}

export const defineGptSlot = () => {
  window.googletag.cmd.push(function () {
    googletag
      .defineSlot(`${DFP_ID}${UNIT.dfpCode}`, UNIT.sizes, UNIT.adId)
      ?.addService(googletag.pubads())
  })
}
