import React, { useState } from 'react'
import Todos from './Todos';
import style from './home.module.css'
import NewTodo from './NewTodo';
import {v4 as uuid} from "uuid" ;
import UniqueId from './UniqueId';

const dummyTodos = [
  { 
    title:"def",
    desc:"fasfjat at 9 am",
    id: 1
  },
  { 
    title:"def",
    desc:"fasfjat at 9 am",
    id: 2
  }
] ; 


export default function Home() {
  const [todos , setTodos] = useState([]) 
  const handleAddTodo = (todo)=>{
  setTodos((preTodos)=>{
      return[...preTodos,{id : uuid(), todo}]
    })
  }
  const handleRemoveTodo=(id)=>{
    alert(id) 
       const filteredTodos = todos.filter((todo)=>todo.id !==id) ; 
       setTodos(filteredTodos) ; 
  }


  return (
    <div className={style.container}>
      <h1 style={{color:"white"}} >Todo App</h1>
      
      <NewTodo onAddTodo = {handleAddTodo} />
     <Todos todos ={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  ) ; 
}
