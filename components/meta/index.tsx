import Head from 'next/head'

export default function CommonMeta({ title = "manas blog", description = "まなさすのブログ。技術メモとか。" }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.SITE_URL}/aza166.png`} />
    </Head>
  )
}