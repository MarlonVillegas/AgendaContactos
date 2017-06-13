<?php

class editarContacto extends controllerExtended {

    public function main(\request $request) {
        try {
            $this->loadTablecontacto();

            $contacto = new contacto();
            $contacto->setNombre($request->getParam('nombre'));
            $contacto->setApellido($request->getParam('apellido'));
            $contacto->setTelefono($request->getParam('telefono'));
            $contacto->setCorreo($request->getParam('correo'));
            $contacto->setId($request->getParam('id'));

            $flag = false;
            if ($request->hasFile('foto')) {
                $foto = $request->getFile('foto');
                $dirFile = $this->getConfig()->getDirUploads() . $request->getParam('fotoNombre');
                move_uploaded_file($foto['tmp_name'], $dirFile);
                $contacto->setFoto($request->getParam('fotoNombre'));
                $flag = true;
            } else {
                $contacto->setFoto($request->getParam('foto'));
                $flag = true;
            }

            if ($flag === true) {
                $contactoDAO = new contactoDAOExt($this->getConfig());
                $respuesta1 = $contactoDAO->update($contacto);
                $respuesta2 = array(
                    'code' => ($respuesta1 > 0) ? 200 : 500,
                    'datos' => $respuesta1
                );
            } else {
                $respuesta2 = array(
                    'code' => 500,
                    'datos' => 'La imagen no pudo ser guardada'
                );
            }

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
