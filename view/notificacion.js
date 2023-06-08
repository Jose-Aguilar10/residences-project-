$(document).ready(function () {

    mostrar_notificacion();

});

function mostrar_notificacion() {

    var formData = new FormData();
    formData.append('usu_id', $('#user_idx').val());

    $.ajax({
        url: "../../controller/notificacion.php?op=mostrar",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            console.log(data);
            if (data == 0) {
                console.log("sin data")
            } else {
                data = JSON.parse(data);
                $.notify({
                    icon: 'glyphicon glyphicon-star',
                    message: data.not_mensaje,
                    url: "http://localhost:80/Personal_HelpDesk/view/DetalleTicket/?ID=" + data.tick_id
                });

                $.post("../../controller/notificacion.php?op=actualizar", { not_id: data.not_id }, function (data) {

                });
            }
        }
    });

}

setInterval(function () {
    mostrar_notificacion();
}, 5000);


//






async function obtenerDataNotificaciones() {
    return new Promise(function (resolve, reject) {
        var formData = new FormData();
        formData.append('usu_id', $('#user_idx').val());

        $.ajax({
            url: "../../controller/notificacion.php?op=listar_vanilla",
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data == 0) {
                    console.log("sin data2");
                    resolve([]);
                } else {
                    data = JSON.parse(data);
                    console.log(data);
                    resolve(data);
                }
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}




var older_notificacion_id = 0;
var latest_notificacion_id = 0;

function obtenerValoresLocalStorage() {
    var oni = localStorage.getItem('older_notificacion_id');
    var lai = localStorage.getItem('latest_notificacion_id');
  
    if (oni !== null && lai !== null) {
      // Los valores existen en localStorage, puedes utilizarlos
      // Realiza las acciones necesarias con las variables asignadas
      older_notificacion_id = oni;
      latest_notificacion_id = lai;
      console.log("EXISTE: latest_notificacion_id:", lai);
    } else {
      // Los valores no existen en localStorage
      // Realiza alguna acción alternativa o inicializa las variables de manera predeterminada
      console.log("Los valores no existen en localStorage");
    }


    if(lai !== null){
              // Los valores existen en localStorage, puedes utilizarlos
        latest_notificacion_id = lai;
        //console.log("EXISTE 3: latest_notificacion_id:", lai);

    }


  }
  obtenerValoresLocalStorage();


  function imprimirValores(){
    console.log("here1: older " +  older_notificacion_id);
    console.log("here11: lat " + latest_notificacion_id);

    console.log("here2: old " +  localStorage.getItem('older_notificacion_id'));
    console.log("here2: lat" +  localStorage.getItem('latest_notificacion_id'));

   /* for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        console.log(key + ": " + value);
      } */
      
  }
  
  // Llamada a la función
//obtenerValoresLocalStorage();
  




function comprobarNotificacion(){

    if (parseInt(latest_notificacion_id) > parseInt(older_notificacion_id)) {


        _notificar(true);
        older_notificacion_id =latest_notificacion_id;
        console.log("ONI: " + older_notificacion_id);
       localStorage.setItem('older_notificacion_id', older_notificacion_id);


        console.log("ejecutando if");
      }
      

   // console.log(older_notificacion_id);
    

}


var alarmEstatus = false;
function _notificar(estado) {
    const alarm = document.getElementById('dd-notification');
    console.log(alarm);
 
    if (estado) {
       alarm.classList.add("active");
    } else {
       alarm.classList.remove("active");
    }
 }
 



// Obtener el elemento con el ID "dd-notification"
var notificationDropdown = document.getElementById("dd-notification");

// Agregar el listener de click
notificationDropdown.addEventListener("click", function() {
    // Lógica a ejecutar cuando se hace click en el elemento
    // Por ejemplo, mostrar/ocultar la lista de notificaciones
    // o realizar alguna otra acción relacionada con las notificaciones

    _notificar(false);
});





async function añadirNotificacionesAlDropdown() {
    try {
        var data = await obtenerDataNotificaciones();
        // Aquí puedes procesar la data y añadirla al dropdown de notificaciones
        const dropdown = document.getElementById('notificaciones-lista');

        dropdown.innerHTML = '';

        // console.log(dropdown);
        // Obtener el contenedor donde deseas agregar las notificaciones
        var container = dropdown;

        // Recorrer los datos y crear los elementos HTML dinámicamente
        var latest_nit;
        data.data.forEach(function (notification) {
            var idNotification = notification[0];

            var message = notification[1];
            var ticketNumber = notification[2];

            // Crear el elemento <a> con el enlace
            var link = document.createElement("a");
            link.href = "/Personal_HelpDesk/view/DetalleTicket/?ID=" + ticketNumber;

            // Crear el elemento <div> con las clases de estilo
            var div = document.createElement("div");
            div.classList.add("notificacion", "alert", "alert-info");

            // Crear el elemento <p> con el texto de la notificación
            var p = document.createElement("p");
            p.textContent = message;

            // Agregar el elemento <p> dentro del elemento <div>
            div.appendChild(p);

            // Agregar el elemento <div> dentro del elemento <a>
            link.appendChild(div);

            // Agregar el elemento <a> al contenedor
            container.appendChild(link);

            if (typeof latest_nit === 'undefined') {
                latest_nit = idNotification; // Asignar el primer valor solo si no se ha asignado antes
            }

          

        });
        latest_notificacion_id = latest_nit;

        localStorage.setItem('latest_notificacion_id', latest_nit);

        comprobarNotificacion();



    } catch (error) {
        console.error(error);

    }
}



let ejecutando = false;


function esperar(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}


async function ejecutarDespuesDeEsperar() {
    console.log('Ejecutando después de esperar...');
    // Realizar el trabajo necesario aquí
    // ...
    ejecutando = false; // Marcar como finalizado
}

async function ejecutarEnIntervalo() {
    while (true) {
        if (!ejecutando) {
            ejecutando = true; // Marcar como en ejecución
            await esperar(5000); // Esperar 5 segundos
            await ejecutarDespuesDeEsperar(); // Ejecutar la función promesa después de esperar
            añadirNotificacionesAlDropdown();

        }
    }
}

ejecutarEnIntervalo();



