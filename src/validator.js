const validator = {
  // ...
    isValid:(creditCardNumber) =>{
    //Obtenemos el valor de la tarjeta que es string
    let tarjeta =creditCardNumber; 
    //console.log(tarjeta);
    //Convertimos en un array de letras
    let reversoTarjetaArray = tarjeta.split("");
    //console.log(reversoTarjetaArray)
    //Obtenemos el reverso del valor de la tarjeta Array
    let reversoTarjeta=reversoTarjetaArray.reverse();
    //console.log(reversoTarjeta);
    //El algoritmo pide las posiciones pares, pero un array inicia en 0, entonces
    //debemos de capturar los valores de 1 3 5 6, etc..
    
    for(let i =0 ;i<reversoTarjeta.length;i++){
        // Ya que buscamos las posiciones pares estas las impares del array
        if(i%2!=0){
            let aux =parseInt(reversoTarjeta[i])*2
                if(aux>=10){     
                //console.log(Math.trunc(aux/10))
                //console.log(aux%10)
                //Obtenemos la parte entera con math.trunc https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
                let aux2=Math.trunc(aux/10) + aux%10;
                // trunc me ayuda a obtener mi respuesta numero entero
                reversoTarjeta[i]=aux2+"";
            }else{
                //el valor inicial de la posicion i se reemplaza con el valor x2
                reversoTarjeta[i]=aux +"";
            }
        }else{
            //console.log("no entre")
        }
    }
    //console.log(reversoTarjeta)
    let suma=0;
    for(let i=0;i<reversoTarjeta.length;i++){
        suma+=parseInt(reversoTarjeta[i]);
    }
    //console.log(suma);
    //Debemos de comprobar si es multiplo de 10
    if(suma%10==0){
        return true;
    }else{
        return false;
    }
},

    maskify: (creditCardNumber)=>{ 
        // Nos ayuda enmascarar a mostrar los ultimos 4digitos de la tarjeta
            //comvertimos en array
            //console.log(creditCardNumber)
            let tarjetaArray = creditCardNumber.split('');
            for (let i =0; i<tarjetaArray.length-4;i++){
                tarjetaArray[i]='*';
            }
            let tarjetaMaskify="";
            for (let i =0; i<tarjetaArray.length;i++){
                tarjetaMaskify+=tarjetaArray[i];
            }
            return tarjetaMaskify;
    }

    
};

export default validator;
