import React from "react"
import NextLink from "next/link"
import Router from "next/router"

import smoothScrollLink from "@utils/smooth-scroll"

type LinkProps = {
  children?: React.ReactNode
  to: string
  className?: string
  rel?: string
  role?: string
  style?: React.CSSProperties
  target?: "_blank" | "_parent" | "_self" | "_top"
  smooth?: boolean
  onClick?(e: React.MouseEvent): void
}

const Link: React.FC<LinkProps> = ({ children, to, className, rel, target, role, style, smooth, onClick }) => {
  const onLinkClick = async (e: React.MouseEvent) => {
    e.preventDefault()

    try {
      let fixedUrl = to
      if (URL) {
        fixedUrl = new URL(to, window.location.href).pathname
      }
      await Router.push(fixedUrl)
      await smoothScrollLink(to)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {smooth ? (
        <a href={to} className={className} target={target} rel={rel} role={role} style={style} onClick={onLinkClick}>
          {children}
        </a>
      ) : (
        <NextLink href={to}>
          <a className={className} target={target} rel={rel} role={role} style={style} onClick={onClick}>
            {children}
          </a>
        </NextLink>
      )}
    </>
  )
}

export default Link
