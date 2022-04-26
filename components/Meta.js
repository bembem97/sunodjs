import Head from "next/head"

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title + " - React" || "Give this page a title!"}</title>
    </Head>
  )
}

export default Meta
