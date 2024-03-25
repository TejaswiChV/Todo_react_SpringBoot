import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import  { getAllTodos , deleteTodo, getTodoItem }  from "../api/todo";

const ListTodoComponent = () => {
    const navigator = useNavigate();
    function addTodo(){
        navigator('/addTodo')
    }
    async function getTodos() {
        let response =  await getAllTodos()
        setTodo(response)      
    }
    function updateTodoItem(id){
        navigator(`/editTodo/${id}`);
    }
    async function deleteTodoItem(id){
        await deleteTodo(id)
        getTodos()
    }
    useEffect(()=>{
        getTodos();
    },[])
    const [todo, setTodo] = useState([])
    return (
        <div className="container">
            <button type="button" className="btn btn-primary mb-2" onClick={addTodo}>Add Todo</button>
            <h2>List of Todos</h2>
            <table className="table table-border table-striped">
                <thead>
                    <tr>
                        <th>Todo Id</th>
                        <th>Todo Title</th>
                        <th>Todo description</th>
                        <th>Todo is Completed</th>
                        <th>Update Item</th>
                        <th>Delete Item</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map(todoItem =>{
                            return (
                            <tr key={todoItem.id}>
                                <td>{ todoItem.id}</td>
                                <td>{ todoItem.title}</td>
                                <td>{ todoItem.description}</td>
                                <td>{ todoItem.completed ? 'Yes' : 'No'}</td>
                                <td>
                                <button type="button" className="btn btn-primary" onClick={()=>{updateTodoItem(todoItem.id)}}>Update</button>
                                </td>
                                <td>
                                <button type="button" className="btn btn-danger" onClick={()=>{deleteTodoItem(todoItem.id)}}>Delete</button>
                                </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListTodoComponent