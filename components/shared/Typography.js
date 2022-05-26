import React, { useEffect, useState } from "react"

const TYPOGRAPHY = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  sub: "sub",
}

const Typography = React.forwardRef(
  ({ children, tag: Components = "p", variant, ...props }, ref) => {
    const [VARIANT, setVariant] = useState("")

    useEffect(() => {
      switch (variant) {
        case "h1":
          setVariant(TYPOGRAPHY.h1)
          break

        case "h2":
          setVariant(TYPOGRAPHY.h2)
          break

        case "h3":
          setVariant(TYPOGRAPHY.h3)
          break

        case "h4":
          setVariant(TYPOGRAPHY.h4)
          break

        case "sub":
          setVariant(TYPOGRAPHY.sub)
          break

        default:
          setVariant("")
      }
    }, [VARIANT, variant])

    const CLASSNAME = `${VARIANT} ${props.className || ""}`.trim()

    return (
      <Components {...props} className={CLASSNAME} ref={ref}>
        {children}
      </Components>
    )
  }
)

Typography.displayName = "Text"

export default Typography
