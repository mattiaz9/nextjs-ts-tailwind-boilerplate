import React, { useEffect, useState } from "react"

import classes from "@styles/components/settings/CookiesPreferences.module.scss"

import CookieSettingsGroup from "./CookieSettingsGroup"
import Container from "@components/layout/Container"
import Toggle from "@components/common/Toggle"
import useCookiesSettings from "@hooks/useCookiesSettings"

const CookiesPreferences: React.FC = () => {
  const { preferences, updatePreferencesExpiration, toggleTagManagerEnabled } = useCookiesSettings()
  const [tagmanagerEnabled, setTagmanagerEnabled] = useState(true)

  useEffect(() => {
    setTagmanagerEnabled(preferences?.analytics?.tagManagerEnabled ?? true)
  }, [preferences])

  const saveAnalytics = (expiration: number) => {
    updatePreferencesExpiration("analytics", expiration)
    toggleTagManagerEnabled(tagmanagerEnabled)
  }

  return (
    <Container>
      <div className={classes.cookiesPreferences}>
        <CookieSettingsGroup
          title="Analytics"
          description="Cookies are used for analytics, including session counting and page views."
          onSave={saveAnalytics}
        >
          <Toggle
            label="Tag manager"
            description="Tag: Google Analytics, Facebook Pixel"
            toggled={tagmanagerEnabled}
            onChange={setTagmanagerEnabled}
          />
        </CookieSettingsGroup>
      </div>
    </Container>
  )
}

export default CookiesPreferences
