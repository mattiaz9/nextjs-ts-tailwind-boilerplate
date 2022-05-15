import { Switch } from "@headlessui/react"
import classNames from "classnames"

import classes from "@styles/components/common/Toggle.module.scss"

type ToggleProps = {
  toggled: boolean
  label: string
  description?: string
  onChange(toggled: boolean): void
}

const Toggle: React.FC<ToggleProps> = ({ toggled, label, description, onChange }) => {
  return (
    <Switch.Group
      as="div"
      className={classNames(classes.toggle, {
        [classes.toggled]: toggled,
      })}
    >
      <span className={classes.toggleInfo}>
        <Switch.Label as="span" className={classes.toggleTitle} passive>
          {label}
        </Switch.Label>
        {description && (
          <Switch.Description as="span" className={classes.toggleDescription}>
            {description}
          </Switch.Description>
        )}
      </span>

      <Switch checked={toggled} onChange={onChange} className={classes.toggleSwitch}>
        <span aria-hidden="true" className={classes.toggleKnob} />
      </Switch>
    </Switch.Group>
  )
}

export default Toggle
