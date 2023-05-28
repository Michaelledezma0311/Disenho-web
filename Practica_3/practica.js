function calcularclima(){

    let clima = document.getElementById("clima").value;

    if(clima >= -10 && clima <= 15){
        alert("Frio");
    } else if(clima >= 16 && clima <=25 ){
        alert("Templado");
    }else if(clima >=26 && clima <= 40){
        alert("Calor")
    }else{
        alert("Valor fuera de rango, no se puede evaluar")
    }
}

function calcularfact(){

    let num = document.getElementById("num").value;
    let resultado = num;
    for (let i = 1; i < num; i++) {
        resultado = resultado * i;
    }
    document.write(resultado);
}

function fizzbuzz(){
    for (let i = 1; i < 101; i++) {
        if (i % 15 == 0){
            document.write("FizzBuzz<br/>");
        }else if (i % 3 == 0){
            document.write(i+" Fizz<br/>");
        }else if (i % 5 == 0){
            document.write(i+" Buzz<br/>");
        }else{
            document.write(  i+"<br/>");
        }
        
    }
}

function Fecha(){

    let d = new Date();
    let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    document.getElementById("Fecha").innerHTML = "Hoy es: "+ dias[d.getDay()]+", " + d.getDate() + " de " + meses[d.getMonth()] + " de " + d.getFullYear();

}



