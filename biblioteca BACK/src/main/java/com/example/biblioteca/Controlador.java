package com.example.biblioteca;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//dar acceso, desde donde se pueden conectar
@CrossOrigin(origins = "*")
@RestController
@RequestMapping({"/api"})
public class Controlador {
    
    @Autowired
    private LibroService service;
    
    //listar    
    @GetMapping("/libros")
    public List<Libro>listar(){
        return service.findAll();
    }
}
