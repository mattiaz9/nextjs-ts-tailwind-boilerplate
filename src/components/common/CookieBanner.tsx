import React, { useEffect, useRef, useState } from "react"
import classNames from "classnames"

import classes from "@styles/components/common/CookieBanner.module.scss"

import Button from "./Button"
import useCookiesSettings from "@hooks/useCookiesSettings"
import useLocalStorage from "@hooks/useLocalStorage"

const CookieBanner: React.FC = () => {
  const { toggleTagManagerEnabled } = useCookiesSettings()
  const [cookieBannerShown, setCookieBannerShown] = useLocalStorage("setting:cb-shown", false)
  const [show, setShow] = useState(false)
  const timeout = useRef<number>()

  useEffect(() => {
    if (!cookieBannerShown) {
      timeout.current = setTimeout(() => {
        setShow(true)
      }, 100) as unknown as number
    }

    return () => {
      clearTimeout(timeout.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (cookieBannerShown) return null

  const onAcceptMandatory = () => {
    setShow(false)
    setCookieBannerShown(true)
    toggleTagManagerEnabled(false, 7_776_000) // 90 days
  }

  const onAcceptAll = () => {
    setShow(false)
    setCookieBannerShown(true)
    toggleTagManagerEnabled(true, 94_610_000) // 3 years
  }

  return (
    <div
      className={classNames(classes.cookieBanner, {
        [classes.show]: show,
      })}
    >
      <p
        className={classes.cookieBannerMessage}
        dangerouslySetInnerHTML={{
          __html: `This website uses cookies to improve your experience. By accepting the cookie you'll help improve this website.
          Please check our <a href='/privacy-policy'>privacy policy</a> for more information.`,
        }}
      />
      <div className={classes.cookieBannerActions}>
        <Button className={classes.cookieBannerActionDeny} onClick={onAcceptMandatory}>
          Deny
        </Button>
        <Button onClick={onAcceptAll}>Accept all</Button>
      </div>
    </div>
  )
}

export default CookieBanner
