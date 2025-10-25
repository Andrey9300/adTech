'use client'
import { useEffect } from 'react'
import { loadAsync } from '@/lib/loadAsync'

const DFP_CODE = '/6355419/Travel/'
const AD_UNIT = 'Europe/France/Paris'
const BANNER_ID = 'banner-ad'

export default function BasicIntegration() {
  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] }

    loadAsync('https://securepubads.g.doubleclick.net/tag/js/gpt.js')

    googletag.cmd.push(() => {
      googletag
        .defineSlot(`${DFP_CODE}${AD_UNIT}`, [300, 250], BANNER_ID)
        ?.addService(googletag.pubads())

      // Enable the PubAdsService.
      googletag.enableServices()

      googletag.display(BANNER_ID)
    })
  }, [])

  return <div id={BANNER_ID} style={{ width: '300px', height: '250px' }}></div>
}
