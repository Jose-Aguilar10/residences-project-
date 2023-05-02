<!-- conexion de las categorias de en la base de datos-->
<?php
    require_once("../config/conexion.php");
    require_once("../models/Categoria.php");
    $categoria = new Categoria();

    switch($_GET["op"]){
        case "combo":
            $datos = $categoria->get_categoria();
            if(is_array($datos)==true and count($datos)>0){
                foreach($datos as $row) /*Extrae los datos de las categorias desde la base de datos*/ 
                {
                    $html.= "<option value='".$row['cat_id']."'>".$row['cat_nom']."</option>";
                }
                echo $html;
            }
        break;
    }
?>