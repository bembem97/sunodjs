import { useState } from "react"
import { Collapsible } from "lib/context"

const Collapse = ({ children, ...props }) => {
  const [itemCollapse, setItemCollapse] = useState(null)

  return (
    <Collapsible.Provider value={[itemCollapse, setItemCollapse]}>
      <div className="collapse transition-all" {...props}>
        {children}
      </div>
    </Collapsible.Provider>
  )
}

export default Collapse
