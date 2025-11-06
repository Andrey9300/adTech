import { DFP_ID } from '../constants/units'
import { TUnit } from '@/features/advRequest/types/unit'

export const initGpt = () => {
  window.googletag.cmd.push(function () {
    googletag.pubads().enableSingleRequest()
    googletag.pubads().collapseEmptyDivs()
    googletag.enableServices()
  })
}

export const defineGptSlot = (units: TUnit[]) => {
  window.googletag.cmd.push(function () {
    units.forEach((unit) => {
      const tag = googletag
        .defineSlot(`${DFP_ID}${unit.dfpCode}`, unit.sizes, unit.adId)
        ?.addService(googletag.pubads())

      unit.tag = tag

      Object.entries(unit?.customTargeting || {}).forEach(([target, val]) => {
        tag?.setTargeting(target, `${val}`)
      })
    })
  })
}
