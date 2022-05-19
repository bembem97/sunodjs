import IconNav from "components/shared/IconNav"
import useMediaQuery from "lib/hooks/useMediaQuery"
import NavLinkActive from "./NavLinkActive"
import { OpenModal } from "lib/context"

import { useRouter } from "next/router"
import { useContext } from "react"

const HeadNav = ({ className, ...props }) => {
  const [_, setOpen] = useContext(OpenModal)
  const media = useMediaQuery("lg", true, "max")

  const { asPath } = useRouter()
  const navlink =
    "pt-3 pb-2 px-2 transition-colors hover:bg-gray-200 border-2 border-transparent"

  return (
    <header className="headnav shadow-sm">
      <nav className="flex justify-center items-center bg-secondary">
        {media && (
          <IconNav onClick={() => setOpen(true)} className="nav-icon mr-auto" />
        )}

        <div className="flex flex-center grow justify-center">
          <NavLinkActive
            activeClassName={"text-tertiary border-b-tertiary"}
            href="/"
            path={asPath}
            className={navlink}
          >
            <a>Home</a>
          </NavLinkActive>

          <NavLinkActive
            activeClassName={"text-tertiary border-b-tertiary"}
            href="/blog"
            path={asPath}
            className={navlink}
          >
            <a>Blog</a>
          </NavLinkActive>
        </div>
      </nav>
    </header>
  )
}

export default HeadNav
