import PropTypes from "prop-types"
import React from "react"

import HeadNav from "./HeadNav"
import Meta from "./Meta"
import SideNav from "./SideNav"
import Footer from "./Footer"

import Container from "./shared/Container"

import { OpenModal } from "lib/context"

const Layout = ({ children, title }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Meta title={title} />

      <OpenModal.Provider value={[open, setOpen]}>
        <Container id="wrapper" className="mx-auto">
          <HeadNav />

          <SideNav />

          <Container tag="main" className="pt-16 mx-auto">
            {children}
          </Container>

          <Footer className={"lg:pl-80 "} />
        </Container>
      </OpenModal.Provider>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Layout
