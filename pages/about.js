import Layout from "components/Layout"
import Container from "components/shared/Container"
import Button from "components/shared/Button"

import React from "react"

export default function About() {
  const [state, setState] = React.useState(1)

  const update = (newVal) => setState(newVal)

  return (
    <Layout title="About me">
      <input value={state} onChange={(e) => update(e.target.value)} />
    </Layout>
  )
}
