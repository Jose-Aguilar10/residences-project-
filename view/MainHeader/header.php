<header class="site-header"><!--e-->
    <div class="container-fluid">

        <a href="#" class="site-logo">
            <img class="hidden-md-down" src="../../public/img/imatitu.png" alt="">
            <img class="hidden-lg-up" src="../../public/img/IMATITU2.png" alt="">
        </a>

        <button id="show-hide-sidebar-toggle" class="show-hide-sidebar">
            <span>toggle menu</span>
        </button>

        <button class="hamburger hamburger--htla">
            <span>toggle menu</span>
        </button>

        <div class="site-header-content">
        <a href="#" class="header-alarm dropdown-toggle" id="dd-notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="float: right;">
        <i class="font-icon-alarm"></i>
        </a>


        <div class="dropdown-menu dropdown-menu-right dropdown-menu-notif" aria-labelledby="dd-notification">
  <div class="dropdown-menu-notif-header">
    Notificaciones
  </div>
  <div class="dropdown-menu-notif-list" id="notificaciones-lista">
    <!-- Aquí se mostrarán las notificaciones -->
   

  
  </div>
  <div class="dropdown-menu-notif-more">
    <a href="#">Ver más</a>
  </div>
</div>


            <div class="site-header-content-in">
                <div class="site-header-shown">
                    <div class="dropdown user-menu">
                        <button class="dropdown-toggle" id="dd-user-menu" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="../../public/<?php echo $_SESSION["rol_id"]?>.jpg" alt="">
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dd-user-menu">
                            <a class="dropdown-item" href="../MntPerfil/"><span class="font-icon glyphicon glyphicon-user"></span>Perfil</a>
                          
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="../Logout/logout.php"><span class="font-icon glyphicon glyphicon-log-out"></span>Cerrar Sesion</a>
                        </div>
                    </div>
                </div>

                <div class="mobile-menu-right-overlay"></div>

                <input type="hidden" id="user_idx" value="<?php echo $_SESSION["usu_id"] ?>"><!-- ID del Usuario-->
                <input type="hidden" id="rol_idx" value="<?php echo $_SESSION["rol_id"] ?>"><!-- ID del Usuario-->


                <div class="dropdown dropdown-typical">
                    <a href="#" class="dropdown-toggle no-arr">
                        <span class="font-icon font-icon-user"></span>
                        <span class="lblcontactonomx"><?php echo $_SESSION["usu_nom"] ?> <?php echo $_SESSION["usu_ape"] ?></span><!-- Muestra el nombre del usuario en el header-->
                    </a>
                </div>

            </div>
        </div>
    </div>
</header>