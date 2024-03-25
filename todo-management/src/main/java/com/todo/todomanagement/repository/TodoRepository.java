package com.todo.todomanagement.repository;

import com.todo.todomanagement.entity.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TodoRepository extends MongoRepository<Todo,String> {

}
