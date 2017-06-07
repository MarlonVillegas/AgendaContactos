<?php

class contactoDAO extends dataSource implements IContacto {

  public function delete($id, $logico = true) {
	if ($logico === true) {
	  $sql = 'UPDATE contacto SET con_deleted_at = now() WHERE con_id = :id';
	  $params = array(
		  ':id' => $id
	  );
	  return $this->execute($sql, $params);
	} else if ($logico === false) {
	  $sql = 'DELETE FROM contacto WHERE con_id = :id AND con_deleted_at IS NULL';
	  $params = array(
		  ':id' => (integer) $id
	  );
	  return $this->execute($sql, $params);
	}
  }

  public function insert(\contacto $contacto) {
	$sql = 'INSERT INTO contacto (con_foto, con_nombre, con_apellido,con_telefono,con_correo) VALUES (:foto, :nombre, :apellido,:telefono,:correo)';
	$params = array(
		':foto' => $contacto->getFoto(),
		':nombre' => $contacto->getNombre(),
		':apellido' => $contacto->getApellido(),
                ':telefono' => $contacto->getTelefono(),
                ':correo' => $contacto->getCorreo()
	);
	return $this->execute($sql, $params);
  }

  public function search($nombre) {
	$sql = 'SELECT con_id, con_foto, con_nombre, con_apellido,con_telefono,con_correo FROM contacto WHERE con_nombre = :nombre';
	$params = array(
		':nombre' => $nombre
	);
	return $this->query($sql, $params);
  }

  public function select() {
	$sql = 'SELECT con_id, con_foto, con_nombre, con_apellido,con_telefono,con_correo FROM contacto WHERE con_deleted_at IS NULL';
	return $this->query($sql);
  }

  public function selectById($id) {
	$sql = 'SELECT con_id, con_foto, con_nombre, con_apellido,con_telefono,con_correo FROM contacto WHERE con_id = :id';
	$params = array(
		':id' => $id
	);
	return $this->query($sql, $params);
  }

  public function update(\contacto $contacto) {
	$sql = 'UPDATE contacto SET con_foto = :foto, con_nombre = :nombre, con_apellido = :apellido, con_telefono = :telefono, con_correo =:correo WHERE con_id = :id';
	$params = array(
		':foto' => $contacto->getFoto(),
		':nombre' => $contacto->getNombre(),
		':apellido' => $contacto->getApellido(),
                ':telefono' => $contacto->getTelefono(),
                ':correo' => $contacto->getCorreo(),            
		':id' => $contacto->getId()
	);
	return $this->execute($sql, $params);
  }

}
