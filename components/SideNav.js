import Collapse from "components/shared/Collapse"
import CollapseMenu from "components/shared/CollapseMenu"
import CollapseTitle from "components/shared/CollapseTitle"
import Container from "./shared/Container"

import NavLink from "./NavLink"

import useSWR from "swr"
import Skeleton from "./shared/Skeleton"
import useMediaQuery from "lib/hooks/useMediaQuery"

const fetcher = (url) => fetch(url).then((f) => f.json())

const SideNav = ({ className, ...props }) => {
  const { data, error } = useSWR("/api/tutorials", fetcher)
  const media = useMediaQuery("lg", true, "max")

  if (error) return "An error has occurred."
  if (!data)
    return (
      <>
        {media ? (
          <Container className="flex-col gap-4 hidden lg:flex">
            <Skeleton>
              <Container className="rounded-full w-3/4 bg-slate-400 h-3 hidden lg:flex"></Container>
            </Skeleton>

            <Skeleton>
              <Container className="rounded-full w-3/4 bg-slate-400 h-3 hidden lg:flex"></Container>
            </Skeleton>
          </Container>
        ) : null}
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
