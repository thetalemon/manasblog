import '../styles/globals.css'
import 'highlight.js/styles/github-dark-dimmed.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp