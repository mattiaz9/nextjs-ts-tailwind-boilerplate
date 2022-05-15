import classes from "@styles/components/layout/AppLayout.module.scss"

import HeadMeta from "@components/common/HeadMeta"
import Navbar from "@components/navigation/Navbar"
import CookieBanner from "@components/common/CookieBanner"

type AppLayoutProps = {
  children?: React.ReactNode
  pageTitle?: string
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, pageTitle }) => {
  return (
    <div className={classes.appLayout}>
      <HeadMeta title={pageTitle} />

      <Navbar />

      <main>{children}</main>

      <footer></footer>

      <CookieBanner />
    </div>
  )
}

export default AppLayout
