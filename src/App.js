
import styled from 'styled-components';
import './App.css';
import TodoList from './components/TodoList';


export const initialState = {
  counter: 2,
  todos: [{
    id: 1,
    text: "One",
    complete: false
  }, {
    id: 2,
    text: "Two",
    complete: false
  }],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      {
        const newCounter = state.counter + 1;
        const newTodo = {
          id: newCounter,
          text: action.text,
          complete: false
        };
        return {
          counter: newCounter,
          todos: [...state.todos, newTodo],
        };
      }
    case "edit":
      {
        const idx = state.todos.findIndex(t => t.id === action.id);
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
      const filteredTodos = state.todos.filter((todo) => todo.id !== action.id)
      const newCounter = state.counter - 1;
      
      return {
            counter: newCounter,
            todos: filteredTodos,
          };
    }
    
      case "complete":
        console.log(action.id);
        console.log(state.todos);
        const completed= state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          }
          
          // return{ 
          //   counter: newCounter,
          //   todos: completedTodos,
          // }
          return todo
          });
          return {...state, todos: completed}
         

    default:
      return state;
  }
};

function App() {

  
  return (
    <div className="App">
      <MainTitle>Todo App</MainTitle>
     <TodoList/>
    </div>
  );
}

export default App;


const MainTitle = styled.h1`
color: white;
`
