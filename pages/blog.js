import React from "react"
import LayoutBlog from "components/LayoutBlog"
import Typography from "components/shared/Typography"
import NavLink from "components/NavLink"
import data from "lib/tutorials"
import Image from "next/image"
import Container from "components/shared/Container"

export default function Posts() {
  return (
    <>
      <LayoutBlog title="Posts">
        <Container className="flex flex-col gap-4 px-4 sm:px-1">
          {data.map((data, i) => (
            <Container
              key={i}
              className="flex bg-secondary flex-col sm:flex-row rounded-md shadow-md overflow-hidden"
            >
              <Container className="basis-32 sm:basis-64">
                <NavLink href={`/blog/${data.path}`}>
                  <Image
                    alt="thumbnail"
                    src={data.img}
                    layout="responsive"
                    width={150}
                    height={150}
                    quality={75}
                  />
                </NavLink>
              </Container>

              <Container className="basis-auto py-2 px-4 flex flex-col">
                <NavLink href={`/blog/${data.path}`}>
                  <Typography variant={`h2`} className="hover:underline">
                    {data.title}
                  </Typography>
                </NavLink>

                <Typography tag="p" className="line-clamp-6 mt-2">
                  Voluptate aute et exercitation sint esse velit ex mollit.
                  Exercitation ex officia ullamco fugiat enim. Occaecat eu eu
                  cupidatat pariatur non anim ullamco sint irure mollit est. Eu
                  proident est cillum mollit cupidatat. Excepteur et aute culpa
                  eiusmod aute id sint elit laboris sunt veniam. Nisi voluptate
                  eiusmod sint nostrud consequat reprehenderit veniam culpa.
                </Typography>
              </Container>
            </Container>
          ))}
        </Container>
      </LayoutBlog>
    </>
  )
}

// import { getSortedPostsData } from "lib/posts"

// export async function getStaticProps() {
//   const data = getSortedPostsData()

//   return { props: { data } }
// }
