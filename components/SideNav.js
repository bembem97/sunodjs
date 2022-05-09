import NavLink from "./NavLink"
import Typography from "./shared/Typography"
import Collapse from "components/shared/Collapse"
import CollapseMenu from "./shared/CollapseMenu"
import CollapseTitle from "./shared/CollapseTitle"

const SideNav = () => {
  return (
    <nav className="fixed top-0 pt-16 bottom-0 w-80 flex flex-col px-2 content-center">
      <Collapse>
        <CollapseTitle>
          <NavLink href={"/blog"} className="flex items-center">
            <Typography tag="span" variant="h4">
              API Hook Reference
            </Typography>
          </NavLink>
        </CollapseTitle>

        <CollapseMenu>
          <span>a</span>
          <span>b</span>
          <span>c</span>
        </CollapseMenu>
      </Collapse>

      {/* <Collapse>
        <CollapseTitle>
          <NavLink href={"/blog"} className="flex items-center">
            <Typography tag="span" variant="h4">
              CSS Tricks
            </Typography>
          </NavLink>
        </CollapseTitle>

        <CollapseMenu>
          <span>a</span>
          <span>b</span>
          <span>c</span>
        </CollapseMenu>
      </Collapse> */}
    </nav>
  )
}

export default SideNav
