const defineApstag = () => {
  const addToQueue = (c: any, r: any) => {
    // eslint-disable-next-line no-underscore-dangle
    window.apstag._Q.push([c, r])
  }

  window.apstag = {
    init(...rest: any) {
      addToQueue('i', rest)
    },
    fetchBids(...rest: any) {
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

export const defineAds = () => {
  window.googletag = window.googletag || { cmd: [] }
  window.pbjs = window.pbjs || { que: [] }
  defineApstag()
}
