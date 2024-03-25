package com.todo.todomanagement.entity;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="todo")
public class Todo {
    @Id
    @Generated
    private String id;
    private String title;
    private String description;
    private Boolean completed;
}
