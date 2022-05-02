import Editor from "components/shared/Editor"

import updateObjViaContext from "texts/usecontext/updateObjViaContext"

import updateThemeViaContext, {
  styles as style2,
} from "texts/usecontext/updateThemeViaContext"

import multipleContext, {
  styles as style3,
} from "texts/usecontext/multipleContext"

import extractingProvidersToAComponent, {
  styles as style4,
} from "texts/usecontext/extractingProvidersToAComponent"

import mainApp, {
  taskList,
  tasksContext,
  addTask,
} from "texts/usecontext/scalingUpWithContextAndAReducer"

import specifyDefVal, {
  styles as style5,
} from "texts/usecontext/specifyingAFallbackDefaultValue"

import overridingATheme, {
  styles as style6,
} from "texts/usecontext/OverridingATheme"

// TODO: UPDATING DATA PASSED VIA CONTEXT
// *: Update an object via context
const UpdateObjViaContext = () => (
  <Editor
    files={{
      "/App.js": updateObjViaContext,
    }}
  />
)

// *: Update a theme via context
const UpdateThemeViaContext = () => (
  <Editor
    files={{
      "/App.js": updateThemeViaContext,
      "/styles.css": { code: style2, hidden: true },
    }}
  />
)

// *: Multiple context
const MultipleContext = () => (
  <Editor
    files={{
      "/App.js": multipleContext,
      "/styles.css": { code: style3, hidden: true },
    }}
  />
)

// *: Extracting providers to a component
const ExtractingProvidersToAComponent = () => (
  <Editor
    files={{
      "/App.js": extractingProvidersToAComponent,
      "/styles.css": { code: style4, hidden: true },
    }}
  />
)

//*: Scaling up with context and a reducer
const ScalingUpWithContextAndAReducer = () => (
  <Editor
    files={{
      "/App.js": mainApp,
      "/TasksContext.js": tasksContext,
      "/AddTask.js": addTask,
      "/TaskList.js": taskList,
    }}
  />
)

// TODO: Specifying a fallback default value
const SpecifyingAFallbackDefaultValue = () => (
  <Editor files={{ "/App.js": specifyDefVal, "/styles.css": style5 }} />
)

// TODO: Overriding a theme
const OverridingATheme = () => (
  <Editor files={{ "/App.js": overridingATheme, "/styles.css": style6 }} />
)

export {
  UpdateThemeViaContext,
  UpdateObjViaContext,
  MultipleContext,
  ExtractingProvidersToAComponent,
  ScalingUpWithContextAndAReducer,
  SpecifyingAFallbackDefaultValue,
  OverridingATheme,
}
