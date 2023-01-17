package com.example.learnerspringboot.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.learnerspringboot.model.Task;

public interface TaskRepository extends MongoRepository<Task,String> {
    
}
