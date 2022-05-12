import PropTypes from "prop-types"
import React from "react"

import HeadNav from "./HeadNav"
import Meta from "./Meta"
import SideNav from "./SideNav"
import Footer from "./Footer"

import Container from "./shared/Container"

import { OpenModal } from "lib/context"
import Modal from "./shared/Modal"
import useMediaQuery from "lib/hooks/useMediaQuery"

const Layout = ({ children, title }) => {
  const [open, setOpen] = React.useState(false)
  const media = useMediaQuery("lg", true)
  const media2 = useMediaQuery("lg", undefined, "max")

  React.useEffect(() => {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden")

    return () => document.body.classList.remove("overflow-hidden")
  }, [open])

  return (
    <>
      <Meta title={title} />

      <OpenModal.Provider value={[open, setOpen]}>
        <Container id="wrapper" className="mx-auto">
          <HeadNav />

          {media2 && (
            <Modal>
              <SideNav />
            </Modal>
          )}

          {media && <SideNav />}

          <Container tag="main" className="pt-16 mx-auto lg:pl-80">
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
