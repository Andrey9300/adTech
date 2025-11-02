'use client'
import { useEffect } from 'react'
import { advService, UNIT } from '@/features/advRequest'

export const AdvancedIntegration = () => {
  useEffect(() => {
    advService.iniAdv()
    advService.advRequest()
  }, [])

  return <div id={UNIT.adId} style={{ width: '300px', height: '250px' }} />
}
