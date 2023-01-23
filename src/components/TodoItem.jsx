import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './UI/Button/Button';

const TodoItem = ({ todo, remove, edit , complete,todoComplete }) => {
    const [mode, setMode] = useState("list");
    const [text, setText] = useState(todo.text);
    const enabled = text.trim().length > 0 ;
    return (
      <TodoItemContainer className="Todo">

        {mode === "list"
          ? <>
           {todoComplete ? <TodoText style={{textDecoration: 'line-through'}} className="TodoText">{todo.text}</TodoText> : <TodoText className="TodoText">{todo.text}</TodoText> }
            {todoComplete ?  <Button className="CompleteTodo"  color='blue' onClick={complete}>UnComplete</Button> :  <Button className="CompleteTodo" color='green' onClick={complete}>Complete</Button> }
            {/* <Button className="CompleteTodo" color='green' onClick={complete}>Complete</Button> */}
            <Button className="EditTodo" color='#d6631c'  onClick={() => setMode("edit")}>Edit</Button>
            <Button className="RemoveTodo" color='red' onClick={remove}>Remove</Button>
          </>
          : <>
            <EditInput value={text} onChange={e => setText(e.target.value)} className="EditTodoInput" />
            <Button className="EditTodoSave" color='#00329e' disabled={!enabled} onClick={() => {edit(text); setMode("list");}}>Save</Button>
            <Button className="EditTodoCancel" color='red' onClick={() => setMode("list")}>Cancel</Button>
          </>}
      </TodoItemContainer>
    );
  }

export default TodoItem;


const TodoText = styled.p`
    font-size: 22px;
    font-weight: 700;
    width: 90%;

`

const EditInput = styled.input`
      flex: 3;
      font: inherit;
      padding: 0.35rem 0.35rem;
      border-radius: 6px;
      border: 1px solid #ccc;

      &:focus {
  outline: none;
  border-color: #4f005f;
  background: #f6dbfc;
      }
`

const TodoItemContainer = styled.div`
    border: 2px solid;
    border-radius: 12px;
    width: 500px;
    margin: 0 auto;
    margin-top: 2rem;
    padding: 10px;
    background-color: white;
`