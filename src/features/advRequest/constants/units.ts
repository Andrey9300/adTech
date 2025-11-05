import { TUnit } from '../types/unit'

const DFP_CODE = '/Travel/Europe/France/Paris'

export const DFP_ID = '/6355419'

export const UNIT: TUnit = {
  adId: 'banner-ad',
  dfpCode: DFP_CODE,
  sizes: [[300, 250]],
}

export const getPrebidUnit = (unit: TUnit) => ({
  code: unit.adId,
  mediaTypes: { banner: { sizes: unit.sizes } },
  bids: [
    {
      bidder: 'sharethrough',
      params: { pkey: '1234567890abcdef12345678' },
    },
  ],
})

export const getAmazonUnit = (unit: TUnit) => ({
  slotID: unit.adId,
  slotName: unit.dfpCode,
  sizes: unit.sizes,
})
