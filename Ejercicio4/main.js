

let numero1 = parseInt(prompt("Ingrese el valor del primer numero"));

let numero2 = parseInt(prompt("Ingrese el valor del segundo numero"));

let iguales = false;

let mayor = 0;
let menor = 0;


if(numero1 == numero2){

   iguales = true;
}else if (numero1 > numero2) {

    mayor = numero1;
    menor = numero2; 

} else {

    mayor = numero2;
    menor = numero1; 

}

if (iguales){

  alert(`Los numeros son iguales a ${numero1}`)

}else {

  alert(`El numero mayor es ${mayor} y el numero menor es ${menor}`)

}

