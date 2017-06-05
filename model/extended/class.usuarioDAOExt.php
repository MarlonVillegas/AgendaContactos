<?php

class usuarioDAOExt extends usuarioDAO {

  public function buscar($usuario, $contrasena) {
    $sql = 'SELECT usu_id, usu_cedula, usu_alias, usu_contrasena, rol_id FROM usuario WHERE usu_alias = :alias AND usu_contrasena = :password';
    $params = array(
        ':alias' => $usuario,
        ':password' => $contrasena,
    );
    
    return $this->query($sql, $params);
  }

}
