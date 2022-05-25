import React from "react"
import LayoutBlog from "components/layout/LayoutBlog"
import Typography from "components/shared/Typography"
import NavLink from "components/NavLink"
import Image from "next/image"
import Container from "components/shared/Container"

export default function Posts({ dir }) {
  return (
    <>
      <LayoutBlog title="Posts">
        <Container className="flex flex-col gap-4 px-4 sm:px-1 mx-auto">
          {dir.map((data, i) => (
            <Container
              key={i}
              className="flex bg-secondary flex-col sm:flex-row rounded-md shadow-md overflow-hidden"
            >
              <Container className="basis-32 sm:basis-64">
                <NavLink href={`/blog/${data.file}`}>
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
                <NavLink href={`/blog/${data.file}`}>
                  <Typography
                    variant={`h2`}
                    className="hover:underline capitalize"
                  >
                    {data.title}
                  </Typography>
                </NavLink>

                <Typography tag="p" className="line-clamp-4 mt-2">
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

import { getCategoryDir } from "lib/posts"

export function getStaticProps() {
  const dir = getCategoryDir()

  return { props: { dir } }
}
