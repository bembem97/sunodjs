import Link from "next/link"

const NavLink = ({ children, href }) => {
  return (
    <>
      <Link href={href}>
        <a className="p-2 md:py-4 ">{children}</a>
      </Link>
    </>
  )
}

export default NavLink
