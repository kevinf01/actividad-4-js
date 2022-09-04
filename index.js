(function(){
    var formulario = document.getElementsByName ('formulario')[0];
    elementos = formulario.elements,
    boton = document.getElementById ('boton');

    var validarNombre = function(){
        if (formulario.name.value== 0) {
            alert("completa el campo")
        }
    };

    var validarCheck = function(){
        if (formulario.terminos.value== 0) {
            alert("completa el campo")
        }
    };

    var validarRadio = function(){
        if (formulario.sexo.value== 0) {
            alert("completa el campo")
        }
    };


    var validar = function(){
        validarNombre();
    };

    var validar2 = function(){
        validarCheck();
    };

    var validar3 = function(){
        validarRadio();
    };

    formulario.addEventListener("submit", validar);
    formulario.addEventListener("submit", validar2);
    formulario.addEventListener("submit", validar3);


}())


(function(){
    var saludo = function() {
        alert('Saludo');
    };

    var saludo2 = function() {
        alert('Saludo2');
    };

    var boton = document.getElementById('boton');
    boton.addEventListener("click", saludo);
    boton.addEventListener("click", saludo2);
    
}())