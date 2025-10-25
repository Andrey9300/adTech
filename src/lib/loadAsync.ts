export const loadAsync = (url: string) => {
  const script = document.createElement('script')
  script.async = true
  script.src = url

  document.getElementsByTagName('body')[0].appendChild(script)
}
