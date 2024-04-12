import { useState, useEffect } from 'react'
import { Layout, Page, Text, Code, Link, Snippet } from '@vercel/examples-ui'
import { Button, Quote } from '@acme/design-system'
import { matchingTextColor, randomColor } from '@acme/utils'
import Navbar from '../components/navbar'

export default function Home() {
  const [bgColor, setBgColor] = useState('')
  const [textColor, setTextColor] = useState('')
  const changeColor = () => {
    const bg = randomColor()
    setBgColor(bg)
    setTextColor(matchingTextColor(bg))
  }

  useEffect(changeColor, [])

  return (
    <Page>
      <Navbar />
      <Text variant="h1" className="mb-6">
        Microfrontends
      </Text>
      <Text className="mb-4">
        Market place
      </Text>
    </Page>
  )
}

Home.Layout = Layout
