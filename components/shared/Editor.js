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
        autorun: false,
        classes: {
          "sp-wrapper": "custom-wrapper",
          "sp-button": "custom-button",
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
