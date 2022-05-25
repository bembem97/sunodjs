import Typography from "components/shared/Typography"
import LayoutBlog from "./LayoutBlog"

import React from "react"
import { MDXProvider } from "@mdx-js/react"

const LayoutArticle = ({ children, meta }) => {
  const { Toc } = meta

  const shortcodes = {
    h1: (props) => <Typography {...props} tag="h1" variant="h1" />,
    h2: (props) => <Typography {...props} tag="h2" variant="h2" />,
    h3: (props) => <Typography {...props} tag="h3" variant="h3" />,
    h4: (props) => <Typography {...props} tag="h4" variant="h4" />,
    p: (props) => <Typography {...props} tag="p" />,
    pre: (props) => <pre {...props} />,
  }

  return (
    <>
      <MDXProvider components={shortcodes}>
        <LayoutBlog title={meta.title} Toc={Toc}>
          <article className="px-4 lg:px-0 flex flex-col gap-1">
            {/* // * Contents */}

            <Typography tag="h1" className="text-2xl lg:text-4xl" variant="h1">
              {meta.title}
            </Typography>

            <Typography className="sub flex flex-wrap gap-1">
              <span className="break-words">by {meta.author}</span>
              <span> &#8212; {meta.date}</span>
            </Typography>

            {children}
          </article>
        </LayoutBlog>
      </MDXProvider>
    </>
  )
}

export default LayoutArticle
