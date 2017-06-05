<?php

class usuarioDAO extends dataSource implements IUsuario {

  public function delete($id, $logico = true) {
	if ($logico === true) {
	  $sql = 'UPDATE usuario SET usu_deleted_at = now() WHERE usu_id = :id';
	  $params = array(
		  ':id' => $id
	  );
	  return $this->execute($sql, $params);
	} else if ($logico === false) {
	  $sql = 'DELETE FROM usuario WHERE usu_id = :id AND usu_deleted_at IS NULL';
	  $params = array(
		  ':id' => (integer) $id
	  );
	  return $this->execute($sql, $params);
	}
  }

  public function insert(\usuario $usuario) {
	$sql = 'INSERT INTO usuario (usu_cedula, usu_alias, usu_contrasena, rol_id) VALUES (:cedula, :alias, :contrasena, :rolId)';
	$params = array(
		':alias' => $usuario->getAlias(),
		':cedula' => $usuario->getCedula(),
		':contrasena' => $usuario->getContrasena(),
		':rolId' => $usuario->getRolId(),
	);
	return $this->execute($sql, $params);
  }

  public function search($alias, $contrasena) {
	$sql = 'SELECT usu_cedula, usu_alias, usu_contrasena, rol_id FROM usuario WHERE usu_alias = :alias AND usu_contrasena = :contrasena';
	$params = array(
		':alias' => $alias,
		':contrasena' => $contrasena
	);
	return $this->query($sql, $params);
  }

  public function select() {
	$sql = 'SELECT usu_id, usu_cedula, usu_alias, usu_contrasena, rol_id, usu_created_at FROM usuario WHERE usu_deleted_at IS NULL';
	return $this->query($sql);
  }

  public function selectById($id) {
	$sql = 'SELECT usu_cedula, usu_alias, usu_contrasena, rol_id FROM usuario WHERE usu_id = :id';
	$params = array(
		':id' => $id
	);
	return $this->query($sql, $params);
  }

  public function update(\usuario $usuario) {
	$sql = 'UPDATE usuario SET usu_cedula = :cedula, usu_alias = :alias, usu_contrasena = :contrasena, rol_id = :rol WHERE usu_id = :id';
	$params = array(
		':alias' => $usuario->getAlias(),
		':cedula' => $usuario->getCedula(),
		':contrasena' => $usuario->getContrasena($this->getConfig()->getHash()),
		':rol' => $usuario->getRolid(),
		':id' => $usuario->getId()
	);
	return $this->execute($sql, $params);
  }

}
