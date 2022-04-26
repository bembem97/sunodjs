import React, { useRef, useState, useEffect } from "react"
import { FadeMessage, FadeBorder } from "components/misc/FadeMessage"
import Container from "components/shared/Container"
import Button from "components/shared/Button"
import Alert from "components/shared/Alert"
import Typography from "components/shared/Typography"

//* LOG BUTTON CLICKS
const CounterClicks = () => {
  console.log("+========== LOGGING BUTTON CLICKS. ==========+")
  const [state, setState] = useState(0)
  const ref = useRef(0)

  //* UseRef
  const useRefHandler = () => {
    ref.current++
    console.log("Ref:", ref.current)
  }

  //* UseState
  const useStateHandler = () => {
    setState((state) => state + 1)
    console.log("State:", state)
  }

  console.log(
    "Container with a red border re-renders everytime you click useState button but not with useRef button."
  )

  return (
    <Container className="relative">
      <FadeBorder className="absolute inset-0 border-2 border-red-300" />
      <Container
        className={`Sample-1 flex gap-2 flex-col relative p-1 rounded-md`.trim()}
      >
        <FadeMessage>This Component Rendered.</FadeMessage>

        {/* //* CONSOLE LOG */}
        <Alert>Open console log in dev tools for more result.</Alert>

        <Container className="flex md:gap-2 gap-2 flex-row">
          {/* //* USESTATE */}
          <Button
            onClick={useStateHandler}
            color="info"
            className={`sm:w-fit w-full`}
          >
            useState
          </Button>

          {/* //* USEREF */}
          <Button
            onClick={useRefHandler}
            color="success"
            className={`sm:w-fit w-full`}
          >
            useRef
          </Button>
        </Container>
      </Container>
    </Container>
  )
}

//* STOPWATCH
const StopWatch = () => {
  const timerIdRef = useRef(0)
  const [count, setCount] = useState(0)

  const startHandler = () => {
    if (timerIdRef.current) {
      return
    }

    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000)
  }
  const stopHandler = () => {
    clearInterval(timerIdRef.current)
    timerIdRef.current = 0
  }

  useEffect(() => {
    return () => clearInterval(timerIdRef.current)
  }, [])

  return (
    <>
      <Container>
        <h1>Stopwatch</h1>
        <p className="mb-5 text-xl">
          Timer:{" "}
          <Typography variant="h2" tag="span">
            {count}
          </Typography>
          s
        </p>

        <Container className="flex gap-2">
          <Button
            className={`sm:w-32 w-full`}
            color="success"
            onClick={startHandler}
          >
            Start
          </Button>

          <Button
            className={`sm:w-32 w-full`}
            color="error"
            onClick={stopHandler}
          >
            Stop
          </Button>
        </Container>
      </Container>
    </>
  )
}

//* FOCUSING AN ELEMENT
const FocusElement = () => {
  const inputRef = useRef()

  return (
    <>
      <div className="w-fit flex flex-col">
        <input
          ref={inputRef}
          type="text"
          className="py-2 px-3 shadow rounded mb-2"
          placeholder="Click button to focus on me"
        />
        <Button
          onClick={() => inputRef.current.focus()}
          className="py-2 px-3"
          color="info"
        >
          Submit
        </Button>
      </div>
    </>
  )
}

//*
const FocusElement2 = () => {
  console.log("+========== FOCUSING DOM ELEMENT. ==========+")
  const inputRef = useRef()

  useEffect(() => {
    // Logs `HTMLInputElement`
    console.log(inputRef.current)
  }, [])

  // Logs `undefined` during initial rendering
  console.log(inputRef.current)

  return (
    <>
      <div className="w-fit flex flex-col">
        <input
          ref={inputRef}
          type="text"
          className="py-2 px-3 shadow rounded mb-2"
          placeholder="Click button to focus on me"
        />
        <Button
          onClick={() => inputRef.current.focus()}
          className="py-2 px-3"
          color="info"
        >
          Submit
        </Button>
      </div>
    </>
  )
}

export { CounterClicks, StopWatch, FocusElement, FocusElement2 }
