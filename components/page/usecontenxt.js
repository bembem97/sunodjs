import { createContext, useContext, useState } from "react"
import MyButton from "components/shared/Button"

const CurrentUserContext = createContext(null)

const UpdateAnObjectViaContext = () => {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Form />
    </CurrentUserContext.Provider>
  )
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  )
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Bembem" })
      }}
    >
      Log in as Bembem
    </Button>
  )
}

function Panel({ title, children }) {
  const { setCurrentUser } = useContext(CurrentUserContext)

  return (
    <section className="panel">
      <MyButton color="warning" onClick={() => setCurrentUser(null)}>
        Reset
      </MyButton>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, onClick }) {
  return (
    <MyButton color="success" onClick={onClick}>
      {children}
    </MyButton>
  )
}

export { UpdateAnObjectViaContext }
