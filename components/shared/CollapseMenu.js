// import { Collapsible } from "lib/context"
import { useRef, useContext, useEffect, useState } from "react"

// import useMediaQuery from "lib/hooks/useMediaQuery"

const CollapseMenu = ({ children, className, ...props }) => {
  // const [itemCollapse, _] = useContext(Collapsible)
  // const [itemHeight, setItemHeight] = useState(0)

  // const media = useMediaQuery("lg")

  const ref = useRef(null)

  // useEffect(() => {
  //   const itemRef = ref.current

  //   itemCollapse ? setItemHeight(itemRef.scrollHeight) : setItemHeight(0)
  // }, [itemHeight, itemCollapse, media])

  return (
    <div
      {...props}
      className={`collapse__menu border-l-gray-300 border border-transparent ml-1 ${
        className || ""
      }`.trim()}
      // style={{ height: `${itemHeight}px` }}
    >
      <div className={`collapse__item`.trim()} ref={ref}>
        {children}
      </div>
    </div>
  )
}

export default CollapseMenu
