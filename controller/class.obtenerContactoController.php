<?php

class obtenerContacto extends controllerExtended {

  public function main(\request $request) {
    try {
      $this->loadTablecontacto();

      $contactoDAO = new contactoDAOExt($this->getConfig());
      $respuesta1 = $contactoDAO->select();
      $respuesta2 = array(
          'code' => ($respuesta1 > 0) ? 200 : 500,
          'datos' => $respuesta1
      );

      $this->setParam('rsp', $respuesta2);
      $this->setView('imprimirJson');
    } catch (Exception $exc) {
      echo $exc->getMessage();
    }
  }

  private function loadTablecontacto() {
    require $this->getConfig()->getPath() . 'model/table/table.contacto.php';
    require $this->getConfig()->getPath() . 'model/interface/interface.contacto.php';
    require $this->getConfig()->getPath() . 'model/DAO/class.contactoDAO.php';
    require $this->getConfig()->getPath() . 'model/extended/class.contactoDAOExt.php';
  }

}

