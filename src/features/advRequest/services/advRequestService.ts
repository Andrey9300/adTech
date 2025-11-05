import { defineGptSlot, initGpt } from '../helpers/googleGptHelper'
import { initPrebid, prebidPromise } from '../helpers/prebidHelper'
import { apstagPromise, initApstag } from '../helpers/apstagHelper'
import { defineAds } from '../helpers/defineAds'
import { loadAsync } from '@/lib/loadAsync'
import { TUnit } from '../types/unit'

type TConfig = {
  isInit: boolean
  units: TUnit[]
}

const config: TConfig = {
  isInit: false,
  units: [],
}

const iniAdv = (units: TUnit[]) => {
  if (config.isInit) {
    return
  }

  config.isInit = true
  config.units = units

  defineAds()

  loadAsync('/vendor/prebid10.14.0.js')
  loadAsync('https://c.amazon-adsystem.com/aax2/apstag.js')
  loadAsync('https://securepubads.g.doubleclick.net/tag/js/gpt.js')
}

const advRequest = () => {
  const { units } = config
  initApstag()
  initPrebid()
  initGpt()

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
