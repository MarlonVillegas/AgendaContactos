<?php

class contactoDAOExt extends contactoDAO {
    
  public function buscar($nombre) {
	$sql = 'SELECT con_id, con_foto, con_nombre, con_apellido,con_telefono,con_correo FROM contacto WHERE con_nombre LIKE :nombre';
	$params = array(
		':nombre' => '%' .$nombre,
		':nombre' => $nombre.'%',
		':nombre' => '%' .$nombre.'%',
	);
	return $this->query($sql, $params);
  }
}
