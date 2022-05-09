import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

const COLOR = {
  success: "btn-success",
  info: "btn-info",
  error: "btn-error",
  warning: "btn-warning",
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
}

const Button = React.forwardRef(
  ({ children, tag: Component = "button", href, color, ...props }, ref) => {
    const [btnColor, setBtnColor] = useState("btn-default")

    useEffect(() => {
      switch (color) {
        case "success":
          setBtnColor(COLOR.success)
          break
        case "info":
          setBtnColor(COLOR.info)
          break

        case "error":
          setBtnColor(COLOR.error)
          break

        case "warning":
          setBtnColor(COLOR.warning)
          break

        case "primary":
          setBtnColor(COLOR.primary)
          break

        case "secondary":
          setBtnColor(COLOR.secondary)
          break

        case "tertiary":
          setBtnColor(COLOR.tertiary)
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
