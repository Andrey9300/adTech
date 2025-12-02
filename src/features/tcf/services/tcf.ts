import { TcfApi } from '../helpers/tcfapi'
import { TTcfData } from '../types/tcf'
import { LISTENER_VERSION } from '../constants/tcf'

type TOnConsent = {
  hasPurposes: boolean
}

const waitForTcf = (
  tcData: TTcfData,
  onConsent?: ({ hasPurposes }: TOnConsent) => void
) => {
  if (!tcData) {
    return
  }

  if (['tcloaded', 'useractioncomplete'].indexOf(tcData.eventStatus) === -1) {
    return
  }

  TcfApi.getTcfApi?.('removeEventListener', 2, waitForTcf, tcData.listenerId)

  onConsent?.({ hasPurposes: !!tcData.purpose.consents[1] })
}

export const onTcfReady = (
  onConsent: ({ hasPurposes }: TOnConsent) => void
) => {
  TcfApi.getTcfApi?.(
    'addEventListener',
    LISTENER_VERSION,
    (event: TTcfData) => {
      waitForTcf(event, onConsent)
    }
  )
}
