const todoListArray = `import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown actions: ' + action.typer);
    }
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>Chores</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Manglimpyusa kwarto', done: true },
  { id: 1, text: 'Manghugas sa plato', done: false },
  { id: 2, text: 'Labhan ang mga bulingun', done: false }
];
`

export const addTask = `import { useState, useContext } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        onAddTask(text)
      }}>Add</button>
    </>
  );
}

let nextId = 3;
`

export const taskList = `import { useState, useContext, useEffect } from 'react';

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
  const TASKS = tasks;
  
  return (
    <ul>
      {TASKS.map(task => (
        <li key={task.id}>
          <Task task={task} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onDeleteTask, onChangeTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text)
  const [completed, setCompleted] = useState(false)
  
  const { text } = task
  
  let taskContent;
  
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={newText}
          onChange={e => setNewText(e.target.value)} 
        />
        <button onClick={() => {
          setIsEditing(false)
          onChangeTask({...task, text: newText })
        }}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={e => {
          setCompleted(!completed)
          onChangeTask({...task, done: completed })
        }}
      />
      {taskContent}
      <button onClick={() => onDeleteTask(task.id)}>
        Delete
      </button>
    </label>
  );
}
`

export default todoListArray
