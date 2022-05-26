import Image from "next/image"
import React from "react"
import Link from "next/link"

import Layout from "components/layout/Layout"
import Button from "components/shared/Button"
import Card from "components/shared/Card"
import CardBody from "components/shared/CardBody"
import CardHeader from "components/shared/CardHeader"
import CardFooter from "components/shared/CardFooter"
import Container from "components/shared/Container"
import Typography from "components/shared/Typography"
import NavLink from "components/NavLink"

export default function Home({ category, metadata }) {
  const gridTemplates = "grid-cols-1 grid-rows-6"
  const smGridTemplates = "sm:grid-cols-2 sm:grid-rows-3"
  const mdGridTemplates = "md:grid-cols-3"

  return (
    <Layout title="Home">
      <Container className="mx-auto lg:max-w-5xl px-3 h-full flex flex-col gap-5">
        <Typography variant="h1">Learn about the hooks</Typography>

        <Container
          className={`grid ${gridTemplates} ${smGridTemplates} ${mdGridTemplates} gap-1 grid-flow-col-dense`}
        >
          {metadata.map((data, i) => (
            <Card
              key={i}
              className={`${
                i === 0
                  ? "md:col-span-2 md:row-span-2 col-span-1 row-span-1"
                  : "col-span-1 row-span-1"
              }`}
            >
              <NavLink
                href={`/blog/${category[0].file}/${data.title.toLowerCase()}`}
                className={`relative flex items-center`}
              >
                <CardHeader thumbnail={data.image} className="w-full h-full" />
                <div className="absolute inset-0 bg-transparent transition-colors hover:bg-amber-900/25 z-10"></div>
                <CardBody
                  title={data.api}
                  className="line-clamp-2 p-2 bg-amber-300/90 absolute left-0 right-0 mx-auto text-center w-fit select-none"
                ></CardBody>
              </NavLink>
            </Card>
          ))}
        </Container>
        {/* // * Frontpage Card */}
        <Container className="flex gap-4 flex-wrap flex-col md:flex-row">
          <Card className="bg-secondary shadow-md grow basis-60">
            <CardBody title="React JS API Reference">
              Sit in nisi labore commodo mollit in dolore nulla reprehenderit.
              Reprehenderit ipsum adipisicing ullamco ea nostrud excepteur
              sunt.Dolore occaecat minim dolore velit consectetur nisi qui esse
              dolor aliquip consequat.
            </CardBody>

            <CardFooter>
              <NavLink href="/blog/apis">
                <span
                  color="tertiary"
                  className="text-white font-semibold btn-tertiary p-2 rounded"
                >
                  Read More &rarr;
                </span>
              </NavLink>
            </CardFooter>
          </Card>

          <Card className="bg-secondary shadow-md grow basis-60">
            <CardBody title="How To">
              Ex reprehenderit incididunt ea ut sit laborum nostrud occaecat
              nostrud ea sint laborum.
            </CardBody>

            <CardFooter>
              <NavLink href="/blog/how-to">
                <span
                  color="tertiary"
                  className="text-white font-semibold btn-tertiary p-2 rounded"
                >
                  Read More &rarr;
                </span>
              </NavLink>
            </CardFooter>
          </Card>
        </Container>
      </Container>
    </Layout>
  )
}

import { getCategoryDir, getFileContent } from "lib/posts"

export function getStaticProps() {
  const category = getCategoryDir()
  const metadata = getFileContent("apis")[0]

  return { props: { category, metadata } }
}
