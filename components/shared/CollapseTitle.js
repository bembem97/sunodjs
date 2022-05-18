import IconNext from "./IconNext"
import Button from "./Button"
import NavLink from "components/NavLink"
import Typography from "components/shared/Typography"
import { Collapsible } from "./Collapse"

import { useState, useContext, useEffect } from "react"
import { useRouter } from "next/router"

const CollapseTitle = ({ children, href, pathName }) => {
  const [rotate, setRotation] = useState(null)
  const [_, setItemCollapse] = useContext(Collapsible)

  const { pathname } = useRouter()

  const url = new URL(pathname, location.href)
  const filtered = pathName[1].filter((path) => path === pathname)

  useEffect(() => {
    setItemCollapse(rotate)
  }, [rotate, setItemCollapse])

  useEffect(
    () =>
      (url.pathname === pathName[0] || filtered[0] === pathname) && (
        <>
          {setItemCollapse(true)}
          {setRotation(true)}
        </>
      ),
    []
  )

  return (
    <div className="collapse__title flex p-1 pl-0">
      <Button
        className="flex items-center py-0 gap-4 pl-0"
        onClick={() => setRotation(!rotate)}
      >
        <Typography tag="span" className={`font-semibold`.trim()}>
          {children}
        </Typography>
        <IconNext rotate={rotate} />
      </Button>
    </div>
  )
}

export default CollapseTitle
