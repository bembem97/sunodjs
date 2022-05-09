const IconNext = ({ rotate, ...props }) => {
  const ROTATE = rotate
    ? "animate-rotate-90"
    : rotate === null
    ? ""
    : "animate-rotate-0"

  return (
    <span className={`${ROTATE} rotate`.trim()}>
      <svg width="16" height="16" viewBox="0 0 16 16">
        <g>
          <path
            className="stroke-black fill-black stroke-2"
            d="M 5.7747079,2.4033608 5.3723641,2.7978921 10.741505,8.0420327 5.3723641,13.288127 5.7747079,13.682658 11.548145,8.0420327 Z"
          />
        </g>
      </svg>
    </span>
  )
}

export default IconNext
