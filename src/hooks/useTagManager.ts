import { useEffect } from "react"
import TagManager from "react-gtm-module"

import useCookiesSettings from "./useCookiesSettings"

const useTagManager = () => {
  const { preferences, tagManagerEnabled } = useCookiesSettings()

  useEffect(() => {
    if (tagManagerEnabled || tagManagerEnabled === null) {
      process.env.NODE_ENV === "production" && TagManager.initialize({ gtmId: "GTM-XXXXXX" })
      process.env.NODE_ENV !== "production" && console.info("Injecting Tag Manager")
    }
  }, [tagManagerEnabled, preferences])
}

export default useTagManager