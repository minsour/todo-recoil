import React, { Suspense, useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import Todo from './Todo'
import { todoListState } from '../store/todo'

const List = styled.ul`
  width: 240px;
  padding: 0;
`;

const AsyncTodoList = () => {
  const todoList = useRecoilValue(todoListState({ page: 0, size: 5 }))
  const renderTodos = useCallback(todo => <Todo key={todo.id} todo={todo} />, [])
  
  return (
    <List>
      {todoList.map(renderTodos)}
    </List>
  )
}

const TodoList = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AsyncTodoList />
    </Suspense>
  )
}

export default TodoList
