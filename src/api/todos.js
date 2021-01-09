import { todos } from './dummy'

export const getFakeTodos = ({ page = 0, size = 5 }) => {
  const startIndex = page * size
  const paginationList = todos.slice(startIndex, startIndex + size)

  return new Promise((resolve) => {
    setTimeout(() => resolve(paginationList), 2000)
  })
}
