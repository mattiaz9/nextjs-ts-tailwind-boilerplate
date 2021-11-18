import classes from "@styles/components/common/FormGroup.module.scss"
import classNames from "classnames"

type FormGroupProps = {
  label?: string
  labelFor?: string
  required?: boolean
  half?: boolean
}

const FormGroup: React.FC<FormGroupProps> = ({
  children,
  label,
  labelFor,
  required,
  half
}) => {
  return (
    <div className={classNames(classes.formGroup, {
      [classes.half]: half
    })}>
      <div className={classes.formGroupContent}>
        {label && (
          <label htmlFor={labelFor}>{label}{required ? "*" : ""}</label>
        )}

        {children}
      </div>
    </div>
  )
}

export default FormGroup