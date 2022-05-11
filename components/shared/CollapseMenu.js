import { Collapsible } from "./Collapse"
import { useRef, useContext, useEffect, useState } from "react"

const CollapseMenu = ({ children, className, ...props }) => {
  const [itemCollapse, _] = useContext(Collapsible)
  const [itemHeight, setItemHeight] = useState(null)

  const ref = useRef(null)

  useEffect(() => {
    const itemRef = ref.current

    itemCollapse ? setItemHeight(itemRef.scrollHeight) : setItemHeight(0)
  }, [itemHeight, itemCollapse])

  return (
    <div
      className={`collapse__menu ${className || ""}`.trim()}
      {...props}
      style={{ height: `${itemHeight}px` }}
    >
      <div className={`collapse__item `.trim()} ref={ref}>
        {children}
      </div>
    </div>
  )
}

export default CollapseMenu
