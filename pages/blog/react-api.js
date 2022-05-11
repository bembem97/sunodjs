import Link from "next/link"
import React from "react"

import Container from "components/shared/Container"
import Layout from "components/Layout"
import Card from "components/shared/Card"
import CardHeader from "components/shared/CardHeader"
import CardBody from "components/shared/CardBody"
import CardFooter from "components/shared/CardFooter"
import Button from "components/shared/Button"
import Typography from "components/shared/Typography"
import LayoutBlog from "components/LayoutBlog"

const ReactAPI = ({ data }) => {
  return (
    <Layout title="Posts">
      <LayoutBlog>
        <Container className="px-2 mb-3 rounded flex flex-col gap-2">
          <Typography variant="h2" className="ml-2">
            API Hook Reference - EXCERPT NOT WORKING
          </Typography>

          {/* //* BLOG LIST: <CARD /> */}
          {data.map((article, index) => {
            const { title, date } = article.data
            console.log(
              `%cExcerpt`,
              `color: emerald; background-color: gray;`,
              article.excerpt
            )

            return (
              <React.Fragment key={index}>
                <Card className="bg-secondary">
                  <CardHeader datePosted={date} className="ml-auto" />
                  {/* <CardBody title={title} titleClassName="text-3xl">
                    {article.excerpt}
                  </CardBody> */}
                  <p>{article.excerpt}</p>

                  <CardFooter>
                    <Link href={`/blog/react-api/${article.slug}`} passHref>
                      <Button tag="a" color="warning">
                        Read more &rarr;
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </React.Fragment>
            )
          })}
        </Container>
      </LayoutBlog>

      <hr />
    </Layout>
  )
}

export default ReactAPI

import { getSortedPostsData } from "lib/posts"

export async function getStaticProps() {
  const data = getSortedPostsData()

  return { props: { data } }
}
