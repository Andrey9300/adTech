import { UNIT } from '../constants/units'
import { defineGptSlot, initGpt } from '../helpers/googleGptHelper'
import { initPrebid, prebidPromise } from '../helpers/prebidHelper'
import { apstagPromise, initApstag } from '../helpers/apstagHelper'
import { defineAds } from '../helpers/defineAds'
import { loadAsync } from '@/lib/loadAsync'

let isInit = false

export const iniAdv = () => {
  if (isInit) {
    return
  }

  isInit = true

  defineAds()

  loadAsync('/vendor/prebid10.14.0.js')
  loadAsync('https://c.amazon-adsystem.com/aax2/apstag.js')
  loadAsync('https://securepubads.g.doubleclick.net/tag/js/gpt.js')
}

export const advRequest = () => {
  initApstag()
  initPrebid()
  initGpt()

  defineGptSlot()

  Promise.all([prebidPromise, apstagPromise]).then(() => {
    window.googletag.cmd.push(() => {
      window.googletag.display(UNIT.adId)
    })
  })
}

export const advService = {
  iniAdv,
  advRequest,
}
