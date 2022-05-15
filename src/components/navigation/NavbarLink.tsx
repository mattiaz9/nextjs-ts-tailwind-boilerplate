import { useRouter } from "next/router"
import classNames from "classnames"

import classes from "@styles/components/navigation/NavbarLink.module.scss"

import Link from "@components/common/Link"

type NavbarLinkProps = {
  children?: React.ReactNode
  to: string
  exact?: boolean
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, to, exact }) => {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === to : pathname.startsWith(to)

  return (
    <Link
      to={to}
      className={classNames(classes.navbarLink, {
        [classes.active]: isActive,
      })}
    >
      {children}
    </Link>
  )
}

export default NavbarLink
