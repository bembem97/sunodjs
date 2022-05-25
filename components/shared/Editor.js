import { Sandpack } from "@codesandbox/sandpack-react"
import "@codesandbox/sandpack-react/dist/index.css"

import PropTypes from "prop-types"

const Editor = ({ files, ...props }) => {
  return (
    <Sandpack
      template="react"
      files={files}
      theme="github-light"
      options={{
        showLineNumbers: true,
        editorHeight: 350,
        autorun: false,
        classes: {
          "sp-button": "!bg-amber-600 hover:!bg-amber-700 !text-amber-50",
        },
      }}
      {...props}
    />
  )
}

Editor.propTypes = {
  files: PropTypes.object.isRequired,
}

export default Editor
