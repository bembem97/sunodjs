import { useState, useEffect } from "react"

const windowWidth = () => {
  if (typeof window !== "undefined") {
    return (
      window.innerWidth ||
      document.documentElement.innerWidth ||
      document.body.innerWidth
    )
  }
}

const useScreenMatcher = (screen, max = false) => {
  const [breakpoint, setBreakpoint] = useState(windowWidth)
  const [isMatchToScreen, setMatchToScreen] = useState(false)
  const [width, setWidth] = useState(windowWidth)

  // *
  useEffect(() => {
    if (!max) {
      switch (screen) {
        case "xs":
          setBreakpoint(0)
          break

        case "sm":
          setBreakpoint(640)
          break

        case "md":
          setBreakpoint(768)
          break

        case "lg":
          setBreakpoint(1024)
          break

        case "xl":
          setBreakpoint(1280)
          break

        case "2xl":
          setBreakpoint(1536)
          break

        default:
          throw "Value is unknown."
      }
    } else {
      switch (screen) {
        case "sm":
          setBreakpoint(639)
          break

        case "md":
          setBreakpoint(767)
          break

        case "lg":
          setBreakpoint(1023)
          break

        case "xl":
          setBreakpoint(1279)
          break

        case "2xl":
          setBreakpoint(1535)
          break

        default:
          throw "Value is unknown."
      }
    }
  }, [breakpoint, screen, max])

  // *
  useEffect(() => {
    const updateWidthState = () => setWidth(windowWidth)
    window.addEventListener("resize", updateWidthState)

    // * breakpoints set to minimum screen width
    if (!max) {
      width >= breakpoint ? setMatchToScreen(true) : setMatchToScreen(false)
    }

    // * breakpoints set to maximum screen width
    if (max) {
      width <= breakpoint ? setMatchToScreen(true) : setMatchToScreen(false)
    }

    return () => window.removeEventListener("resize", updateWidthState)
  }, [width, breakpoint, isMatchToScreen, screen, max])

  // *
  // useEffect(() => {
  //   if (!max) {
  //     width >= breakpoint ? setMatchToScreen(true) : setMatchToScreen(false)
  //   }

  //   if (max) {
  //     width <= breakpoint ? setMatchToScreen(true) : setMatchToScreen(false)
  //   }
  // }, [width, breakpoint, isMatchToScreen, screen])

  return isMatchToScreen
}

export default useScreenMatcher
