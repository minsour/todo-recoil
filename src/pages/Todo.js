import React from 'react'
import TodoEditing from '../components/TodoEditing'
import TodoList from '../components/TodoList'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  padding: 30px 50px;
`;

const TodoPage = () => (
  <Layout>
    <TodoList />
    <TodoEditing />
  </Layout>
)

export default TodoPage
