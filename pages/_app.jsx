import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
