import { FormEvent } from "react"

import classes from "@styles/components/common/Form.module.scss"

type FormProps = {
  children?: React.ReactNode
  action?: string
  method?: "GET" | "POST"
  errorMessage?: string
  onSubmit?(e: FormEvent<HTMLFormElement>): void
}

const Form: React.FC<FormProps> = ({ children, action, method, errorMessage, onSubmit }) => {
  return (
    <form action={action} method={method} onSubmit={onSubmit}>
      {children}

      {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}
    </form>
  )
}

export default Form
