import { useMemo } from "react"
import classNames from "classnames"

import classes from "@styles/components/common/TextField.module.scss"

type TextFieldProps = {
  value: string
  className?: string
  id?: string
  name?: string
  autocomplete?: "on" | "off" | "name" | "given-name" | "family-name" | "email" | "tel" | "url"
  multiline?: boolean
  required?: boolean
  disabled?: boolean
  onChange(val: string): void
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  className,
  id,
  name,
  autocomplete,
  multiline,
  required,
  disabled,
  onChange,
}) => {
  const Field: React.FC<React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>> = useMemo(
    () => (props: React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) => (
      <>
        {multiline ? (
          <textarea {...props} rows={6} />
        ) : (
          <input {...props} />
        )}
      </>
    ) as any,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement
    onChange(target.value)
  }

  return (
    <Field
      className={classNames(classes.textField, className)}
      id={id}
      value={value}
      name={name}
      autoComplete={autocomplete}
      required={required}
      disabled={disabled}
      onChange={handleChange}
    />
  )
}

export default TextField