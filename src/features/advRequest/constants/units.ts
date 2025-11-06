import { TUnit } from '../types/unit'

const DFP_CODE = '/Travel/Europe/France/Paris'

export const DFP_ID = '/6355419'

export const UNIT_1: TUnit = {
  adId: 'unit_1',
  dfpCode: DFP_CODE,
  sizes: [[300, 250]],
}

export const UNIT_2: TUnit = {
  adId: 'unit_2',
  dfpCode: DFP_CODE,
  sizes: [[300, 250]],
}

export const UNIT_3: TUnit = {
  adId: 'unit_3',
  dfpCode: '/Travel',
  sizes: [[728, 90]],
  customTargeting: { test: 'refresh' },
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
