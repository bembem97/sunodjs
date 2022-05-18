import Collapse from "components/shared/Collapse"
import CollapseMenu from "components/shared/CollapseMenu"
import CollapseTitle from "components/shared/CollapseTitle"

import NavLink from "./NavLink"

import useSWR from "swr"

const fetcher = (url) => fetch(url).then((f) => f.json())

const SideNav = ({ className, ...props }) => {
  const { data, error } = useSWR("/api/tutorials", fetcher)

  if (error) return "An error has occurred."
  if (!data) return "Loading..."

  return (
    <nav
      {...props}
      id="sidenav"
      className={`sidenav ${className || ""}`.trim()}
    >
      {data.map((category, i) => {
        return (
          <Collapse key={i}>
            <CollapseTitle
              href={category.path}
              pathName={[category.path, category.child]}
            >
              {category.categoryTitle}
            </CollapseTitle>

            <CollapseMenu>
              {category.child.map((api, i) => (
                <NavLink key={i} href={api} className="hover:underline">
                  {category.topicTitle[i]}
                </NavLink>
              ))}
            </CollapseMenu>
          </Collapse>
        )
      })}
    </nav>
  )
}

export default SideNav
