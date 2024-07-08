import {  Suspense } from 'react'
import PropTypes from 'prop-types';

const Layout = ({children}) => {
  return (
    
    <Suspense fallback={null}> 
    {children}
    </Suspense>
  )
}

Layout.propTypes = {
    children: PropTypes.element
}

export default Layout
