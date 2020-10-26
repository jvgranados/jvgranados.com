import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Cover from '../images/cover.svg'
import CoverMD from '../images/cover-md.svg'
import CoverLG from '../images/cover-lg.svg'
import Footer from './Footer'
import '../styles/global.css'

function Layout({ children }) {
  return (
    <div className="flex flex-col flex-1 w-screen h-screen text-base text-light bg-dark">
      <Navbar />
      <div className="relative flex flex-col flex-1 w-full max-w-5xl px-8 mx-auto my-0">
        <main className="flex-1">
          <Cover className="block md:hidden" />
          <CoverMD className="hidden md:block lg:hidden" />
          <CoverLG className="hidden lg:block lg:max-w-4xl" />
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
