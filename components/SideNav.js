import Collapse from "components/shared/Collapse"
import CollapseMenu from "components/shared/CollapseMenu"
import CollapseTitle from "components/shared/CollapseTitle"
import Container from "components/shared/Container"
import Skeleton from "components/shared/Skeleton"

import NavLink from "./NavLink"

import useSWR from "swr"
import { useRouter } from "next/router"

const fetcher = (url) => fetch(url).then((data) => data.json())

const SideNav = ({ className, ...props }) => {
  const { data, error } = useSWR("/api/tutorials", fetcher)

  const { asPath } = useRouter()

  if (error) return "An error has occurred."
  if (!data)
    return (
      <>
        <Container className="flex flex-col gap-4">
          <Skeleton>
            <Container className="rounded-full w-3/4 bg-slate-400 h-3 hidden lg:flex"></Container>
          </Skeleton>

          <Skeleton>
            <Container className="rounded-full w-3/4 bg-slate-400 h-3 hidden lg:flex"></Container>
          </Skeleton>
        </Container>
      </>
    )

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
              categoryPath={category.path}
              articlesPath={category.child}
            >
              {category.categoryTitle}
            </CollapseTitle>

            <CollapseMenu>
              {category.child.map((link, i) => (
                <NavLink
                  key={i}
                  href={link}
                  className={`hover:underline pl-1 ${
                    link === asPath ? "bg-tertiary" : ""
                  }`.trim()}
                >
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
