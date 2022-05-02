import Editor from "components/shared/Editor"

import incrementCounter from "texts/usereducer/incrementCounter"
import form from "texts/usereducer/form"
import todoListArray, {
  addTask,
  taskList,
} from "texts/usereducer/todoListArray"

import passingTheInitializerFunction from "texts/usereducer/passingTheInitializerFunction"
import passingTheInitialStateDirectly from "texts/usereducer/passingTheInitialStateDirectly"

const IncrementCounter = () => (
  <Editor files={{ "/App.js": incrementCounter }} />
)

const FormObject = () => <Editor files={{ "/App.js": form }} />

const TodoListArray = () => (
  <Editor
    files={{
      "/App.js": todoListArray,
      "/AddTask.js": { code: addTask, hidden: true },
      "/TaskList.js": { code: taskList, hidden: true },
    }}
  />
)

const PassingTheInitializerFunction = () => (
  <Editor files={{ "/App.js": passingTheInitializerFunction }} />
)

const PassingTheInitialStateDirectly = () => (
  <Editor files={{ "/App.js": passingTheInitialStateDirectly }} />
)

export {
  IncrementCounter,
  FormObject,
  TodoListArray,
  PassingTheInitializerFunction,
  PassingTheInitialStateDirectly,
}
