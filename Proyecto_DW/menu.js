function Fecha(){

    let d = new Date();
    let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    //document.getElementById("Fecha").innerHTML = "Hoy es: "+ dias[d.getDay()]+", " + d.getDate() + " de " + meses[d.getMonth()] + " de " + d.getFullYear();

    return( dias[d.getDay()]+", " + d.getDate() + " de " + meses[d.getMonth()] + " de " + d.getFullYear());

}
