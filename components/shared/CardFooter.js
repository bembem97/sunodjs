import React from "react"

const CardFooter = ({ children, fClassName, divider, ...props }) => {
  return (
    <>
      <div {...props} className={`card__footer ${fClassName || ""}`.trim()}>
        {divider && (
          <hr className="card__divider mb-3 border-t border-t-gray-500" />
        )}

        <div
          className={`card__footer--content ${props.className || ""}`.trim()}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default CardFooter
