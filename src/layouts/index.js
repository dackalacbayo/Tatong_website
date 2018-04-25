import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import './bs-product.css'
import './style.css'
import '../assets/web-fonts-with-css/css/fontawesome-all.css'

import image1  from '../assets/images/white_logo_transparent@2x.png'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <div>
      <Header />
      {children()}
      <Footer />
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
