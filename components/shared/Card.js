const Card = ({ children, direction, tag: Component = "div", ...props }) => {
  return (
    <Component
      {...props}
      className={`card rounded-lg overflow-hidden grid grid-rows-[min-content_1fr_min-content] grid-cols-1 ${
        props.className || ""
      }`.trim()}
    >
      {children}
    </Component>
  )
}

export default Card
