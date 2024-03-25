package com.todo.todomanagement.service;

import com.todo.todomanagement.dto.TodoDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TodoService {
    public TodoDto addTodo(TodoDto todoDto);
    public List<TodoDto> getAllTodo();
    public TodoDto getTodo(String id);
    String deleteTodo(String id);
    TodoDto completedTodo(String id);
    TodoDto inCompletedTodo(String id);

}
