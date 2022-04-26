import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

const COLORS = {
  success: "btn-success",
  info: "btn-info",
  error: "btn-error",
  warning: "btn-warning",
}

const Button = React.forwardRef(
  ({ children, tag: Component = "button", href, color, ...props }, ref) => {
    const [btnColor, setBtnColor] = useState("btn-default")

    useEffect(() => {
      switch (color) {
        case "success":
          setBtnColor(COLORS.success)
          break
        case "info":
          setBtnColor(COLORS.info)
          break

        case "error":
          setBtnColor(COLORS.error)
          break

        case "warning":
          setBtnColor(COLORS.warning)
          break

        default:
          setBtnColor("btn-default")
      }
    }, [btnColor, color])

    return (
      <Component
        {...props}
        href={href}
        ref={ref}
        className={`btn ${btnColor} ${props.className || ""}`.trim()}
      >
        {children}
      </Component>
    )
  }
)

Button.displayName = "Button"

Button.propTypes = {
  tag: PropTypes.oneOf(["button", "a"]),
}

export default Button
