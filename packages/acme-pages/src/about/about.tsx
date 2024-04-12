import { Layout, Page, Text, Code, Link } from '@vercel/examples-ui'
import Navbar from '../components/navbar'

export default function About() {
  return (
    <Page>
      <Navbar />
      <Text variant="h1" className="mb-6">
        Other page on same domain
      </Text>

    </Page>
  )
}

About.Layout = Layout
