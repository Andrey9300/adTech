export const TcfApi = {
  get getTcfApi(): typeof window.__tcfapi | undefined {
    return window.__tcfapi
  },
}
