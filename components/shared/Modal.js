import { useEffect, useState, useContext, useRef } from "react"
import { createPortal } from "react-dom"

import Button from "./Button"

import { OpenModal } from "lib/context"

const Modal = ({ children, ...props }) => {
  const [mounted, setMounted] = useState(false)
  const [timer, setTimer] = useState(false)

  const [open, setOpen] = useContext(OpenModal)
  const overlayRef = useRef(null)

  // * Slide sidenav to right/left animation
  const sidenavSlideFx = open ? "animate-slide-to-right" : ""

  // * Overlay transition
  const getDarker = open ? "animate-get-darker" : ""

  // * Click the window to close modal
  const closeThruWindow = () => {
    setTimer(true)

    setTimeout(() => {
      setOpen(false)
      setTimer(false)
    }, 400)
  }

  useEffect(() => {
    setMounted(open)

    return () => setMounted(false)
  }, [open, mounted])

  // * Modal Content
  const MyContainer = (
    <div {...props} className="modal__container">
      <div
        className={`overlay ${getDarker}`.trim()}
        ref={overlayRef}
        onClick={closeThruWindow}
      ></div>

      <Button onClick={() => setOpen(false)}>&times;</Button>

      <div
        className={`content ${sidenavSlideFx} ${
          timer && "animate-slide-to-left"
        }`.trim()}
      >
        {children}
      </div>
    </div>
  )

  return mounted
    ? createPortal(MyContainer, document.querySelector("#modal"))
    : null
}

export default Modal
