import SideNav from "./SideNav"
import Layout from "./Layout"

import TableOfContents from "./page/TableOfContents"

const LayoutBlog = ({ children, title, Toc, ...props }) => {
  return (
    <>
      <Layout title={title}>
        <div id="wrapper">
          <SideNav />

          <div id="article">{children}</div>

          {Toc ? (
            <TableOfContents>
              <Toc />
            </TableOfContents>
          ) : null}
        </div>
      </Layout>
    </>
  )
}

export default LayoutBlog
