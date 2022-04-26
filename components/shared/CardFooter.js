import React from "react"

const CardFooter = ({ children, footerContentClass, divider, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={`card__footer py-2 px-4 ${props.className || ""}`.trim()}
      >
        {divider && (
          <hr className="card__divider mb-3 border-t border-t-gray-500" />
        )}

        <div
          className={`card__footer-content py-1 flex ${
            footerContentClass || ""
          }`.trim()}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default CardFooter
