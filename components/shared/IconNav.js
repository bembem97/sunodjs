import Button from "./Button"

const styles = "fill-black stroke-black stroke-2"

const IconNav = ({ className, ...props }) => {
  return (
    <Button className={`icon__nav ${className}`.trim()} {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <g>
          <rect
            className="fill-black stroke-black stroke-2"
            width="18.283363"
            height="1.2671638"
            x="2.8679399"
            y="3.3700302"
          />
          <rect
            className="fill-black stroke-black stroke-2"
            width="12.196545"
            height="1.5161636"
            x="2.7434399"
            y="11.241673"
          />
          <rect
            className="fill-black stroke-black stroke-2"
            width="18.283363"
            height="1.2671638"
            x="2.8679399"
            y="19.421713"
          />
        </g>
      </svg>
    </Button>
  )
}

export default IconNav
