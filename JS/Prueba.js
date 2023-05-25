/*function sumar(a, b){
    var s = a + b;
    document.write("La suma es:" +s+ "<br>");
}

//llamar a la funcion
sumar(10,5);
sumar(8,7);
sumar(10.8,5.3);
sumar("Hola","Mundo");*/

function factorial(n){
    let c=1;
    let f=1;
    while(c<=n){
        f=f*c;
        c++;
    }
    return f;
}

document.write(factorial(5));