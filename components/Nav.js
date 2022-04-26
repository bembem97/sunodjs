import NavLink from "./NavLink"

const Nav = () => {
  return (
    <>
      <nav className="shadow flex justify-center bg-zinc-100 sticky top-0">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/posts">Posts</NavLink>
        <NavLink href="/about">About</NavLink>
      </nav>
    </>
  )
}

export default Nav
