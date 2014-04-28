function enviarCorreoAdmin(){
	var estado = $('#btnEnviar').val();
	$('#respuesta').removeClass('animated flipInY');
	if(estado == 0){
	var usuarioNombre = $('#nombreUsuario').val();
	var usuarioCorreo = $('#correoUsuario').val();
	var ajax_Data = {'nombreUsuario': usuarioNombre ,'correoUsuario' : usuarioCorreo };
	$.ajax({
		type : "post", 
		url : "enviarCorreoAdmin.php",  
		dataType : 'json',
		data : ajax_Data,
		success : function(respuesta){

				$('#respuesta').html(respuesta["Mensaje"]);
				$('#respuesta').addClass('animated flipInY');
				$('#btnEnviar').val(respuesta["codigo"]);
				

		},
		error : function(){
				$('#respuesta').html('Presentamos un problema en nuestro servidor , prueba en 5 minutos - Por favor');
		}

	});}
	else
	{
		$('#respuesta').html('Tu correo ya fue enviado - Gracias');
		$('#respuesta').addClass('animated wobble');
	}
}