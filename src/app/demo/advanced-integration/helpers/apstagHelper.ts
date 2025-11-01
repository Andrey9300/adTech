import { AUCTION_TIMEOUT } from '../constants/timeout'
import { AMAZON_UNITS } from '../constants/units'

export const defineApstag = () => {
  const addToQueue = (c, r) => {
    // eslint-disable-next-line no-underscore-dangle
    window.apstag._Q.push([c, r])
  }

  window.apstag = {
    init(...rest) {
      addToQueue('i', rest)
    },
    fetchBids(...rest) {
      addToQueue('f', rest)
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setDisplayBids() {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    rpa() {},
    targetingKeys() {
      return []
    },
    _Q: [],
  }
}

export const initApstag = () => {
  window.apstag.init({
    pubID: 'YOUR_AMAZON_PUB_ID',
    adServer: 'googletag',
  })
}

export const apstagPromise = () =>
  new Promise((resolve) => {
    const apsTimeout = setTimeout(() => {
      resolve(false)
    }, AUCTION_TIMEOUT)

    window.apstag.fetchBids({ slots: AMAZON_UNITS }, function () {
      window.googletag.cmd.push(() => {
        window.apstag.setDisplayBids()
      })
      clearTimeout(apsTimeout)
      resolve(true)
    })
  })
