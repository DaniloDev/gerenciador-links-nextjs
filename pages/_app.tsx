import LayoutApp from 'components/Layout/LayoutApp'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import LayoutPublic from 'components/Layout/LayoutPublic'
import LayoutTenant from 'components/Layout/LayoutTenant'

export default function App({ Component, pageProps }: AppProps) {
  console.log("PAGEPROPS ", pageProps)

  const router = useRouter()
  const { pathname } = router
  let Layout = LayoutPublic
  if(pathname.indexOf('/app') === 0){
    Layout = LayoutApp
  }
  if(pathname.indexOf('/[slug]') === 0){
    Layout = LayoutTenant
  }
  return (
    <Layout>
      <Component {...pageProps} />
  </Layout>
  )
}
