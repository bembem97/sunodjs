import Editor from "components/shared/Editor"

import counter from "texts/usestate/counter"
import textField from "texts/usestate/textField"
import checkbox from "texts/usestate/checkbox"
import form from "texts/usestate/form"
import passUpdaterFunction from "texts/usestate/passUpdaterFunc"
import passStateDirectly from "texts/usestate/passStateDirectly"
import passUpdaterFunction2 from "texts/usestate/passUpdaterFunc2"
import passStateDirectly2 from "texts/usestate/passStateDirectly2"
import arrForm from "texts/usestate/arrForm"
import nestedArrForm from "texts/usestate/nestedArrForm"
import list, { taskList, addTodo } from "texts/usestate/list"
import resetState from "texts/usestate/resetStateWithKey"
import storeInfoFromPrevRender, {
  countLabel,
} from "texts/usestate/storeInfoFromPrevRender"

const Counter = () => <Editor files={{ "/App.js": counter }} />

const TextField = () => <Editor files={{ "/App.js": textField }} />

const Checkbox = () => <Editor files={{ "/App.js": checkbox }} />

const Form = () => <Editor files={{ "/App.js": form }} />

const PassUpdaterFunc = () => (
  <Editor files={{ "/App.js": passUpdaterFunction }} />
)

const PassStateDirectly = () => (
  <Editor files={{ "/App.js": passStateDirectly }} />
)

const ArrForm = () => <Editor files={{ "/App.js": arrForm }} />

const NestedArrForm = () => <Editor files={{ "/App.js": nestedArrForm }} />

const List = () => (
  <Editor
    files={{
      "/App.js": list,
      "/AddTodo.js": addTodo,
      "/TaskList.js": taskList,
    }}
  />
)

const PassUpdaterFunc2 = () => (
  <Editor files={{ "/App.js": passUpdaterFunction2 }} />
)

const PassStateDirectly2 = () => (
  <Editor files={{ "/App.js": passStateDirectly2 }} />
)

const ResetState = () => <Editor files={{ "/App.js": resetState }} />

const StoreInfoFromPrevRender = () => (
  <Editor
    files={{ "/App.js": storeInfoFromPrevRender, "/CountLabel.js": countLabel }}
  />
)

export {
  Counter,
  TextField,
  Checkbox,
  Form,
  PassUpdaterFunc,
  PassStateDirectly,
  ArrForm,
  NestedArrForm,
  List,
  PassUpdaterFunc2,
  PassStateDirectly2,
  ResetState,
  StoreInfoFromPrevRender,
}
