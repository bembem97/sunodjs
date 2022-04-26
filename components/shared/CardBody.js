const CardBody = ({ title, children, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={`card__body py-2 px-4 ${props.className || ""}`.trim()}
      >
        {title && (
          <h1 className="card__title text-lg mb-2 font-semibold">{title}</h1>
        )}
        <p className="card__excerpt max-h-[100px] line-clamp-4">{children}</p>
      </div>
    </>
  )
}

export default CardBody
