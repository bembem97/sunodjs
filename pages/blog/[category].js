import LayoutBlog from "components/layout/LayoutBlog"
import Container from "components/shared/Container"
import Card from "components/shared/Card"
import CardBody from "components/shared/CardBody"
import CardFooter from "components/shared/CardFooter"
import Button from "components/shared/Button"
import Typography from "components/shared/Typography"

import Link from "next/link"

export default function Category({ page, frontmatter }) {
  const pageName = page[0]
  const metadata = frontmatter[0]

  return (
    <LayoutBlog title={pageName.title}>
      <Container className="px-2 mb-3 rounded flex flex-col gap-5 lg:pr-20">
        <Typography variant="h2" className="capitalize">
          {pageName.title}
        </Typography>

        {/* //* BLOG LIST: <CARD /> */}
        {metadata.map((metadata, id) => {
          const { title, api, excerpt } = metadata

          return (
            <Card key={id} className="bg-secondary shadow-md">
              <CardBody title={api ? api : title} titleClassName="text-3xl">
                {excerpt}
              </CardBody>

              <CardFooter>
                <Link
                  href={`/blog/${pageName.file}/${title.toLowerCase()}`}
                  passHref
                >
                  <Button
                    tag="a"
                    color="tertiary"
                    className="text-white font-semibold"
                  >
                    Read more &rarr;
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </Container>

      <hr />
    </LayoutBlog>
  )
}

// * Static paths
import { getCategoryDir, getFileContent } from "lib/posts"

export function getStaticPaths() {
  const categories = getCategoryDir()

  const paths = categories.map((category) => {
    return {
      params: { category: category.file.toString() },
    }
  })

  return { paths, fallback: false }
}

export function getStaticProps({ params }) {
  const categories = getCategoryDir()
  const frontmatter = getFileContent(params.category)

  const page = categories.filter((item) => item.file === params.category)

  return { props: { page, frontmatter } }
}
