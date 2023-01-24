
import styled from 'styled-components';
import './App.css';
import TodoList from './components/TodoList';
import { TodoProvider } from './store/TodoContext';


function App() {

  
  return (
    <div className="App">
      <TodoProvider>
      <MainTitle>Todo App</MainTitle>
     <TodoList/>
     </TodoProvider>
    </div>
  );
}

export default App;


const MainTitle = styled.h1`
color: white;
`
