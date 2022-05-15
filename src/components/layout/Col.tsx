import classNames from "classnames"

import classes from "@styles/components/layout/Col.module.scss"

type ColProps = {
  children?: React.ReactNode
  as?: React.ElementType
  className?: string
  verticalPadding?: boolean
  verticalPaddingMobile?: boolean
  verticalPaddingTablet?: boolean
}

const Col: React.FC<ColProps> = ({
  children,
  as: As = "div",
  className,
  verticalPadding,
  verticalPaddingMobile,
  verticalPaddingTablet,
}) => {
  return (
    <As
      className={classNames(classes.col, className, {
        [classes.vPadding]: verticalPadding,
        [classes.vPaddingXs]: verticalPaddingMobile,
        [classes.vPaddingMd]: verticalPaddingTablet,
      })}
    >
      {children}
    </As>
  )
}

export default Col
