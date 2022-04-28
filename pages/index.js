import Layout from "components/Layout"
import Container from "components/shared/Container"
import Card from "components/shared/Card"
import CardHeader from "components/shared/CardHeader"
import CardBody from "components/shared/CardBody"
import CardFooter from "components/shared/CardFooter"
import Button from "components/shared/Button"

import Link from "next/link"

export default function Home({ data }) {
  // console.log(data)

  return (
    <Layout title="Home">
      <Container className="pt-5 mx-auto flex justify-center">
        <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:max-w-4xl">
          {data.map((article, index) => {
            return (
              <Card key={index} className="bg-slate-50 shadow">
                <CardHeader
                  author={article.data.author}
                  datePosted={article.data.date}
                />
                <CardBody title={article.data.title} />

                <CardFooter footerContentClass="flex justify-center">
                  <Link passHref href={`/posts/${article.slug}`}>
                    <Button
                      tag="a"
                      className="border-cyan-500 hover:bg-cyan-100 transition-colors text-cyan-700 border rounded-full px-4 py-1 w-full text-center"
                    >
                      Read more
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </Container>
      </Container>
    </Layout>
  )
}

import { getSortedPostsData } from "lib/posts"

export async function getStaticProps() {
  const data = getSortedPostsData()
  // console.log(data)
  return { props: { data } }
}
