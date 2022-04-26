const CardAction = ({ children, label, button, ...props }) => {
  return (
    <>
      <div
        className={`card__action flex gap-[2px] items-center ${
          props.className || ""
        }`.trim()}
      >
        <button>{button}</button>
        {label && (
          <span className={`text-xs ${props.labelStyle || ""}`.trim()}>
            {label}
          </span>
        )}
      </div>
    </>
  )
}

export default CardAction
