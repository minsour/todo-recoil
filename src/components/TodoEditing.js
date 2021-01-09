import React, { useState, useCallback, useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { clickedTodoState, todoState } from '../store/todo'
import styled from 'styled-components'

const EditingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 230px;
  background-color: aliceblue;
  margin: 30px 80px;
  padding: 30px 40px 45px 40px;
`;

const InputWrapper = styled.p`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

const Input = styled.input`
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  padding: 8px 12px;
  font: inherit;
`;

const Textarea = styled.textarea`
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  padding: 8px 12px;
  font: inherit;
`;

const EditButton = styled.button`
  background-color: #aad34a;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-top: 9px;
  cursor: pointer;
`;

const TodoEditing = () => {
  const clickedTodo = useRecoilValue(clickedTodoState)
  const [todo, setTodo] = useRecoilState(todoState(clickedTodo ? clickedTodo.id : null))
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
  useEffect(() => {
    if (!todo) {
      return
    }
    setTitle(todo.title)
    setDescription(todo.description)
  }, [todo])

  const handleTitleChange = useCallback(event => (
    setTitle(event.target.value)
  ), [])

  const handleDescriptionChange = useCallback(event => (
    setDescription(event.target.value)
  ), [])

  const handleEditTodo = useCallback(() => {
    setTodo(prevTodo => ({
      ...prevTodo,
      title,
      description
    }))
  }, [title, description, setTodo])

  if (!clickedTodo) {
    return null
  }

  return (
    <EditingWrapper>
      <InputWrapper>
        <label>Title</label>
        <Input
          type="text"
          value={title}
          placeholder="Title..."
          onChange={handleTitleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <label>Description</label>
        <Textarea
          type="text"
          value={description}
          placeholder="Description..."
          onChange={handleDescriptionChange}
          rows="3"
        />
      </InputWrapper>
      <EditButton onClick={handleEditTodo}>
        Edit
      </EditButton>
    </EditingWrapper>
  )
}

export default TodoEditing
