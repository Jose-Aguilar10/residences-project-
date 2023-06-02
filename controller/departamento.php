<?php
    require_once("../config/conexion.php");
    require_once("../models/Departamento.php");
    $departamento = new Departamento();

    switch($_GET["op"]){


            case "combo":
                $datos = $departamento->get_departamento();
                $html="";
                $html.="<option label='Seleccionar'></option>";
                if(is_array($datos)==true and count($datos)>0){
                    foreach($datos as $row)
                    {
                        $html.= "<option value='".$row['dep_id']."'>".$row['dep_nom']."</option>";
                    }
                    echo $html;
                }
            break;

       
    }
?>