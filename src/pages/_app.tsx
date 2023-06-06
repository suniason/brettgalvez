import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Brett Galvez</title>
        <link rel='icon' href='/bglogo.svg' />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
