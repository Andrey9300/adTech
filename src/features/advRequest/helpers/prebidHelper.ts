import { getPrebidUnit } from '../constants/units'
import { AUCTION_TIMEOUT, PREBID_TIMEOUT } from '../constants/timeout'
import { TUnit } from '@/features/advRequest/types/unit'

const PREBID_CONFIG = {
  debugging: {
    enabled: true,
    intercept: [
      {
        when: {
          adUnitCode: 'test',
        },
        then: {
          cpm: 100,
          width: 300,
          height: 250,
        },
      },
    ],
  },
}

export const initPrebid = () => {
  const isDebug = false

  if (!isDebug) {
    return
  }

  window.pbjs.que.push(function () {
    window.pbjs.setConfig(PREBID_CONFIG)
  })
}

export const prebidPromise = (units: TUnit[]) =>
  new Promise((resolve) => {
    const pbTimeout = setTimeout(() => {
      resolve(false)
    }, AUCTION_TIMEOUT)

    window.pbjs.que.push(function () {
      window.pbjs.addAdUnits(units.map(getPrebidUnit))

      window.pbjs.requestBids({
        bidsBackHandler: () => {
          clearTimeout(pbTimeout)

          window.googletag.cmd.push(() => {
            window.pbjs.setTargetingForGPTAsync()
          })
          resolve(true)
        },
        timeout: PREBID_TIMEOUT,
      })
    })
  })
