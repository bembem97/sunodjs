import PropTypes from "prop-types"

import Nav from "./Nav"
import Meta from "./Meta"
import Container from "./shared/Container"

const Layout = ({ children, title }) => {
  return (
    <>
      <Meta title={title} />

      <Nav />
      <Container className="mx-auto px-4 sm:px-2 pb-5 xl:max-w-5xl lg:max-w-4xl md:max-w-xl sm:max-w-lg max-w-md">
        {children}
      </Container>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Layout
