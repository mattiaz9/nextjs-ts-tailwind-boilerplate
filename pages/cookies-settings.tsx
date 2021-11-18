import type { NextPage } from "next"

import AppLayout from "@components/layout/AppLayout"
import CookiesPreferences from "@components/settings/CookiesPreferences"

const CookiesSettingsPage: NextPage = () => {
  return (
    <AppLayout pageTitle="Cookies settings">
      <CookiesPreferences />
    </AppLayout>
  )
}

export default CookiesSettingsPage
