import { useEffect, useMemo, useState } from "react"
import useLocalStorage from "./useLocalStorage"

type CookiesPreferences = {
  analytics: {
    expiration?: number
    tagManagerEnabled?: boolean
  }
}

type CookiesPreferencesGroups = keyof CookiesPreferences

type InferNestedKeys<T extends object, G extends keyof T> = keyof T[G]

const defaultPreferences: CookiesPreferences = {
  analytics: {},
}

const settingsValue = <G extends CookiesPreferencesGroups>(
  preferences: CookiesPreferences | null | undefined,
  group: G,
  key: InferNestedKeys<CookiesPreferences, G>
) => {
  if (preferences == null) return preferences

  const groupSettings = preferences?.[group]
  const groupExpiration = groupSettings?.expiration ?? +new Date()
  if (new Date(groupExpiration) < new Date()) {
    return null
  }
  const value = groupSettings?.[key] as boolean | undefined
  return value ?? null
}

export default function useCookiesSettings() {
  const [preferences, setPreferences] = useLocalStorage<CookiesPreferences>("cookies-settings")
  const [tagManagerEnabled, setTagManagerEnabled] = useState(
    settingsValue(preferences, "analytics", "tagManagerEnabled")
  )

  useEffect(() => {
    setTagManagerEnabled(settingsValue(preferences, "analytics", "tagManagerEnabled"))
  }, [preferences])

  const updatePreferencesExpiration = (group: CookiesPreferencesGroups, expiration: number) => {
    const newPreferences: CookiesPreferences = { ...(preferences ?? defaultPreferences) }
    newPreferences[group] = { ...(newPreferences[group] ?? {}) }
    newPreferences[group]!.expiration = expiration

    setPreferences(newPreferences)
  }

  const toggleTagManagerEnabled = (enabled: boolean, newExpiration?: number) => {
    setPreferences({
      ...(preferences ?? defaultPreferences),
      analytics: {
        ...(preferences?.analytics ?? {}),
        expiration: newExpiration ?? preferences?.analytics?.expiration,
        tagManagerEnabled: enabled,
      },
    })
  }

  return {
    preferences,
    tagManagerEnabled,
    updatePreferencesExpiration,
    toggleTagManagerEnabled,
  }
}
