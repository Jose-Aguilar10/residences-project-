
function init(){
   
    $("#ticket_form").on("submit",function(e){
        guardaryeditar(e);	
    });
    
}

$(document).ready(function() {
    $('#tick_descrip').summernote({
        height: 150,
        lang: "es-ES",
        popover:{
            image:[],
            link:[],
            air:[]
        },
        callbacks: {
            onImageUpload: function(image) {
                console.log("Image detect...");
                myimagetreat(image[0]);
            },
            onPaste: function (e) {
                console.log("Text detect...");
            }
        },
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']]
        ]
    });

    $.post("../../controller/categoria.php?op=combo",function(data, status){
        $('#cat_id').html(data);
    });

});
 /* Funcion para que el ticket no se pueda guardar sin que los campos mostrados no esten completos */
function guardaryeditar(e){
    e.preventDefault();
    var formData = new FormData($("#ticket_form")[0]);
    if ($('#tick_descrip').summernote('isEmpty') || $('#tick_titulo').val()==''){
        swal("Advertencia!", "Campos Vacios", "warning");
    }else{
        var totalfiles = $('#fileElem').val().length;
        for (var i = 0; i < totalfiles; i++) {
            formData.append("files[]", $('#fileElem')[0].files[i]);
        }
        $.ajax({
            url: "../../controller/ticket.php?op=insert",
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function(datos){  
                console.log(datos);
                $('#tick_titulo').val(''); /* Se limpian los espacios al momento de guardar los datos del tickect generado */
                $('#tick_descrip').summernote('reset');               /* Se inicia el componenete sumernote */
                swal("Correcto!", "Registrado Correctamente", "success"); /* alerta activada al generar un ticket sin error */
            }  
        }); 
    }
}

init();