/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { CookieBanner } from '@palmabit/react-cookie-law';

import Header from "./header"
import Footer from "./footer"
import './../fonts/icomoon/style.css'
import './../sass/style.scss'

const Layout = ({ children }) => {
  const [acceptedStatistics, setAcceptedStatistics] = useState(false);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer></Footer>
      <CookieBanner
        message="This site is able to use the cookies needed to use the cookie policy. To learn more or opt out, see the cookie policy. By accepting it you consent to use cookies."
        acceptButtonText="Consent"
        necessaryOptionText='Required / Tech'
        statisticsOptionText='Analytics'
        showMarketingOption={false}
        privacyPolicyLinkText='Privacy and Cookie policy'
        policyLink='/privacy'
        showPreferencesOption={false}
        onAccept={() => { }}
        onAcceptPreferences={() => { acceptedStatistics !== true && setAcceptedStatistics(true) }}
        onAcceptStatistics={() => { }}
        styles={{
          dialog: {
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            zIndex: '100000',
            backgroundColor: '#f8f7f7',
            padding: '10px',
          }
        }}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
