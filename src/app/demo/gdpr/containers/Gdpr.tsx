'use client'
import { useEffect } from 'react'
import { advService, UNIT_3 } from '@/features/advRequest'
import { initCmp, onTcfReady } from '@/features/tcf'

export const Gdpr = () => {
  useEffect(() => {
    initCmp()

    onTcfReady(({ hasPurposes }) => {
      if (!hasPurposes) {
        return
      }

      advService.iniAdv()
      advService.advRequest([UNIT_3])
    })
  }, [])

  return <div id={UNIT_3.adId} style={{ width: '728px', height: '90px' }} />
}
