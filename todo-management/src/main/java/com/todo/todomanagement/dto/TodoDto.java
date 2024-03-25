package com.todo.todomanagement.dto;

import lombok.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoDto {
    private String Id;
    private String title;
    private String description;
    private Boolean completed;
}
