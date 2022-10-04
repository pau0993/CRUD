package com.example.biblioteca;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "libros")


public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_libro;
    @Column (name = "titulo")
    private String titulo;
    @Column (name = "autor")
    private String autor;
    @Column (name = "editorial")
    private String editorial;
    
    
    public int getId_libro() {
        return id_libro;
    }
    public void setId_libro(int id_libro) {
        this.id_libro = id_libro;
    }

    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }
    public void setAutor() {
        this.autor = autor;
    }

    public String getEditorial() {
        return editorial;
    }
    public void setEditorial(String editorial) {
        this.editorial = editorial;
    }
}
