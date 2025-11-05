'use client'
import { ArrowDown, EllipsisVertical } from 'lucide-react'
import { useEffect } from 'react'
import { advService, UNIT_1 } from '@/features/advRequest'
import { UNIT_2 } from '@/features/advRequest/constants/units'

export const LazyLoading = () => {
  useEffect(() => {
    advService.iniAdv()
    advService.advRequest([UNIT_1])
  }, [])

  return (
    <div className="h-64 overflow-y-scroll">
      <div>Scroll down to see the second lazy-loading ads</div>
      <div id={UNIT_1.adId} style={{ width: '300px', height: '250px' }} />
      <EllipsisVertical />
      <EllipsisVertical />
      <EllipsisVertical />
      <ArrowDown />
      <div className="flex items-end" style={{ height: '1000px' }}>
        <div id={UNIT_2.adId} style={{ width: '300px', height: '250px' }} />
      </div>
    </div>
  )
}
