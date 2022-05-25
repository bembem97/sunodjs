import PropTypes from "prop-types"
import { useState, useEffect } from "react"

import HeadNav from "components/HeadNav"
import Meta from "components/Meta"
import SideNav from "components/SideNav"
import Footer from "components/Footer"

import Container from "components/shared/Container"
import Modal from "components/shared/Modal"

import { OpenModal } from "lib/context"
import useMediaQuery from "lib/hooks/useMediaQuery"

const Layout = ({ children, title }) => {
  const [open, setOpen] = useState(false)
  const media = useMediaQuery("lg", undefined, "max")

  useEffect(() => {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden")

    return () => document.body.classList.remove("overflow-hidden")
  }, [open])

  return (
    <>
      <Meta title={title} />

      <OpenModal.Provider value={[open, setOpen]}>
        <HeadNav />

        {media && (
          <Modal>
            <SideNav />
          </Modal>
        )}

        <Container tag="main" id="main" className="pt-16 mx-auto xl:container">
          {children}
        </Container>

        <Footer className={"footer"} />
      </OpenModal.Provider>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Layout
