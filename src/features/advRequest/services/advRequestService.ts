import { defineGptSlot, initGpt } from '../helpers/googleGptHelper'
import { initPrebid, prebidPromise } from '../helpers/prebidHelper'
import { apstagPromise, initApstag } from '../helpers/apstagHelper'
import { defineAds } from '../helpers/defineAds'
import { loadAsync } from '@/lib/loadAsync'
import { TUnit } from '../types/unit'

let isInit = false

const iniAdv = () => {
  if (isInit) {
    return
  }

  isInit = true

  defineAds()

  loadAsync('/vendor/prebid10.14.0.js')
  loadAsync('https://c.amazon-adsystem.com/aax2/apstag.js')
  loadAsync('https://securepubads.g.doubleclick.net/tag/js/gpt.js')

  initApstag()
  initPrebid()
  initGpt()
}

const advRequest = (units: TUnit[]) => {
  defineGptSlot(units)

  Promise.all([prebidPromise(units), apstagPromise(units)]).then(() => {
    window.googletag.cmd.push(() => {
      units.map((unit) => {
        window.googletag.display(unit.adId)
      })
    })
  })
}

export const advService = {
  iniAdv,
  advRequest,
}
