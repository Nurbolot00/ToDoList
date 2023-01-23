import React from 'react';
import styled from 'styled-components';

const Button = ({onClick, className,color,children ,disabled , lineThrough}) => {
    return (
        <MyButton disabled={disabled} style={{background: `${color}`, textDecoration: `${lineThrough}`}} className={className} onClick={onClick}>{children}</MyButton>
    );
};

export default Button;



const MyButton = styled.button`
     font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #00329e;
    background: #00329e;
    color: white;
    border-radius: 6px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    margin: 0 0.5rem;
    outline: none;
  
  &:hover,
  &:active {
    background: #f67722;
    border-color: #f67722;
  }

  &:disabled{
    background-color: gray;
    opacity: 70%;
  }
`