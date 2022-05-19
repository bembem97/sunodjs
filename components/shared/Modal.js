import { useEffect, useState, useContext, useRef } from "react"
import { createPortal } from "react-dom"

import Button from "./Button"
import IconPrev from "components/shared/IconPrev"

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
  const closeNav = () => {
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
        onClick={closeNav}
      ></div>

      {/* <Button onClick={() => setOpen(false)}>&times;</Button> */}

      <div
        className={`content ${sidenavSlideFx} ${
          timer && "animate-slide-to-left"
        }`.trim()}
      >
        <div className="flex flex-col">
          <button
            onClick={closeNav}
            className="flex justify-end py-5 pr-10 transition-colors bg-inherit active:bg-gray-200"
          >
            <IconPrev />
          </button>
          {children}
        </div>
      </div>
    </div>
  )

  return mounted
    ? createPortal(MyContainer, document.querySelector("#modal"))
    : null
}

export default Modal
