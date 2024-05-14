import React from 'react'
import Todo from './Todo';
import style from './todos.module.css'


// const Todos = (props) =>{
//     // console.log(props.todos)
    
//   return (
//     <section>
//         {
//             props.todos.map(
//                 (todo) =>{
//                    <Todo todo={todo}  /> 
//                 }
//             )
//         }
//     </section>
//   )
// }
// export default Todos

export default function Todos(props) {
    // console.log(props.todos)
    return (
     <section >
       <div className={style.todos} >

       
        

      {  props.todos.map(
                 (todo) =>    
                  <Todo todo={todo.todo} key={todo.id} /> 
                 
            )
      }
      </div>
     </section>
    ) ; 
  }
  