import React from "react"

import Button from "components/shared/Button"
import Layout from "components/Layout"
import Container from "components/shared/Container"

export default function Home() {
  const deezNuts = React.useRef(false)
  const [state, setState] = React.useState(false)

  return (
    <Layout title="Home">
      <div className="border border-black p-5 h-fit">
        {/*// * COMMENT*/}
        <div className="border border-green-500 p-1">
          <div className="border bg-green-900 h-10 w-10"></div>
          <div className="border bg-black h-10 w-10 hover:h-96 transition-all"></div>
        </div>
      </div>
    </Layout>
  )
}
