const updateThemeViaContext = `import "./styles.css";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
`

export const styles = `
section {
  padding: 1rem 2rem;
  border-radius: 0.375rem;
}

.panel-dark, .button-dark {
  background-color: #111827;
  color: #fff;
}

button {
  padding: 4px 1rem;
  border: 1px solid;
}

.button-dark {
  border: 1px solid #f9fafb;
}`

export default updateThemeViaContext
