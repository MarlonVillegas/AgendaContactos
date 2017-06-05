<?php

interface IContacto {

    public function select();

    public function selectById($id);

    public function insert(Contacto $Contacto);

    public function update(Contacto $Contacto);

    public function delete($id);

    public function search($nombre);
}

