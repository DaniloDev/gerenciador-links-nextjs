import { NextPage } from 'next'
import Link from 'next/link'
import Seo from 'components/Seo'

export const Home: NextPage = () => {
  return (
    <>
      <Seo title='Social Media Belt' description='Social Media Belt' />

      <ul>
        <li>
          <Link href='/app'>App</Link>
        </li>
        <li>
          <Link href='/devpleno'>Tenant devpleno</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
