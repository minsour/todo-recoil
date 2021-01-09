import React, { useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import Todo from './Todo'
import { todoListState } from '../store/todo'

const List = styled.ul`
  width: 240px;
  padding: 0;
`;

const TodoList = () => {
  const todoList = useRecoilValue(todoListState)
  const renderTodos = useCallback(todo => <Todo key={todo.id} todo={todo} />, [])

  return (
    <List>
      {todoList.map(renderTodos)}
    </List>
  )
}

export default TodoList
