<?php

class rolDAO extends dataSource implements IRol {

  public function delete($id) {
	$sql = 'DELETE FROM rol WHERE rol_id = :id';
	$params = array(
		':id' => $id
	);
	return $this->execute($sql, $params);
  }

  public function insert(\rol $rol) {
	$sql = 'INSERT INTO rol (rol_id, rol_nombre) VALUES (:id, :nombre)';
	$params = array(
		':id' => $rol->getId(),
		':nombre' => $rol->getNombre()
	);
	return $this->execute($sql, $params);
  }

  public function search($id) {
	$sql = 'SELECT rol_id, rol_nombre FROM rol WHERE rol_id = :id';
	$params = array(
		':id' => $id
	);
	return $this->query($sql, $params);
  }

  public function select() {
	$sql = 'SELECT rol_id, rol_nombre FROM rol';
	return $this->query($sql);
  }

  public function selectById($id) {
	$sql = 'SELECT rol_id, rol_nombre FROM rol WHERE ro_id = :id';
	$params = array(
		':id' => $id
	);
	return $this->query($sql, $params);
  }

  public function update(\rol $rol) {
	$sql = 'UPDATE rol SET rol_nombre = :nombre WHERE rol_id = :id';
	$params = array(
		':nombre' => $rol->getNombre(),
		':id' => $rol->getId()
	);
	$this->execute($sql, $params);
  }

}
