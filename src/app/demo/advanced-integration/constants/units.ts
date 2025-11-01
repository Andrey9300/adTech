const DFP_CODE = '/Travel/Europe/France/Paris'

export const DFP_ID = '/6355419'

type TUnit = {
  adId: string
  dfpCode: string
  sizes: googletag.GeneralSize
}

export const UNIT: TUnit = {
  adId: 'banner-ad',
  dfpCode: DFP_CODE,
  sizes: [[300, 250]],
}

export const PREBID_UNITS = [
  {
    code: UNIT.adId,
    mediaTypes: { banner: { sizes: UNIT.sizes } },
    bids: [
      {
        bidder: 'sharethrough',
        params: { pkey: '1234567890abcdef12345678' },
      },
    ],
  },
]

export const AMAZON_UNITS = [
  {
    slotID: UNIT.adId,
    slotName: UNIT.dfpCode,
    sizes: UNIT.sizes,
  },
]
