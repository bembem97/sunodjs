// import IconNext from "./IconNext"
import Button from "./Button"
import Typography from "components/shared/Typography"
// import { Collapsible } from "lib/context"

// import { useState, useContext, useEffect } from "react"
// import { useRouter } from "next/router"

const CollapseTitle = ({ children, categoryPath, articlesPath }) => {
  // const [rotate, setRotation] = useState(null)
  // const [_, setItemCollapse] = useContext(Collapsible)

  // const { asPath } = useRouter()

  // const url = new URL(asPath, location.href)

  // const filtered = articlesPath.filter((path) => path === asPath)
  // const articlePath = filtered[0]

  // useEffect(() => {
  //   setItemCollapse(rotate)
  // }, [rotate, setItemCollapse])

  // useEffect(
  //   () =>
  //     (url.pathname === categoryPath || articlePath === asPath) && (
  //       <>
  //         {setItemCollapse(true)}
  //         {setRotation(true)}
  //       </>
  //     ),
  //   []
  // )

  return (
    <div className="collapse__title flex p-1 pl-0">
      <span
        className="flex items-center py-0 gap-4 pl-0"
        // onClick={() => setRotation(!rotate)}
      >
        <Typography tag="span" className={`font-semibold`.trim()}>
          {children}
        </Typography>
        {/* <IconNext rotate={rotate} /> */}
      </span>
    </div>
  )
}

export default CollapseTitle
