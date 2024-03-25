import './App.css'
import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import TodoComponent from './components/TodoComponent'

function App() {
  return (
    <BrowserRouter>  
    <HeaderComponent/>
    <Routes>
    <Route path="/" element={<ListTodoComponent />} />
    <Route path="/todos" element={<ListTodoComponent />} />
    <Route path="/addTodo" element={<TodoComponent />} />
    <Route path="/editTodo/:id" element={<TodoComponent />} />
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
  )
}

export default App
