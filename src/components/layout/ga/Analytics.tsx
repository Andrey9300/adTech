'use client'
import { useEffect } from 'react'

export const Analytics = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    function gtag(paramStr: any, param: any) {
      window.dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'G-MXV3H81NJS')
  }, [])

  return null
}
