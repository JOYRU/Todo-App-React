import React from 'react'
import style from './todo.module.css'

const Todo= (props) =>{
     const{title , des , id } = props.todo
 
  return (
    <article className={style.todo}>
        <div >
            <h3>{title}</h3>
            <p>{des}</p>
            <p>{id}</p>

          
        </div>
        <div>
          <button className={style.btn}>
          <i className="fa fa-trash fa-2x">kl</i>
          </button>
          
        </div>
    </article>
  )
}

export default Todo