import { useEffect, useState, useContext, useRef } from "react"
import { createPortal } from "react-dom"

import Button from "./Button"

import { OpenModal } from "lib/context"

const Modal = ({ children, ...props }) => {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useContext(OpenModal)
  const overlayRef = useRef(null)

  // * Slide sidenav to right/left animation
  const sidenavSlideFx = open
    ? "animate-slide-to-right"
    : open === null
    ? ""
    : "animate-slide-to-left"

  const delayClose = () => {
    const timer = setTimeout(() => setOpen(false), 500)
  }

  useEffect(() => {
    setMounted(open)

    return () => setMounted(false)
  }, [open, mounted])

  // * Modal Content
  const MyContainer = (
    <div {...props} className="modal__container">
      <div className="overlay" ref={overlayRef} onClick={delayClose}></div>

      <Button onClick={() => setOpen(false)}>&times;</Button>

      <div className={`content ${sidenavSlideFx}`}>{children}</div>
    </div>
  )

  return mounted
    ? createPortal(MyContainer, document.querySelector("#modal"))
    : null
}

export default Modal
