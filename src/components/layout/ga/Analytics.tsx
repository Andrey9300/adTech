'use client'
import { useEffect } from 'react'
import { loadAsync } from '@/lib/loadAsync'
import { initCmp, onTcfReady } from '@/features/tcf'

export const Analytics = () => {
  useEffect(() => {
    initCmp()

    onTcfReady(({ hasPurposes }) => {
      if (!hasPurposes) {
        return
      }

      loadAsync('https://www.googletagmanager.com/gtag/js?id=G-MXV3H81NJS')

      window.dataLayer = window.dataLayer || []
      function gtag(paramStr: any, param: any) {
        window.dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', 'G-MXV3H81NJS')
    })
  }, [])

  return null
}
