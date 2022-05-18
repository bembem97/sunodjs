import NavLink from "./NavLink"
import IconNav from "components/shared/IconNav"
import useMediaQuery from "lib/hooks/useMediaQuery"

import { useContext } from "react"
import { OpenModal } from "lib/context"

const HeadNav = ({ className, ...props }) => {
  const [_, setOpen] = useContext(OpenModal)
  const media = useMediaQuery("lg", _, "max")

  return (
    <header className="headnav shadow-sm">
      <nav className="flex justify-center bg-secondary">
        {/*// * SHOW NAV ICON WHEN VIEWPORT TO 1023 */}
        {media && <IconNav onClick={() => setOpen(true)} className="mr-auto" />}

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
