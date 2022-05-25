import SideNav from "components/SideNav"
import Layout from "./Layout"
import useMediaQuery from "lib/hooks/useMediaQuery"
import TableOfContents from "components/shared/tableOfContents/TableOfContents"

const LayoutBlog = ({ children, title, Toc, ...props }) => {
  const contentCell = Toc
    ? "md:col-start-1 md:col-end-8 lg:col-span-6"
    : "md:col-span-full lg:col-span-8"

  const media = useMediaQuery("lg", true)

  return (
    <>
      <Layout title={title}>
        <div className="wrapper grid grid-cols-1 md:grid-cols-10">
          <div className={`lg:col-span-2 hidden lg:block`.trim()}>
            {media && <SideNav />}
          </div>

          <div className={`w-full ${contentCell}`}>{children}</div>

          {Toc ? (
            <TableOfContents
              className={"hidden md:block md:col-span-2 lg:col-span-2"}
            >
              <Toc />
            </TableOfContents>
          ) : null}
        </div>
      </Layout>
    </>
  )
}

export default LayoutBlog
