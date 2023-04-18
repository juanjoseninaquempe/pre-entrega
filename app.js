// vamos a usar la condicion FOR ; vamos a repetir 6 veces un llamado de numeros para que se multipliquen

/*

let numero1 = parseInt(prompt("ingrese el pirmer numero que sera multiplicado en cada interaccion : "));
let multiplicacion = 0;
let i;
for( i=0 ; i < 6 ; i++ ) {
    let numero2 = parseInt(prompt("ingrese el numero a multiplicar : "));
        multiplicacion = (numero1 * numero2);
        console.log (multiplicacion);
}
*/

// vamos a hacer una calculadora con while 
const SALIR= "0";
const SUMA = "+";
const RESTA = "-";
const DIVISION ="/";
const MULTIPLIC = "*";

let operacion;
let resultado;

do {

    alert("bienvenido a la calculadora = elije (+)(*)(/)(*) y para SALIR presione = (0)");
    operacion = prompt("ingrese la operacion : ");

    if(operacion != SALIR){

        let numero3 = parseInt(prompt("ingrese el primer numero : "));
        let numero4 = parseInt(prompt("ingrese el segundo numero : "));
    
        switch(operacion) {
        
            case  SUMA:
        resultado= numero3 + numero4 ;
            break;

            case RESTA:
        resultado = numero3 - numero4 ;
             break;
        
             case  MULTIPLIC:
        resultado = numero3 * numero4 ;
            break;
        
            case  DIVISION:
        resultado = numero3 / numero4 ;
            break; 
        default:
            resultado = NaN
        alert("ingreso un caracter invalido");
        
    }
    alert("el resultado es : " + resultado);

    }else{
        alert ( "Gracias por usar este calculadora");
    }
}while( operacion != SALIR);
