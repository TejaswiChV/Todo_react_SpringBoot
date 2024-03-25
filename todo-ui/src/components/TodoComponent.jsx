import React, { useState , useEffect } from 'react'
import { useNavigate , useParams } from 'react-router-dom';
import { saveTodoItem, getTodoItem } from '../api/todo';
const TodoComponent = () => {
    const [ title , setTitle ] = useState();
    const [ description , setDescription ] = useState();
    const [ completed , setCompleted ] = useState();
    const navigator = useNavigate();
    const { id } = useParams()
    useEffect(()=>{
        getTodoItemValues()
    },[])
    async function getTodoItemValues(){
        if(id){
            let todo = await getTodoItem(id);
            setTitle(todo.title)
            setDescription(todo.description)
            setCompleted(todo.completed)     
            }
    }
    async function saveTodo(e){
        e.preventDefault();
        let isComplete = completed == "Yes" ? true : false
        const todoUpdateItem = {
            id: id ? id : '',
            title  : title,
            description : description,
            completed : isComplete
        }
        const todoItem = {
            title  : title,
            description : description,
            completed : isComplete
        }
        if(id){
            let response = await saveTodoItem(todoUpdateItem);
        }
        else{
        let response = await saveTodoItem(todoItem);
        if(response){
            navigator('/todos')
            }
        }
        console.log('todo item is',todoItem);
    }
  return (
    <div>
        <h1 className="mb-3">
            Add Todo Item
        </h1>
        <form>
  <div className="form-group mb-3">{ title}
    <input type="text" className="form-control" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Title" />
  </div>
  <div className="form-group mb-3">
    <input type="text" className="form-control" id="exampleInputEmail1" value={description} placeholder="Description" onChange={(e)=> setDescription(e.target.value)}/>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="exampleInputEmail1">Todo Completed </label> 
    <input type="radio" id="html" name="fav_language" value="Yes" onChange={ (e)=> { setCompleted(e.target.value)}} />Yes
    <input type="radio" id="html" name="fav_language" value="No" onChange={ (e)=> { setCompleted(e.target.value)}} />No
  </div>
  <button type="submit" className="btn btn-success" onClick={saveTodo}>Submit</button>
</form>
    </div>
  )
}

export default TodoComponent