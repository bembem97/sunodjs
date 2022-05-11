import { useState, useEffect } from "react"

const getScreenWidth = (screen, minmax) => {
  let width

  if (minmax === "min") {
    switch (screen) {
      case "xs":
        width = 0
        break

      case "sm":
        width = 640
        break

      case "md":
        width = 768
        break

      case "lg":
        width = 1024
        break

      case "xl":
        width = 1280
        break

      case "2xl":
        width = 1536
        break

      default:
        throw "Value is unknown."
    }
  }

  if (minmax === "max") {
    switch (screen) {
      case "sm":
        width = 639
        break

      case "md":
        width = 767
        break

      case "lg":
        width = 1023
        break

      case "xl":
        width = 1279
        break

      case "2xl":
        width = 1535
        break

      default:
        throw "Value is unknown."
    }
  }
  return width
}
// * Custom Hook - useMediaQuery
// todo parameters: (breakpoints, default state value (boolean), minimum or maximum width of viewport)
const useMediaQuery = (screen, def, minmax = "min") => {
  const [isMatch, setMatch] = useState(def || null)

  useEffect(() => {
    const mq = window.matchMedia(
      `(${minmax}-width: ${getScreenWidth(screen, minmax)}px)`
    )

    // * Set match state on render
    if (mq.matches) {
      setMatch(true)
    }

    if (mq.matches === false) {
      setMatch(false)
    }

    // * Update state when matchMedia matches viewport
    const updateMatch = (e) => {
      if (e.matches) {
        setMatch(true)
      }

      if (e.matches === false) {
        setMatch(false)
      }
    }

    mq.addEventListener("change", updateMatch)

    // * Cleanup EventListener
    return () => removeEventListener("change", updateMatch)
  }, [])

  return isMatch
}

export default useMediaQuery
