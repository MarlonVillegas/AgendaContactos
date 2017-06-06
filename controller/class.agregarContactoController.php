<?php

class agregarContacto extends controllerExtended {

  public function main(\request $request) {
    try {
      $this->loadTablecontacto();

      $contacto = new contacto();
      $contacto->setFoto($request->getParam('foto'));
      $contacto->setNombre($request->getParam('nombre'));
      $contacto->setApellido($request->getParam('apellido'));
      $contacto->setTelefono($request->getParam('telefono'));
      $contacto->setCorreo($request->getParam('correo'));

      $contactoDAO = new contactoDAOExt($this->getConfig());
      $respuesta1 = $contactoDAO->insert($contacto);
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

