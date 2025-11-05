'use client'
import { useEffect } from 'react'
import { advService, UNIT } from '@/features/advRequest'

export const LazyLoading = () => {
  useEffect(() => {
    advService.iniAdv([UNIT])
    advService.advRequest()
  }, [])

  return <div id={UNIT.adId} style={{ width: '300px', height: '250px' }} />
}
