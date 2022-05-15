import { Disclosure } from "@headlessui/react"
import classNames from "classnames"

import classes from "@styles/components/navigation/Navbar.module.scss"
import XIcon from "@assets/icons/cross.svg"
import MenuIcon from "@assets/icons/menu.svg"

import NavbarLink from "./NavbarLink"
import Link from "@components/common/Link"
import Container from "@components/layout/Container"

const navigation = [
  {
    name: "home",
    href: "/",
  },
]

const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav" className={classes.navbar}>
      {({ open }) => (
        <Container>
          <div className={classes.navbarWrapper}>
            {/* Logo */}
            <Link to="/">Logo</Link>

            {/* Nav */}
            <Disclosure.Panel
              className={classNames(classes.navbarNav, {
                [classes.show]: open,
              })}
              static
            >
              {navigation.map(({ name, href }) => (
                <NavbarLink to={href} exact key={name}>
                  {name}
                </NavbarLink>
              ))}
            </Disclosure.Panel>

            {/* Mobile menu button */}
            <Disclosure.Button className={classes.navbarToggle}>
              <span className="sr-only">Open main menu</span>
              {open ? <XIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
            </Disclosure.Button>
          </div>
        </Container>
      )}
    </Disclosure>
  )
}

export default Navbar
