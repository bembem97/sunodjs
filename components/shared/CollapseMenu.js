import { Collapsible } from "./Collapse"
import { useRef, useContext, useEffect, useState } from "react"

const CollapseMenu = ({ children, className, ...props }) => {
  const [collapseItem, _] = useContext(Collapsible)
  const [collapseDown, setCollapseDown] = useState(null)

  useEffect(() => {
    collapseItem
      ? setCollapseDown("h-full")
      : collapseItem === null
      ? setCollapseDown("h-0")
      : setCollapseDown("h-0")
  }, [collapseDown, collapseItem])

  return (
    <div
      className={`collapse__menu border border-green-500 ${collapseDown} ${
        className || ""
      }`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export default CollapseMenu
