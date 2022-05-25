import { Sandpack } from "@codesandbox/sandpack-react"
import "@codesandbox/sandpack-react/dist/index.css"

export default function Test() {
  return (
    <Sandpack
      options={{
        editorHeight: 250,
        showLineNumbers: true,
        classes: {
          "sp-wrapper": "!p-5",
        },
      }}
    />
  )
}
