import SideNav from "./SideNav"
import Layout from "./Layout"

import TableOfContents from "./page/TableOfContents"

const LayoutBlog = ({ children, title, Toc, ...props }) => {
  return (
    <>
      <Layout title={title}>
        <div id="wrapper">
          <SideNav />

          <div id="article" className="w-screen sm:w-auto">
            {children}
          </div>

          <TableOfContents>{Toc ? <Toc /> : null}</TableOfContents>
        </div>
      </Layout>
    </>
  )
}

export default LayoutBlog
