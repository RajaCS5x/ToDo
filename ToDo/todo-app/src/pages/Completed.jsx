/* eslint-disable react/prop-types */

import styles from "../Components/Todo.module.css";
// import todo from "../Components/todos";

function Completed({todos}) {
  return (

    <div style={{margin:"1rem"}}>
    <h1 style={{textAlign:"center"}}>Completed Tasks : </h1>
    
    {todos.map((todo) => 
       {
        if(todo.completed)
        {
        return(
          <>  
       <div className={styles.todo}> 
       <h3>{todo.title}</h3>
    </div>
    </>
        )
        }
        else{
          return(
            <>
        
            </>
          )
        }
       })}
    </div>
  )
}

export default Completed;