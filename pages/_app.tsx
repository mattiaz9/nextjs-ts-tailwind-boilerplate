import type { AppProps } from "next/app"
import "@styles/index.scss"
import useTagManager from "@hooks/useTagManager"

function MyApp({ Component, pageProps }: AppProps) {
  useTagManager()

  return <Component {...pageProps} />
}

export default MyApp
