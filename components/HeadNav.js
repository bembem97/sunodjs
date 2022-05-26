import IconNav from "components/shared/IconNav"
import NavLinkActive from "./NavLinkActive"

import useMediaQuery from "lib/hooks/useMediaQuery"
import { OpenModal } from "lib/context"

import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"

const HeadNav = ({ className, ...props }) => {
  const [_, setOpen] = useContext(OpenModal)
  const media = useMediaQuery("lg", true, "max")

  const { asPath } = useRouter()
  const navlink =
    "px-2 py-0 md:py-1 lg:py-2 transition-colors hover:bg-gray-200 border-2 border-transparent"

  const [shadow, setShadow] = useState("shadow-none")

  useEffect(() => {
    const scrollPosition = () =>
      window.scrollY > 250 ? setShadow("shadow") : setShadow("shadow-none")

    window.addEventListener("scroll", scrollPosition)

    return () => window.removeEventListener("scroll", scrollPosition)
  }, [])

  return (
    <header className={`headnav ${shadow} transition-shadow`}>
      <nav className="flex justify-center items-center">
        {media && (
          <IconNav onClick={() => setOpen(true)} className="nav-icon mr-auto" />
        )}
        <div className="flex flex-center grow justify-center">
          <NavLinkActive
            activeClassName={"text-purple-700 border-b-tertiary"}
            href="/"
            path={asPath}
            className={navlink}
          >
            <a>Home</a>
          </NavLinkActive>

          <NavLinkActive
            activeClassName={"text-purple-700 border-b-tertiary"}
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
