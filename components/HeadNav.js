import NavLink from "./NavLink"
import IconNav from "components/shared/IconNav"
import useScreenMatcher from "lib/hooks/useScreenMatcher"

import { useContext } from "react"
import { OpenModal } from "lib/context"

const HeadNav = () => {
  const [open, setOpen] = useContext(OpenModal)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-center ">
        {useScreenMatcher("lg", true) && (
          <IconNav onClick={() => setOpen(true)} className="mr-auto" />
        )}

        <div className="flex flex-center grow justify-center">
          <NavLink href="/" className="p-2 md:py-4">
            Home
          </NavLink>
          <NavLink href="/blog" className="p-2 md:py-4">
            Blog
          </NavLink>
          <NavLink href="/about" className="p-2 md:py-4">
            About
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default HeadNav
