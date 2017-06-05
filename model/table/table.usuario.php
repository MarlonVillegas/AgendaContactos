<?php

class usuario {

    private $id;
    private $cedula;
    private $alias;
    private $contrasena;
    private $rolid;
    
    function getId() {
        return $this->id;
    }

    function getCedula() {
        return $this->cedula;
    }

    function getAlias() {
        return $this->alias;
    }

    function getContrasena() {
        return $this->contrasena;
    }

    function getRolid() {
        return $this->rolid;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setCedula($cedula) {
        $this->cedula = $cedula;
    }

    function setAlias($alias) {
        $this->alias = $alias;
    }

    function setContrasena($contrasena, $hash) {
        $this->contrasena = hash($hash, $contrasena, false);
    }

    function setRolid($rolid) {
        $this->rolid = $rolid;
    }





}
