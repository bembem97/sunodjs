import Container from "./shared/Container"
import Typography from "./shared/Typography"
import Layout from "./Layout"
import Alert from "./shared/Alert"

import React from "react"
import { MDXProvider } from "@mdx-js/react"

const LayoutArticle = ({ children, meta }) => {
  const shortcodes = {
    h1: (props) => <Typography {...props} tag="h1" variant="h1" />,
    h2: (props) => <Typography {...props} tag="h2" variant="h2" />,
    h3: (props) => <Typography {...props} tag="h3" variant="h3" />,
    h4: (props) => <Typography {...props} tag="h4" variant="h4" />,
    p: (props) => <Typography {...props} tag="p" />,
    blockquote: (props) => (
      <Container {...props} tag="blockquote" className="table-of-contents" />
    ),
  }

  return (
    <>
      <Layout title={meta.title}>
        <MDXProvider components={shortcodes}>
          <Container tag="article" className="mx-auto pt-5 flex flex-col gap-5">
            <div>
              <Typography
                tag="h1"
                className="mb-3 text-2xl lg:text-4xl"
                variant="h1"
              >
                {meta.title}
              </Typography>
              <Typography className="sub flex flex-wrap gap-1">
                <span className="break-words">by {meta.author}</span>
                <span> &#8212; {meta.date}</span>
              </Typography>
            </div>

            {children}

            <Alert severity={`warning`}>
              Original source &rarr;{" "}
              <a
                href={meta.originalSrc}
                className="hover:underline text-sky-700 italic"
              >
                click here
              </a>{" "}
            </Alert>
          </Container>
        </MDXProvider>
      </Layout>
    </>
  )
}

export const Link = ({ href }) => (
  <>
    <a
      rel="noreferrer"
      href={href}
      target="_blank"
      className="font-bold italic text-sky-500 underline w-fit"
    >
      Try this demo &larr;
    </a>
  </>
)

export default LayoutArticle
