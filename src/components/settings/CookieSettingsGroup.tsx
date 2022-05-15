import React, { useState } from "react"

import classes from "@styles/components/settings/CookieSettingsGroup.module.scss"

import Button from "@components/common/Button"
import Select from "@components/common/Select"

type CookieSettingsGroupProps = {
  children?: React.ReactNode
  title: string
  description?: string
  onSave?(expirationTime: number): void
}

const expirations = [{
  time: 60 * 60 * 24 * 90,
  label: "3 months"
}, {
  time: 60 * 60 * 24 * 180,
  label: "6 months"
}, {
  time: 60 * 60 * 24 * 365,
  label: "1 year"
}, {
  time: 60 * 60 * 24 * 365 * 2,
  label: "2 years"
}, {
  time: 60 * 60 * 24 * 365 * 3,
  label: "3 years"
}]

const CookieSettingsGroup: React.FC<CookieSettingsGroupProps> = ({
  children,
  title,
  description,
  onSave,
}) => {
  const [expiration, setExpiration] = useState(`${expirations[0].time}`)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    const expirationTimetamp = +(new Date) + (+expiration * 1000)
    onSave?.(expirationTimetamp)
    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 3000)
  }

  return (
    <section className={classes.cookiesSettingsGroup}>
      <span className={classes.cookiesSettingsGroupTitle}>{title}</span>
      {description && (
        <p className={classes.cookiesSettingsGroupDescription}>{description}</p>
      )}

      <div className={classes.cookiesSettingsGroupContent}>
        {children}
      </div>

      <footer className={classes.cookiesSettingsGroupFooter}>
        <div className={classes.cookiesSettingsGroupExpiration}>
          <Select
            label="Ask again in..."
            value={expiration}
            options={expirations.map(opt => ({ value: `${opt.time}`, label: opt.label }))}
            onChange={val => setExpiration(val)}
            smaller
          />
        </div>

        <Button onClick={handleSave}>Save</Button>
      </footer>

      {saved && (
        <p className={classes.cookiesSettingsGroupSaveMessage}>
          Settings saved...
        </p>
      )}
    </section>
  )
}

export default CookieSettingsGroup