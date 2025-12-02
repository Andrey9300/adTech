import { vendorCmp } from '../vendor/vendorCmp'
import { loadAsync } from '@/lib/loadAsync'

export const initCmp = () => {
  const host = window.location.hostname

  loadAsync(
    `https://cmp.inmobi.com/choice/Sh9HkdbHFLsC9/${host}/choice.js?tag_version=V3`
  )

  vendorCmp()
}
