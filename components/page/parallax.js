import Editor from "components/shared/Editor"
import parallax, { styles } from "texts/parallax/parallax"

const ParallaxCSSOnly = () => (
  <Editor
    files={{
      "/App.js": parallax,
      "/styles.css": styles,
    }}
  />
)

export { ParallaxCSSOnly }
