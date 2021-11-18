import classNames from "classnames"

import classes from "@styles/components/layout/Container.module.scss"

type ContainerProps = {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={classNames(classes.container, className)}>
      {children}
    </div>
  )
}

export default Container