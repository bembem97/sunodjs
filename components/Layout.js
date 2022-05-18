import PropTypes from "prop-types"
import { useState, useEffect } from "react"

import HeadNav from "./HeadNav"
import Meta from "./Meta"
import SideNav from "./SideNav"
import Footer from "./Footer"

import Container from "./shared/Container"
import Modal from "./shared/Modal"

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
        <div id="web">
          <HeadNav />

          {media && (
            <Modal>
              <SideNav />
            </Modal>
          )}

          <Container tag="main" id="main" className="pt-16 mx-auto">
            {children}
          </Container>

          <Footer className={"footer"} />
        </div>
      </OpenModal.Provider>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Layout
