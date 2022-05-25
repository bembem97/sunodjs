import Head from "next/head"

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title + " - Some Blog" || "Give this page a title!"}</title>
    </Head>
  )
}

export default Meta
