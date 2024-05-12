import React from 'react'

const Todo= (props) =>{
     const{title , des , id } = props.todo
 
  return (
    <article>
        <div>
            <h3>{title}</h3>
            <p>{des}</p>
            <p>{id}</p>

          
        </div>
    </article>
  )
}

export default Todo