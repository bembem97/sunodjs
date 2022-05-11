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
            API Hook Reference
          </Typography>

          {/* //* BLOG LIST: <CARD /> */}
          {data.map((_data_, index) => {
            const { title, date } = _data_.data

            return (
              <React.Fragment key={index}>
                <Card className="bg-secondary">
                  <CardHeader datePosted={date} className="ml-auto" />
                  <CardBody title={title} titleClassName="text-3xl">
                    {_data_.excerpt}
                  </CardBody>

                  <CardFooter>
                    <Link href={`/blog/react-api/${_data_.slug}`} passHref>
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
