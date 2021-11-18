import classNames from "classnames"

import classes from "@styles/components/common/Select.module.scss"

type SelectProps = {
  value: string
  options: Array<{ value: string, label: string }>
  id?: string
  name?: string
  label?: string
  smaller?: boolean
  onChange(value: string): void
}

const Select: React.FC<SelectProps> = ({
  value,
  options,
  label,
  id,
  name,
  smaller,
  onChange,
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className={classes.selectLabel}>
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        className={classNames(classes.select, {
          [classes.smaller]: smaller
        })}
        onChange={e => onChange?.(e.target.value)}
      >
        {options.map(({ label, value }) => (
          <option value={value} key={value}>{label}</option>
        ))}
      </select>
    </div>
  )
}

export default Select