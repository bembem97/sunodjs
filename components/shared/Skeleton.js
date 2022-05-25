import { cloneElement, Children } from "react"

const Skeleton = ({ children, className, ...props }) => {
  const child = Children.only(children)
  const skeletonStyles = `animate-pulse ${className}`

  const section = <section>{child}</section>

  return cloneElement(section, {
    className: skeletonStyles,
  })
}

export default Skeleton
