import { PREBID_UNITS, UNIT } from '../constants/units'
import { AUCTION_TIMEOUT, PREBID_TIMEOUT } from '../constants/timeout'

const PREBID_CONFIG = {
  debugging: {
    enabled: true,
    intercept: [
      {
        when: {
          adUnitCode: UNIT.adId,
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
  window.pbjs.que.push(function () {
    window.pbjs.setConfig(PREBID_CONFIG)
  })
}

export const prebidPromise = () =>
  new Promise((resolve) => {
    const pbTimeout = setTimeout(() => {
      resolve(false)
    }, AUCTION_TIMEOUT)

    window.pbjs.que.push(function () {
      window.pbjs.addAdUnits(PREBID_UNITS)

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
