import validator from './validator.js';

let boton = document.getElementById("boton");
//agregamos el evento click al boton
boton.addEventListener('click',()=>{
    //console.log("Hola")
    //capturamos el valor del input text id=tarjeta
    let creditCardNumber=document.getElementById("tarjeta").value;
    //Pasamos el valor como argumento de la función
    let resultado=validator.isValid(creditCardNumber)
    let tarjetaCamuflada=validator.maskify(creditCardNumber,resultado)
    if(resultado){
        alert('Tarjeta válida '+tarjetaCamuflada)
    }else{
        alert('Tarjeta no valida '+tarjetaCamuflada)
    }
})

