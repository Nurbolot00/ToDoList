import { createContext, useContext, useReducer } from "react";

export const TodoContext = createContext();

const initialState = {
  counter: 2,
  todos: [
    {
      id: 1,
      text: "One",
      complete: false,
    },
    {
      id: 2,
      text: "Two",
      complete: false,
    },
  ],
};

// const reducer = () => {}

export const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const newCounter = state.counter+1;
      const newTodo = {
        id: newCounter,
        text: action.text,
        complete: false,
      };
      return {
        counter: newCounter,
        todos: [...state.todos, newTodo],
      };
    }
    case "edit": {
      const idx = state.todos.findIndex((t) => t.id === action.id);
      const todo = Object.assign({}, state.todos[idx]);
      todo.text = action.text;
      const todos = Object.assign([], state.todos);
      todos.splice(idx, 1, todo);
      return {
        counter: state.counter,
        todos: todos,
      };
    }
    case "remove": {
      const filteredTodos = state.todos.filter((todo) => todo.id !== action.id);
      const newCounter = state.counter -1 ;

      return {
        counter: newCounter,
        todos: filteredTodos,
      };
    }

    case "complete":
      console.log(action.id);
      console.log(state.todos);
      const completed = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        }

        return todo;
      });
      return { ...state, todos: completed };
    
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const remove = (id) => dispatch({ type: "remove", id: id });
  const complete = (id, complete) => {
    console.log(complete);
    dispatch({ type: "complete", id: id, complete: complete });
  };

  const edit = (text, id) => dispatch({ type: "edit", id: id, text: text });
  const add = (text) => dispatch({ type: "add", text: text });

  const contextValue = {
    state: state.todos,
    counter: state.counter,
    remove,
    edit,
    complete,
    add,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
