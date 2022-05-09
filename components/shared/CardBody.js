const CardBody = ({
  title,
  children,
  titleClassName,
  excerptClassName,
  ...props
}) => {
  return (
    <>
      <div {...props} className={`card__body ${props.className || ""}`.trim()}>
        {title && (
          <h1 className={`card__title ${titleClassName || ""}`.trim()}>
            {title}
          </h1>
        )}
        <p className={`card__excerpt ${excerptClassName || ""}`.trim()}>
          {children}
        </p>
      </div>
    </>
  )
}

export default CardBody
