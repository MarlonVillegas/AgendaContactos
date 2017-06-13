<?php

class myConfig extends config {
  
    private $dirUploads;
    
    public function getDirUploads() {
        return $this->dirUploads;
    }

    public function setDirUploads($dirUploads) {
        $this->dirUploads = $dirUploads;
    }
    
}