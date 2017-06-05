<?php

class contacto {

    private $id;
    private $foto;
    private $nombre;
    private $apellido;
    private $telefono;
    private $correo;
    private $created_at;
    private $updated_at;
    private $deleted_at;
    
    function getId() {
        return $this->id;
    }

    function getFoto() {
        return $this->foto;
    }

    function getNombre() {
        return $this->nombre;
    }

    function getApellido() {
        return $this->apellido;
    }

    function getTelefono() {
        return $this->telefono;
    }

    function getCorreo() {
        return $this->correo;
    }

    function getCreated_at() {
        return $this->created_at;
    }

    function getUpdated_at() {
        return $this->updated_at;
    }

    function getDeleted_at() {
        return $this->deleted_at;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setFoto($foto) {
        $this->foto = $foto;
    }

    function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    function setApellido($apellido) {
        $this->apellido = $apellido;
    }

    function setTelefono($telefono) {
        $this->telefono = $telefono;
    }

    function setCorreo($correo) {
        $this->correo = $correo;
    }

    function setCreated_at($created_at) {
        $this->created_at = $created_at;
    }

    function setUpdated_at($updated_at) {
        $this->updated_at = $updated_at;
    }

    function setDeleted_at($deleted_at) {
        $this->deleted_at = $deleted_at;
    }


    
    
    
}