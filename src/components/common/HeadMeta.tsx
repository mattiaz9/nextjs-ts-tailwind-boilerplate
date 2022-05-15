import Head from "next/head"

type HeadMetaProps = {
  title?: string
  description?: string
  keywords?: string
}

const SITE_NAME = "Next.JS"

const HeadMeta: React.FC<HeadMetaProps> = ({ title, description, keywords }) => {
  const titleSuffix = title ? ` – ${SITE_NAME}` : ""
  const pageTitle = `${title ?? SITE_NAME}${titleSuffix}`

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={SITE_NAME} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/icon.png" />
      <link rel="apple-touch-icon" href="/icon-192.png" />
    </Head>
  )
}

export default HeadMeta
