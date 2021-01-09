import React, { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { clickedTodoState } from '../store/todo'
import styled from 'styled-components'

const Item = styled.li`
  display: flex;
  width: 100%;
  margin: 10px 0;
  padding: 0 10px 0 5px;
  align-items: center;
  border: 1px solid #d1d1d1;
  height: 43px;
  border-radius: 4px;
  cursor: pointer;
`;

const Todo = ({ todo }) => {
  const setClickedTodo = useSetRecoilState(clickedTodoState)

  const handleClickTodo = useCallback(() => {
    setClickedTodo(todo)
  }, [todo, setClickedTodo])

  return (
    <Item onClick={handleClickTodo}>
      {todo && todo.title}
    </Item>
  )
}

export default Todo
