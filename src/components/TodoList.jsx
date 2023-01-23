import React, { useReducer } from 'react';
import { initialState, reducer} from '../App'
import TodoItem from './TodoItem.jsx';
import AddTodo from './AddTodo.jsx';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (<>
      <AddTodo state={state}
        add={text => dispatch({type: "add", text: text})}
      />
      {state.todos.map(t => (
        <TodoItem
        todoComplete={t.complete}
          key={t.id}
          todo={t}
          remove={() => dispatch({type: "remove", id: t.id, })}
          complete={() => dispatch({type: "complete", id: t.id, complete: t.complete})}
          edit={text => dispatch({type: "edit", id: t.id, text: text})}
        />
      ))}
    </>);
  }

export default TodoList;