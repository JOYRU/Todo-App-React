import React, { useState } from 'react'
import Todos from './Todos';
import style from './home.module.css'
import NewTodo from './NewTodo';
import {v4 as uuidv4} from 'uuid' ;




export default function Home() {
  const [todos , setTodos] = useState([]) ; 
  const handleAddTodo = (todo)=>{
    setTodos((preTodos)=>{
      return[...preTodos,{id: uuidv4() , todo}]
    })
    console.log(todos) ;
  }
  return (
    <div className={style.container}>
      <h1 style={{color:"white"}} >Todo App</h1>
      <NewTodo onAddTodo = {handleAddTodo} />
     <Todos todos ={todos} />
    </div>
  ) ; 
}
