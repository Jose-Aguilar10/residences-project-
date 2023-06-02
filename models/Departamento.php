<?php
    class Departamento extends Conectar{

    public function get_departamento(){
            $conectar= parent::conexion(); /* se manda a llamar a la clase conectar de la cadena de conexion */
            parent::set_names();
            $sql="SELECT * FROM tm_departamento WHERE est=1;"; /* se manda a llamar a la cadena sql*/
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchAll();
    }       
}
?>