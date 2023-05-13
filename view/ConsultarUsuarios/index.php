<?php
  require_once("../../config/conexion.php"); 
  if(isset($_SESSION["usu_id"])){ 
?>
<!DOCTYPE html>
<html>
    <?php require_once("../MainHead/head.php");?>
	<title>Consultar Usuario</title>
</head>
<body class="with-side-menu">

    <?php require_once("../MainHeader/header.php");?>

    <div class="mobile-menu-left-overlay"></div>
    
    <?php require_once("../MainNav/nav.php");?>

	<!-- Contenido -->
	<div class="page-content">
		<div class="container-fluid">
			<header class="section-header">
				<div class="tbl">
					<div class="tbl-row">
						<div class="tbl-cell">
							<h3>Consultar Usuario</h3>
							<ol class="breadcrumb breadcrumb-simple">
								<li><a href="#">Home</a></li>
								<li class="active">Consultar Usuario</li>
							</ol>
						</div>
					</div>
				</div>
			</header>

			<div class="box-typical box-typical-padding">
				
				<table id="usuario_data" class="table table-bordered table-striped table-vcenter js-dataTable-full">
					<thead>
						<tr>
                        <th style="width: 10%;">ID</th>
							<th style="width: 10%;">Nombre</th>
							<th style="width: 10%;">Apellido</th>
							<th class="d-none d-sm-table-cell" style="width: 40%;">Correo</th>
							<th class="d-none d-sm-table-cell" style="width: 5%;">Rol</th>
							
						</tr>
					</thead>
					<tbody>

					</tbody>
				</table>
			</div>

		</div>
	</div>
	<!-- Contenido -->

	

	<?php require_once("../MainJs/js.php");?>
	
	<script type="text/javascript" src="ConsultarUsuarios.js"></script>

</body>
</html>
<?php
  } else {
    header("Location:".Conectar::ruta()."index.php");
  }
?>