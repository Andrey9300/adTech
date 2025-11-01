'use client'
import { useEffect } from 'react'
import { loadAsync } from '@/lib/loadAsync'
import { UNIT } from '../constants/units'
import { advRequestService } from '../services/advRequestService'
import { defineAds } from '../helpers/defineAds'

export const AdvancedIntegration = () => {
  useEffect(() => {
    defineAds()

    loadAsync('/vendor/prebid10.14.0.js')
    loadAsync('https://c.amazon-adsystem.com/aax2/apstag.js')
    loadAsync('https://securepubads.g.doubleclick.net/tag/js/gpt.js')

    advRequestService()
  }, [])

  return <div id={UNIT.adId} style={{ width: '300px', height: '250px' }} />
}
