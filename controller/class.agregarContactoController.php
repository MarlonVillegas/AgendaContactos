<?php

class agregarContacto extends controllerExtended {

    public function main(\request $request) {
        try {
            $this->loadTablecontacto();
            $foto = $request->getFile('foto');
            $ext = '';
            switch ($foto['type']) {
                case 'image/jpeg':
                    $ext = '.jpg';
                    break;
                case 'image/gif':
                    $ext = '.gif';
                    break;
                case 'image/png':
                    $ext = '.png';
                    break;
            }
            $nameFile = hash('crc32b', $foto['name'] . date('d-m-Y H:i:s:u')) . $ext;
            $dirFile = $this->getConfig()->getDirUploads() . $nameFile;
            if (move_uploaded_file($foto['tmp_name'], $dirFile)) {

                $contacto = new contacto();
                $contacto->setFoto($nameFile);
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

            } else {
                $respuesta2 = array(
                    'code' => 500,
                    'datos' => 'No se pudo guardar la imagen'
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
