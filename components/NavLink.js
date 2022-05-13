import Link from "next/link"

const NavLink = ({ children, className, href, ...props }) => {
  return (
    <>
      <Link href={href}>
        <a {...props} className={`${className || ""}`.trim()}>
          {children}
        </a>
      </Link>
    </>
  )
}

export default NavLink
