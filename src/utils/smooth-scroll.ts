import scrollToElement from "scroll-to-element"

import { clamp } from "./math"

const smoothScrollLink = (url: string) => {
  const pattern = /^(\/#.+)|(.+(\/#.+))$/
  if (pattern.test(url)) {
    const hash = pattern.exec(url)?.filter(item => item).pop() ?? ""
    const id = hash.replace(/\/?#/, "")
    const el = document.getElementById(id)
    if (el) {
      const amount = Math.abs(el.getBoundingClientRect().top)
      const duration = clamp(amount * 0.5, 500, 5000)
      scrollToElement(el, {
        offset: 0,
        duration,
      })

    }
  }

  return Promise.resolve()
}

export default smoothScrollLink