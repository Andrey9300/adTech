export type TTcfData = {
  tcString: string
  eventStatus: string
  listenerId: string
  purpose: {
    consents: { [key: number]: boolean | undefined }
    legitimateInterests: number[]
  }
}
