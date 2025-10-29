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
