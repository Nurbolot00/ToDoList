import React, { useState } from 'react';
import styled from 'styled-components'
import Button from './UI/Button/Button';

const AddTodo = ({add,state}) => {
    const [text, setText] = useState("");
    const enabled = text.trim().length > 0 ;
    return (
      <div className="AddTodo">
        <AddInput value={text} onChange={e => setText(e.target.value)} className="AddTodoInput" />
        <Button disabled={!enabled} className="AddTodoButton" onClick={() => {add(text); setText("")}}>Add</Button>
        <AmountTodoText>The amount of Todos: {state.counter} </AmountTodoText>
      </div>
    );
  }

export default AddTodo;


const AddInput = styled.input`
      flex: 3;
      font: inherit;
      padding: 0.5rem 0.5rem;
      border-radius: 6px;
      border: 1px solid #ccc;
      min-width:300px;

      &:focus {
  outline: none;
  border-color: #4f005f;
  background: #f6dbfc;
      }
`

const AmountTodoText = styled.p`
    color: #92d61c;
    font-weight: 700;
    font-size: 22px;
`