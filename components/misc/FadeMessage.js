import FadeOut from "./FadeOut"

const FadeMessage = ({ children }) => {
  return (
    <FadeOut key={Math.random()} countdown={2100}>
      <span className="Fading-Message transition-all animate-fade-node-out absolute bottom-[111%] text-red-900 bg-red-300 p-2 rounded before:border-[10px] before:border-t-red-300 before:absolute before:top-full before:border-transparent">
        {children}
      </span>
    </FadeOut>
  )
}

const FadeBorder = ({ children, ...props }) => {
  return (
    <FadeOut key={Math.random()} countdown={2100}>
      <span
        className={`Fading-Border transition-all animate-fade-border-out p-1 rounded ${
          props.className || ""
        }`.trim()}
      >
        {children}
      </span>
    </FadeOut>
  )
}
export { FadeMessage, FadeBorder }
