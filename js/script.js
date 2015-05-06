$(document).ready(function(){
	asignarEventos();
});

function asignarEventos(){
	$("#phoneField").on("keypress",validarNumeros);
	$("#send").on("click",enviarFormulario);

}

function enviarFormulario(){
	if(validarNombre()== false || validarTelefono()==false || validarEmail()==false || validarComentario == false){
		alert("El formulario contenia espacios en blanco");
	}else{
			var nombre = $("#nameField").val();
			alert("Thank you for your comment "+ nombre+" "+"we'll be in contact as soon as possible.");		
	}
	
}

function validarNumeros(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function validarNombre(){
	var resNombre = $("#nameField").val();
	if(resNombre == "" || resNombre==null){
		return false;
	}else{
		if(resNombre != "" || resNombre!=null){
			return true;
		}		
	}
}

function validarTelefono(){
	var resTel = $("#phoneField").val();
	if(resTel == "" || resTel==null){
		return false;
	}else{
		if(resTel != "" || resTel!=null){
			return true;
		}		
	}
}

function validarEmail(){
	var resMail= $("#emailField").val();
	if(resMail == "" || resMail==null){
		return false;
	}else{
		if(resMail != "" || resMail!=null){
			return true;
		}		
	}
}

function validarComentario(){
	var resComment= $("#commentFieldField").val();
	if(resComment == "" || resComment==null){
		return false;
	}else{
		if(resComment != "" || resComment!=null){
			return true;
		}		
	}
}


