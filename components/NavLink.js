import Link from "next/link"

const NavLink = ({ children, className, href }) => {
  return (
    <>
      <Link href={href}>
        <a className={`${className || ""}`.trim()}>{children}</a>
      </Link>
    </>
  )
}

export default NavLink
