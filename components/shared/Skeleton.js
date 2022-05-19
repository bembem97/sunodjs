import { cloneElement, Children } from "react"

const Skeleton = ({ children, className, ...props }) => {
  const child = Children.only(children)
  const skeletonStyles = `animate-pulse ${className}`

  return cloneElement(<section>{child}</section>, {
    className: skeletonStyles,
  })
}

export default Skeleton
