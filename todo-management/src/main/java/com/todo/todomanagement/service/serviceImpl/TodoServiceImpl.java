package com.todo.todomanagement.service.serviceImpl;

import com.todo.todomanagement.dto.TodoDto;
import com.todo.todomanagement.entity.Todo;
import com.todo.todomanagement.exception.ResourceNotFoundException;
import com.todo.todomanagement.mapper.TodoMapper;
import com.todo.todomanagement.repository.TodoRepository;
import com.todo.todomanagement.service.TodoService;
import jakarta.annotation.Resource;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TodoServiceImpl implements TodoService {
    @Resource
    public TodoRepository todoRepository;
    @Override
    public TodoDto addTodo(TodoDto todoDto) {
        Todo todo = TodoMapper.toTodo(todoDto);
        todoRepository.save(todo);
        TodoDto savedTodo = TodoMapper.toTodoDto(todo);
        return savedTodo;
    }

    @Override
    public List<TodoDto> getAllTodo() {
        List<Todo> todoList = todoRepository.findAll();
        List<TodoDto> todoListDto = todoList.stream().map((todo)->TodoMapper.toTodoDto(todo)).collect(Collectors.toList());
        return todoListDto;
    }

    @Override
    public TodoDto getTodo(String id) {
        Todo todo = todoRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("id doesn't exists"));
        return TodoMapper.toTodoDto(todo);
    }

    @Override
    public String deleteTodo(String id) {
        String databaseId = todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("id doesn't exist")).getId();
        if(id.equalsIgnoreCase(databaseId)) {
            todoRepository.deleteById(id);
            return id + " is deleted";
        }
        return "not found";
    }

    @Override
    public TodoDto completedTodo(String id) {
        Todo todo = todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("id not exists"));
        todo.setCompleted(Boolean.TRUE);
        todoRepository.save(todo);
        return TodoMapper.toTodoDto(todo);
    }

    @Override
    public TodoDto inCompletedTodo(String id) {
        Todo todo = todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("id not exists"));
        todo.setCompleted(Boolean.FALSE);
        todoRepository.save(todo);
        return TodoMapper.toTodoDto(todo);
    }
}
