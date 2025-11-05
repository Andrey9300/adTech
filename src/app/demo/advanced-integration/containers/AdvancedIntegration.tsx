'use client'
import { useEffect } from 'react'
import { advService, UNIT_1 } from '@/features/advRequest'

export const AdvancedIntegration = () => {
  useEffect(() => {
    advService.iniAdv()
    advService.advRequest([UNIT_1])
  }, [])

  return <div id={UNIT_1.adId} style={{ width: '300px', height: '250px' }} />
}
