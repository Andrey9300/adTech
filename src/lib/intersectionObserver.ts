export const intersectionObserver = ({ root, elem, callback }) => {
  const options = { root, threshold: 0.1 }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback()
        observer.disconnect()
      }
    })
  }, options)

  observer.observe(elem)
}
