import React from 'react'
import Todos from './Todos';

const dummyTodos = [
  {
    id:1,
    title:"todo 1",
    des:"todo what you do today"
  },
  {
    id:2,
    title:"todo 2",
    des:"todo what you do tommorow"
  }
]



export default function Home() {
  return (
    <div>
     <Todos todos={dummyTodos}/>
    </div>
  ) ; 
}
