'use client'
import { useEffect } from 'react'
import { advService, UNIT_3 } from '@/features/advRequest'

export const Refresh = () => {
  useEffect(() => {
    advService.iniAdv()
    advService.advRequest([UNIT_3])
  }, [])

  const handleClick = () => {
    if (!UNIT_3.tag) {
      return
    }

    googletag.cmd.push(() => {
      googletag.pubads().refresh([UNIT_3.tag!])
    })
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 pointed rounded"
      >
        Click to refresh
      </button>
      <div id={UNIT_3.adId} style={{ width: '728px', height: '90px' }} />
    </div>
  )
}
