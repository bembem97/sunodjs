import { createContext, useState } from "react"

export const Collapsible = createContext(null)

const Collapse = ({ children, ...props }) => {
  const [collapseItem, setCollapseItem] = useState(null)

  return (
    <Collapsible.Provider value={[collapseItem, setCollapseItem]}>
      <div
        className="collapse border border-black p-2 transition-all"
        {...props}
      >
        {children}
      </div>
    </Collapsible.Provider>
  )
}

export default Collapse
