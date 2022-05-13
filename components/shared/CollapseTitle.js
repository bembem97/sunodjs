import IconNext from "./IconNext"
import Button from "./Button"
import NavLink from "components/NavLink"
import Typography from "components/shared/Typography"

import { useState, useContext, useEffect } from "react"
import { Collapsible } from "./Collapse"

const CollapseTitle = ({ children, href }) => {
  const [rotate, setRotation] = useState(null)
  const [_, setItemCollapse] = useContext(Collapsible)

  useEffect(() => {
    setItemCollapse(rotate)
  }, [rotate, setItemCollapse])

  return (
    <div className="collapse__title flex p-1">
      <NavLink
        href={href || ""}
        className="nav__link flex items-center hover:underline"
      >
        <Typography tag="span" className="font-semibold ">
          {children}
        </Typography>
      </NavLink>

      <Button
        className="flex items-center py-0"
        onClick={() => setRotation(!rotate)}
      >
        <IconNext rotate={rotate} />
      </Button>
    </div>
  )
}

export default CollapseTitle
