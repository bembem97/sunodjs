import React, { useState, useEffect } from "react"
import Container from "./Container"

const COLORS = {
  success: "alert-success",
  info: "alert-info",
  error: "alert-error",
  warning: "alert-warning",
}

const Alert = ({ children, severity, ...props }) => {
  const [color, setColor] = useState(COLORS.info)

  useEffect(() => {
    switch (severity) {
      case "success":
        setColor(COLORS.success)
        break

      case "info":
        setColor(COLORS.info)
        break

      case "warning":
        setColor(COLORS.warning)
        break

      case "error":
        setColor(COLORS.error)
        break

      default:
        setColor(COLORS.info)
    }
  }, [color, severity])

  return (
    <>
      <Container className={`alert ${color} ${props.className || ""}`.trim()}>
        {children}
      </Container>
    </>
  )
}

export default Alert
