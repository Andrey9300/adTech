export type TUnit = {
  adId: string
  dfpCode: string
  sizes: googletag.GeneralSize
  tag?: googletag.Slot
  customTargeting?: Record<string, number | string>
}
