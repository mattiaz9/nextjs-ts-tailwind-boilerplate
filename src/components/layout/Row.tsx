import classNames from "classnames"

import classes from "@styles/components/layout/Row.module.scss"

type RowProps = {
  className?: string
}

const Row: React.FC<RowProps> = ({ children, className }) => {
  return (
    <div className={classNames(classes.row, className)}>
      {children}
    </div>
  )
}

export default Row