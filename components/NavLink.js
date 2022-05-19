import Link from "next/link"
import React from "react"

const NavLink = React.forwardRef(
  ({ children, className, href, ...props }, ref) => {
    return (
      <>
        <Link href={href} passHref>
          <a {...props} ref={ref} className={`${className || ""}`.trim()}>
            {children}
          </a>
        </Link>
      </>
    )
  }
)

NavLink.displayName = "Link"

export default NavLink
