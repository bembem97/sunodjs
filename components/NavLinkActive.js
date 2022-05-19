import { cloneElement, Children, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const child = Children.only(children)
  const childClassName = `${props.className || ""}`.trim()

  const { isReady, asPath } = useRouter()

  const [className, setClassName] = useState(childClassName)

  useEffect(() => {
    if (isReady) {
      const url = new URL(props.href, location.href).pathname

      // * asPath to remove #hash and ?=query
      const setActivePage = new URL(asPath, location.href).pathname
      const getActive = setActivePage.match(/\/blog/gi) || ""
      const active = getActive[0]

      const newClassName =
        url === setActivePage || url === active
          ? `${childClassName} ${activeClassName}`.trim()
          : childClassName

      if (newClassName !== className) {
        setClassName(newClassName)
      }
    }
  }, [className, asPath, isReady, props.href, childClassName])

  return (
    <Link {...props} passHref>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default ActiveLink
