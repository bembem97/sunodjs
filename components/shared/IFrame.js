import Container from "./Container"
import PropTypes from "prop-types"

const IFrame = ({ src }) => {
  return (
    <Container noContainer>
      <iframe
        src={`${src}?codemirror=1&fontsize=14&hidenavigation=1&theme=dark&runonclick=1`}
        className="w-full h-[500px] border-0 rounded-sm overflow-hidden"
        title="update-an-object-via-context"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </Container>
  )
}

IFrame.propTypes = {
  src: PropTypes.string.isRequired,
}

export default IFrame
