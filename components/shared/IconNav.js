import Button from "./Button"

const styles = "fill-black stroke-black stroke-2"

const IconNav = ({ className, ...props }) => {
  return (
    <Button className={`icon__nav ${className}`.trim()} {...props}>
      <svg width="32" height="32" viewBox="0 0 32 32" version="1.1">
        <g>
          <rect
            className={styles}
            width="23.293694"
            height="1"
            x="4"
            y="4.4972973"
          />
          <rect
            className={styles}
            width="15.538857"
            height="1"
            x="4"
            y="14.526068"
          />
          <rect
            className={styles}
            width="23.293694"
            height="1"
            x="4"
            y="24.947746"
          />
        </g>
      </svg>
    </Button>
  )
}

export default IconNav
