import { createContext, useContext } from "react"

const ThemeContext = createContext(null)

const Theme = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext)
  const className = "panel-" + theme
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext)
  const className = "button-" + theme
  return <button className={className}>{children}</button>
}

export { Theme }
