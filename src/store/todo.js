import { atom } from 'recoil'

export const clickedTodoState = atom({
  key: 'clickedTodoState',
  default: null
})


export const todoListState = atom({
  key: 'todoListState',
  default: [{
    id: 1,
    title: '1번 할일',
    description: '내용1'
  }, {
    id: 2,
    title: '2번 할일',
    description: '내용2'
  }, {
    id: 3,
    title: '3번 할일',
    description: '내용3'
  }, {
    id: 4,
    title: '4번 할일',
    description: '내용4'
  }, {
    id: 5,
    title: '5번 할일',
    description: '내용5'
  }, {
    id: 6,
    title: '6번 할일',
    description: '내용6'
  }, {
    id: 7,
    title: '7번 할일',
    description: '내용7'
  }, {
    id: 8,
    title: '8번 할일',
    description: '내용8'
  }, {
    id: 9,
    title: '9번 할일',
    description: '내용9'
  }, {
    id: 10,
    title: '10번 할일',
    description: '내용10'
  }]
})