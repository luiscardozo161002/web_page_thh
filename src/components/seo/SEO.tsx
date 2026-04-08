import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Transportes Hidro Hidalguenses S.A. de C.V.'
const BASE_URL  = 'https://transporteshidrohidalguenses.cooperativajuarez.net'
const OG_IMAGE  = 'https://i.ibb.co/ZpzXD141/thh-oficial-copia.png'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
  jsonLd?: Record<string, unknown>
}

export default function SEO({
  title,
  description,
  path = '/',
  image = OG_IMAGE,
  type = 'website',
  noIndex = false,
  jsonLd,
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = `${BASE_URL}${path}`

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Open Graph ── */}
      <meta property="og:type"        content={type} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={url} />
      <meta property="og:image"       content={image} />
      <meta property="og:locale"      content="es_MX" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* ── Per-page JSON-LD ── */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify({ '@context': 'https://schema.org', ...jsonLd })}
        </script>
      )}
    </Helmet>
  )
}
