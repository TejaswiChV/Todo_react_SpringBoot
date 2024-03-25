import axios from 'axios';
const BASE_URL = 'http://localhost:8080';
export const getAllTodos = ()=> {
    return  axios.get(`${BASE_URL}/api/todo`).then(response => response.data).catch(e=>console.log(e))
}
export const saveTodoItem = (todo)=>{
    return axios.post(`${BASE_URL}/api/todo`,todo).then(response => response.data).catch(e=>console.log(e))
}
export const getTodoItem =(id)=>{
    return axios.get(`${BASE_URL}/api/todo/${id}`).then(response => response.data).catch(e=>console.log(e))
}
export const deleteTodo =(id)=>{
    return axios.delete(`${BASE_URL}/api/todo/${id}`).then(response => response.data).catch(e=>console.log(error));
}