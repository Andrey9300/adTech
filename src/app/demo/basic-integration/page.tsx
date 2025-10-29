'use client'
import { useEffect } from 'react'
import { loadAsync } from '@/lib/loadAsync'
import { DFP_ID, UNIT } from './constants/units'

export default function BasicIntegration() {
  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] }

    loadAsync('https://securepubads.g.doubleclick.net/tag/js/gpt.js')

    googletag.cmd.push(() => {
      googletag
        .defineSlot(`${DFP_ID}${UNIT.dfpCode}`, UNIT.sizes, UNIT.adId)
        ?.addService(googletag.pubads())

      googletag.enableServices()

      googletag.display(UNIT.adId)
    })
  }, [])

  return <div id={UNIT.adId} style={{ width: '300px', height: '250px' }}></div>
}
