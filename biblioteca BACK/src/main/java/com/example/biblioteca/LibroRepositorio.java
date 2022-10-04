package com.example.biblioteca;

import org.springframework.data.repository.CrudRepository;


public interface LibroRepositorio  extends CrudRepository<Libro, Integer> {
}