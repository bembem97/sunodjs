import Editor from "components/shared/Editor"

import clickCounter from "texts/useref/clickCounter"
import stopwatch from "texts/useref/stopwatch"
import focusTextInput from "texts/useref/focusTextInput"
import scrollImageToView from "texts/useref/scrollImageToView"
import playAndPauseVideo from "texts/useref/playAndPauseVideo"
import exposeRefToComponent from "texts/useref/exposeRefToComponent"

const ClickCounter = () => <Editor files={{ "/App.js": clickCounter }} />

const Stopwatch = () => <Editor files={{ "/App.js": stopwatch }} />

const FocusTextInput = () => <Editor files={{ "/App.js": focusTextInput }} />

const ScrollImageToView = () => (
  <Editor files={{ "/App.js": scrollImageToView }} />
)

const PlayAndPauseVideo = () => (
  <Editor files={{ "/App.js": playAndPauseVideo }} />
)

const ExposeRefToComponent = () => (
  <Editor files={{ "/App.js": exposeRefToComponent }} />
)

export {
  ClickCounter,
  Stopwatch,
  FocusTextInput,
  ScrollImageToView,
  PlayAndPauseVideo,
  ExposeRefToComponent,
}
