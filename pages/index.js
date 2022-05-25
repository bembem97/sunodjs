import Image from "next/image"
import React from "react"
import Link from "next/link"

import Layout from "components/layout/Layout"
import Button from "components/shared/Button"
import Card from "components/shared/Card"
import CardBody from "components/shared/CardBody"
import CardFooter from "components/shared/CardFooter"
import Container from "components/shared/Container"
import Typography from "components/shared/Typography"

export default function Home({ metadata }) {
  return (
    <Layout title="Home">
      <Container className="mx-auto lg:max-w-5xl px-3 h-full flex flex-col gap-5">
        {/* // * Frontpage Card */}
        <Container className="flex gap-4 flex-wrap">
          <Card className="bg-secondary shadow-md grow basis-60">
            <CardBody title="React JS API Reference">
              Sit in nisi labore commodo mollit in dolore nulla reprehenderit.
              Reprehenderit ipsum adipisicing ullamco ea nostrud excepteur
              sunt.Dolore occaecat minim dolore velit consectetur nisi qui esse
              dolor aliquip consequat.
            </CardBody>

            <CardFooter>
              <Link passHref href="/blog/react-api">
                <Button
                  color="tertiary"
                  className="text-white font-semibold"
                  tag="a"
                  href="/blog/react-api"
                >
                  Read More &rarr;
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-secondary shadow-md grow basis-60">
            <CardBody title="How To">
              Ex reprehenderit incididunt ea ut sit laborum nostrud occaecat
              nostrud ea sint laborum.
            </CardBody>

            <CardFooter>
              <Link passHref href="/blog/how-to">
                <Button
                  color="tertiary"
                  className="text-white font-semibold"
                  tag="a"
                >
                  Read More &rarr;
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </Container>

        {/* // * Frontpage Fake Text */}
        <Typography variant="h2">
          Ut proident sint fugiat nostrud mollit non id?
        </Typography>

        <p>
          Voluptate anim id enim veniam sunt reprehenderit nulla. Reprehenderit
          ad cupidatat nisi Lorem ut nostrud. Aliqua anim qui pariatur consequat
          ut magna.
        </p>

        <p>
          Amet culpa irure magna anim eu laborum eu officia est labore sint ex
          enim laborum. Ea magna aliqua velit excepteur amet eu elit
          reprehenderit esse ea est irure cillum exercitation. Laborum cupidatat
          velit tempor officia aliqua. Sunt officia ullamco ad occaecat proident
          nisi enim qui. Anim aute nisi dolor sit esse officia.
        </p>

        <p>
          Officia deserunt do nulla consequat reprehenderit sit proident magna
          enim eiusmod eiusmod mollit. Amet exercitation laboris amet commodo
          id. Sit dolore excepteur occaecat cupidatat velit nulla irure sunt
          occaecat. Voluptate esse sint cillum exercitation labore sint do sit
          ut dolor est laboris consequat officia. Non fugiat tempor mollit sunt
          anim.
        </p>

        <Typography variant="h2">
          Ipsum exercitation veniam labore dolore eiusmod dolor aliquip
          cupidatat aliqua.
        </Typography>

        <ul className="list-disc flex flex-col gap-4 pl-5">
          <li>
            Deserunt adipisicing deserunt labore nostrud voluptate anim ut anim
            ad magna id commodo tempor.
          </li>
          <li>Minim eu qui ex eu ad magna exercitation enim.</li>
          <li>
            Dolore nostrud id veniam deserunt aliquip do nostrud eu voluptate.
          </li>
        </ul>

        <Typography variant="h2">
          Proident laboris proident consequat veniam.
        </Typography>

        <p>
          Enim velit ad irure consequat enim aliquip aliquip. Adipisicing
          laboris amet eu esse veniam non occaecat deserunt mollit adipisicing.
          Ex dolore ipsum laboris exercitation sit dolor Lorem. Amet minim sint
          ad commodo velit ex. Qui labore qui in adipisicing elit qui. Labore
          laboris minim non velit nostrud ipsum pariatur esse excepteur.
        </p>

        {/* // * Another Card */}
        <Container className="flex flex-col gap-5 mt-5">
          {[1, 2].map((i) => (
            <Container
              key={i}
              className="flex flex-col md:flex-row even:flex-col md:even:flex-row-reverse px-3"
            >
              <Container>
                <Image
                  src="/vimages/tech.svg"
                  alt="tech"
                  layout="responsive"
                  width={150}
                  height={105}
                />
              </Container>
              <Container className="flex items-center">
                <Typography className="p-4 text-black shadow-md">
                  Amet nostrud magna aliquip irure consequat minim. Fugiat nulla
                  elit adipisicing ipsum aliquip. Aliqua proident fugiat esse
                  incididunt nostrud cillum sunt sint dolore Lorem elit. Laboris
                  occaecat aliqua quis Lorem et aliquip mollit deserunt aliquip
                  adipisicing. Irure magna occaecat deserunt magna id duis ipsum
                  aliquip. Ut voluptate esse reprehenderit ut. Ullamco anim
                  exercitation fugiat nostrud anim elit id velit.
                </Typography>
              </Container>
            </Container>
          ))}
        </Container>
      </Container>
    </Layout>
  )
}

import { getFileContent } from "lib/posts"

export function getStaticProps() {
  const metadata = getFileContent("react-api")

  return { props: { metadata } }
}
