import { atom, atomFamily, selectorFamily } from 'recoil'
import { getFakeTodos } from '../api/todos'

const getTodo = (id) => ({
  id,
  title: '',
  description: ''
})

export const todoState = atomFamily({
  key: 'todoState',
  default: id => getTodo(id)
})

export const clickedTodoState = atom({
  key: 'clickedTodoState',
  default: null
})

export const todoListState = selectorFamily({
  key: 'todoListState',
  get: (queryParams) => async () => {
    return await getFakeTodos(queryParams)
  }
})