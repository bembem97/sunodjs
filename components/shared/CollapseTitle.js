import IconNext from "./IconNext"
import Button from "./Button"

import { useState, useContext, useEffect } from "react"
import { Collapsible } from "./Collapse"

const CollapseTitle = ({ children }) => {
  const [rotate, setRotation] = useState(null)
  const [_, setCollapseItem] = useContext(Collapsible)

  useEffect(() => {
    setCollapseItem(rotate)
  }, [rotate, setCollapseItem])

  return (
    <div className="collapse__title flex border border-red-800 p-1">
      {children}

      <Button
        className="flex items-center py-0 text-4xl"
        onClick={() => setRotation(!rotate)}
      >
        <IconNext rotate={rotate} />
      </Button>
    </div>
  )
}

export default CollapseTitle
