import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/index'
import './styles.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Amanda Stockbridge' },
        { name: 'keywords', content: 'Amanda Stockbridge, design, designer, visual design, graphic design, ui design, ux design, ui, ux' },
      ]}>
      <link href="https://fonts.googleapis.com/css?family=Rokkitt:300,400,700" rel="stylesheet" />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
