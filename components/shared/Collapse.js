import { createContext, useState } from "react"

export const Collapsible = createContext(null)

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
