import React from "react"
import classNames from "classnames"

import classes from "@styles/components/common/Button.module.scss"
import Spinner from "@assets/animated/spinner.svg"

import Link from "./Link"

type ButtonProps = {
  children?: React.ReactNode
  as?: React.ElementType
  href?: string
  hrefRedirect?: string
  rel?: string
  target?: "_blank"
  className?: string
  aspect?: "fill" | "outline" | "empty"
  color?: "primary" | "secondary" | "tertiary" | "warning" | "danger"
  type?: "button" | "submit" | "reset"
  rounded?: boolean
  small?: boolean
  large?: boolean
  disabled?: boolean
  expanded?: boolean
  loading?: boolean
  style?: React.CSSProperties
  onClick?: (e: React.SyntheticEvent) => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  as: As = "button",
  className,
  href,
  hrefRedirect,
  rel,
  target,
  small,
  large,
  aspect = "fill",
  color = "primary",
  type,
  disabled,
  expanded,
  loading,
  rounded,
  style,
  onClick,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const isActiveElement = e.target === document.activeElement
    const triggers = ["Enter", "Space"]
    if (isActiveElement && triggers.includes(e.key)) {
      onClick?.(e)
    }
  }

  const btnClassName = classNames(
    classes.button,
    {
      [classes.buttonDefault]: !small,
      [classes.buttonSmall]: small,
      [classes.buttonLarge]: large,
      [classes.buttonRounded]: rounded,
      [classes.buttonExpanded]: expanded,
      [classes.buttonFill]: aspect === "fill",
      [classes.buttonOutline]: aspect === "outline",
      [classes.buttonEmpty]: aspect === "empty",
      [classes.buttonPrimary]: color === "primary",
      [classes.buttonSecondary]: color === "secondary",
      [classes.buttonTertiary]: color === "tertiary",
      [classes.buttonWarning]: color === "warning",
      [classes.buttonDanger]: color === "danger",
    },
    className
  )

  const redirect = (e: React.MouseEvent) => {
    if (!hrefRedirect) return

    e.preventDefault()

    alert("redirect to " + hrefRedirect)
  }

  return (
    <>
      {As === "a" && href ? (
        <Link
          to={href}
          rel={rel}
          target={target}
          className={btnClassName}
          role="button"
          style={style}
          data-redirect={hrefRedirect}
          onClick={hrefRedirect ? redirect : undefined}
        >
          {loading ? <Spinner className={classes.buttonSpinner} /> : children}
        </Link>
      ) : (
        <As
          className={btnClassName}
          type={type}
          tabIndex={0}
          role="button"
          style={style}
          onClick={onClick}
          onKeyDown={handleKeyDown}
          disabled={disabled ? true : false}
        >
          {loading ? <Spinner className={classes.buttonSpinner} /> : children}
        </As>
      )}
    </>
  )
}

export default Button
