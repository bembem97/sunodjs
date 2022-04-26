const Container = ({
  children,
  noContainer,
  tag: Component = "div",
  ...props
}) => {
  const CONTAINER = noContainer ? "" : `container`
  const CLASSNAME = `${CONTAINER} ${props.className || ""}`.trim()
  return (
    <Component {...props} className={CLASSNAME}>
      {children}
    </Component>
  )
}

export default Container
