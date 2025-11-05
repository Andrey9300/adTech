import { AUCTION_TIMEOUT } from '../constants/timeout'
import { getAmazonUnit } from '../constants/units'
import { TUnit } from '@/features/advRequest/types/unit'

export const initApstag = () => {
  window.apstag.init({
    pubID: 'YOUR_AMAZON_PUB_ID',
    adServer: 'googletag',
  })
}

export const apstagPromise = (units: TUnit[]) =>
  new Promise((resolve) => {
    const apsTimeout = setTimeout(() => {
      resolve(false)
    }, AUCTION_TIMEOUT)

    window.apstag.fetchBids({ slots: units.map(getAmazonUnit) }, function () {
      window.googletag.cmd.push(() => {
        window.apstag.setDisplayBids()
      })
      clearTimeout(apsTimeout)
      resolve(true)
    })
  })
