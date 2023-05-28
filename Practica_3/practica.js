function calcularclima(){

    var clima = document.getElementById("clima").value;

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
