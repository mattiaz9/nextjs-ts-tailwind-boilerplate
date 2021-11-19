import { useMemo } from "react"
import classNames from "classnames"

import classes from "@styles/components/common/TextField.module.scss"

type TextFieldProps = {
  value: string
  className?: string
  id?: string
  name?: string
  type?: "text" | "password"
  autocomplete?: "on" | "off" | "name" | "given-name" | "family-name" |
  "email" | "tel" | "url" | "current-password" | "new-password" | "one-time-code"
  errorMessage?: string
  multiline?: boolean
  required?: boolean
  disabled?: boolean
  autoFocus?: boolean
  onChange(val: string): void
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  className,
  id,
  name,
  type,
  autocomplete,
  errorMessage,
  multiline,
  required,
  disabled,
  autoFocus,
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
        {errorMessage && (
          <small className={classes.textFieldError}>{errorMessage}</small>
        )}
      </>
    ) as any,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errorMessage]
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
      type={type}
      autoComplete={autocomplete}
      required={required}
      disabled={disabled}
      autoFocus={autoFocus}
      onChange={handleChange}
    />
  )
}

export default TextField