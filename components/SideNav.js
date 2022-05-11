import Collapse from "components/shared/Collapse"
import CollapseMenu from "components/shared/CollapseMenu"
import CollapseTitle from "components/shared/CollapseTitle"

import NavLink from "./NavLink"

import { useState, useEffect } from "react"

const SideNav = () => {
  const [reactAPI, setReactAPI] = useState([])

  useEffect(() => {
    fetch("/api/sidenav")
      .then((res) => res.json())
      .then((data) => setReactAPI(data))

    return () => setReactAPI([])
  }, [])

  return (
    <nav className="sidenav">
      <Collapse>
        <CollapseTitle href={"/blog/react-api"}>
          React JS API Hook Reference
        </CollapseTitle>

        <CollapseMenu>
          {reactAPI.map((api) => (
            <NavLink key={api} href={`/blog/react-api/${api}`}>
              {api}
            </NavLink>
          ))}
        </CollapseMenu>
      </Collapse>

      <Collapse>
        <CollapseTitle href={"/blog/css-tricks"}>CSS Tricks</CollapseTitle>

        <CollapseMenu>
          <span>a</span>
          <span>b</span>
          <span>c</span>
        </CollapseMenu>
      </Collapse>
    </nav>
  )
}

export default SideNav
