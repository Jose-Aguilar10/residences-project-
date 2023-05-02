<?php 
    require_once("../../config/conexion.php");/*Se manda a llamar a la cadena de conexion */
    session_destroy();/*Se destruye la seccion de usurio*/
    header("Location:".Conectar::ruta().".");/*Se manda a llamar a la ruta php para despues redirijir nuevamente a el login*/
    exit(); 
?>