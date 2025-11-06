'use client'
import { ArrowDown, EllipsisVertical } from 'lucide-react'
import { useEffect } from 'react'
import { advService, UNIT_1 } from '@/features/advRequest'
import { UNIT_2 } from '@/features/advRequest/constants/units'
import { intersectionObserver } from '@/lib/intersectionObserver'

const root = 'lazy-loading'

export const LazyLoading = () => {
  useEffect(() => {
    advService.iniAdv()
    advService.advRequest([UNIT_1])

    const loadAds = () => {
      advService.advRequest([UNIT_2])
    }

    const rootElem = document.querySelector(`#${root}`)
    const bannerElem = document.querySelector(`#${UNIT_2.adId}`)

    if (rootElem && bannerElem) {
      intersectionObserver({
        root: rootElem,
        elem: bannerElem,
        callback: loadAds,
      })
    }
  }, [])

  return (
    <div id={root} className="h-64 overflow-y-scroll">
      <div className="mb-4">Scroll down to see the second lazy-loading ads</div>
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
