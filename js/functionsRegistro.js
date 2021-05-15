//Boton Limpiar
$('#btn_limpiar').click(function(e){ 
    fn_limpiar();
});
//Boton Registrar
$('#btn_finalizarRegistro').click(function(e){
    var rut =$('#txt_rut').val();
    var nombres =$('#txt_nombres').val();
    var aPaterno =$('#txt_aPaterno').val();
    var aMaterno =$('#txt_aMaterno').val();
    var correo =$('#txt_correo').val();
    var tipoCuenta =$("#cmb_tipoCuenta option:selected").text();
    val=true;

    $('#messages').empty();
    
    if(nombres == ""){
        val=false;
        $('#messages').append('<li> Debe ingresar un nombre </li>');
    }
    if(aPaterno == ""){
        val=false;
        $('#messages').append('<li> Debe ingresar el apellido paterno </li>');
    }
    if(aMaterno == ""){
        val=false;
        $('#messages').append('<li> Debe ingresar el apellido materno </li>');
    }
    if(correo == ""){
        val=false;
        $('#messages').append('<li> Debe ingresar un correo </li>');
    }
    if(tipoCuenta == ""){
        val=false;
        $('#messages').append('<li> Debe seleccionar un tipo de cuenta </li>');
    }
        else if(tipoCuenta == "-- Seleccione --"){
            val=false;
            $('#messages').append('<li> Debe seleccionar un tipo de cuenta </li>');
        }
    if(val){
        $('#lbl_logIn').text('USUARIO REGISTRADO CORRECTAMENTE');
        $("#lbl_logIn").css("visibility", "visible");
        
    }
    else{
        //fn_ocultarLabelLogIn();
        $('#lbl_logIn').css('visibility','hidden');
    }

});

/*
$('#btn_finalizarRegistro').click(function(e){
    fn_validarRut();
});
*/

$('#btn_validar').click(function(e){
    fn_validarRut();
})

function fn_validarRut(){
    var valor = $('txt_rut').val();
    $.getJSON('https://api.libreapi.cl/rut/validate'+ valor, function(data){

        if(data.rut == undefined){
            $('#lbl_logIn').val(data.message);
        }
        else{
            $('#lbl_logIn').val(data.rut);
        }
    }).fail(function(){
        alert('AUN NO CONECTA CON LA API, PAJARON');
    });
}

function fn_limpiar(){
    $('#txt_rut').val("");
    $('#txt_nombres').val("");
    $('#txt_aPaterno').val("");
    $('#txt_aMaterno').val("");
    $('#txt_correo').val("");
    $('#cmb_tipoCuenta').val(""); 
}

function fn_ocultarLabelLogIn(){
    $('#lbl_logIn').css('visibility','hidden');
}

