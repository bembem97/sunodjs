import React from "react"
import Layout from "components/Layout"
import Typography from "components/shared/Typography"
import NavLink from "components/NavLink"

export default function Posts({ data }) {
  return (
    <>
      <Layout title="Posts" data={data}>
        <NavLink href={`/blog/react-api`}>
          <Typography variant="h2" className="ml-2">
            API Hook Reference
          </Typography>
        </NavLink>

        <NavLink href={`/blog/css-tricks`}>
          <Typography variant="h2" className="ml-2">
            CSS Tricks
          </Typography>
        </NavLink>
      </Layout>
    </>
  )
}

import { getSortedPostsData } from "lib/posts"

export async function getStaticProps() {
  const data = getSortedPostsData()

  return { props: { data } }
}
