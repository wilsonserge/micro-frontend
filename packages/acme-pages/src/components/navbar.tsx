import type { FC } from 'react'
import { Link, A } from '@vercel/examples-ui'

const Navbar: FC<{ isDocsApp?: boolean }> = ({ isDocsApp }) =>
  isDocsApp ? (
    <ul className="inline-flex mb-4">
      <li>
        <A href="/">Home (Multi Zones)</A>
      </li>
      <li className="ml-4">
        <Link href="/">Other page</Link>
      </li>

    </ul>
  ) : (
    <ul className="inline-flex mb-4">
      <li>
        <Link href="/">Home</Link>
      </li>

      <li className="ml-4">
        <A href="/docs">Other page (Multi Zones)</A>
      </li>
    </ul>
  )

export default Navbar
