package com.example.biblioteca;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class LibroServiceImp implements LibroService {
    
    @Autowired
    private LibroRepositorio repositorio;

    @Override
    @Transactional(readOnly=true)
    public List<Libro> findAll() {
        return (List<Libro>) repositorio.findAll();
    }
}
