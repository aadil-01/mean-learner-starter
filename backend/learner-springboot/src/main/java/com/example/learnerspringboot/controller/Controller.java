package com.example.learnerspringboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.learnerspringboot.model.Task;
import com.example.learnerspringboot.repository.TaskRepository;

@RestController
public class Controller {

    private final TaskRepository repo;

    public Controller(TaskRepository repo){
        this.repo = repo;
    }

    @GetMapping(path = "/view")
    public List<Task> getAllData(){
        return repo.findAll();
    }

    @GetMapping(path = "/view/{id}")
    public Optional<Task> getData(@PathVariable String id){
        return repo.findById(id);
    }

    @PostMapping(path = "/insert")
    public Task insertData(@RequestBody Task data){
        return repo.insert(data);
    }

    @PatchMapping(path = "/update")
    public Task updateData(@RequestBody Task data){
        return repo.save(data);
    }

    @DeleteMapping(path = "/delete/{id}")
    public String deleteData(@PathVariable String id){
        try{
            repo.deleteById(id);
            return "Delete Success";
        }
        catch(Exception e){
            return e.getMessage();
        }
    }

}