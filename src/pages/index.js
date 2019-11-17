import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CallForPaper from "../components/call-for-paper"
import CodeOfConduct from "../components/code-of-conduct"
import Map from "../components/map"
import Newsletter from "../components/newsletter"

const IndexPage = () => (
  <Layout>
    <SEO title="TS Conf" />
    <Hero />
    <Newsletter />
    <CallForPaper />
    <CodeOfConduct />
    <Map />
  </Layout>
)

export default IndexPage
