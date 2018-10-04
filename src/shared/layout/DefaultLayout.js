import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

const DefaultLayout = props => {
  const { children } = props
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer>© {new Date().getFullYear()}</Footer>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.any,
}

export default DefaultLayout
