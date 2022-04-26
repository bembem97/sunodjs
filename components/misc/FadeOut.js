import React, { useEffect, useState, Children } from "react"

const FadeOut = ({ children, countdown }) => {
  const child = Children.only(children)

  const [state, setState] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(false)
    }, countdown || 1500)

    return () => clearTimeout(timer)
  }, [state, countdown])

  return (
    <>
      {state
        ? React.cloneElement(child, {
            className: child.props.className || null,
          })
        : null}
    </>
  )
}

export default FadeOut
