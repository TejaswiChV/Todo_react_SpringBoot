package com.todo.todomanagement.mapper;

import com.todo.todomanagement.dto.TodoDto;
import com.todo.todomanagement.entity.Todo;

public  class TodoMapper {
     public static Todo toTodo(TodoDto todoDto){
         return(new Todo(todoDto.getId(),todoDto.getTitle(),todoDto.getDescription(),todoDto.getCompleted()));
     }
     public static TodoDto toTodoDto(Todo todo){
         return(new TodoDto(todo.getId(), todo.getTitle(),todo.getDescription(),todo.getCompleted()));
     }
}
