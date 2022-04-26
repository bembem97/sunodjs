import Container from "components/shared/Container"
import Layout from "components/Layout"
import Link from "next/link"

import React from "react"

export default function Posts({ data }) {
  return (
    <>
      <Layout title="Posts">
        <Container className="p-5 rounded flex flex-col gap-2">
          {data.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <Link href={`/posts/${data.slug}`}>
                  <a className="bg-zinc-200 px-3 py-2">{data.title}</a>
                </Link>
                <span>{data.author}</span>
              </React.Fragment>
            )
          })}
        </Container>
      </Layout>
    </>
  )
}

import { getSortedPostsData } from "lib/posts"

export async function getStaticProps() {
  const data = getSortedPostsData()

  return { props: { data } }
}
