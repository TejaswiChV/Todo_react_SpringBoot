package com.todo.todomanagement.controller;

import com.todo.todomanagement.dto.TodoDto;
import com.todo.todomanagement.service.TodoService;
import jakarta.annotation.Resource;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/todo")
@NoArgsConstructor
@AllArgsConstructor
@CrossOrigin("*")
public class TodoController {
    @Resource
    public TodoService todoService;
    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto){
        TodoDto savedTodo = todoService.addTodo(todoDto);
        return new ResponseEntity<TodoDto>(savedTodo,HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<TodoDto>> getAllTodos(){
        List<TodoDto> todoList = todoService.getAllTodo();
        return ResponseEntity.ok(todoList);
    }
    @GetMapping("{id}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable("id") String todoId){
        return ResponseEntity.ok(todoService.getTodo(todoId));
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable("id") String todoId){
        return ResponseEntity.ok(todoService.deleteTodo(todoId));
    }
    @PutMapping("{id}")
    public ResponseEntity<TodoDto> completeTodo(@PathVariable("id") String todoId){
        return ResponseEntity.ok(todoService.completedTodo(todoId));
    }
    @PutMapping("incomplete/{id}")
    public ResponseEntity<TodoDto> inCompleteTodo(@PathVariable("id") String todoId){
        return ResponseEntity.ok(todoService.inCompletedTodo(todoId));
    }
}
