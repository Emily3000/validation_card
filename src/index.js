import validator from './validator.js';

let formulario =document.getElementById("formulario");
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    //capturamos el valor de los inputs del formulario con el name
    let nombre = formulario['nombre'].value;
    let creditCardNumber= formulario['tarjeta'].value;
    
    //Funciones de validación
    let resultado=validator.isValid(creditCardNumber) //obtengo si la tarjeta es válid
    let tarjetaCamuflada=validator.maskify(creditCardNumber,resultado) // enmascaro la tarjeta

    //Evaluar si la tarjeta es válida o no
    if(resultado){
        alert('Tarjeta válida '+tarjetaCamuflada);
    }else{
        alert('Tarjeta no valida '+tarjetaCamuflada + 'por favor ingresar nuevamente la tarjeta');
    }
    document.getElementById("nombre_tarjeta").innerHTML=""+nombre;
    document.getElementById('numero_tarjeta').innerHTML=""+tarjetaCamuflada;

})

