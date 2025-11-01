import { UNIT } from '../constants/units'
import { defineGptSlot, initGpt } from '../helpers/googleGptHelper'
import { initPrebid, prebidPromise } from '../helpers/prebidHelper'
import { apstagPromise, initApstag } from '../helpers/apstagHelper'

export const advRequestService = () => {
  initPrebid()
  initGpt()
  defineGptSlot()
  initApstag()

  Promise.all([prebidPromise, apstagPromise]).then(() => {
    window.googletag.cmd.push(() => {
      window.googletag.display(UNIT.adId)
    })
  })
}
