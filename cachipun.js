var b = document.getElementById("btn_a_jugar");
b.addEventListener("click", jugar_solo);
var optionsbb = [
    "Piedra",
    "Papel",
    "Tijeras"
];
var resultado
var entrega_resultado = document.getElementById("id-Resultado");

function jugar_solo() {
    //Obtiene la opción elegida por el usuario
    var t = document.getElementById("inp_opcion_elegida");
    op_ingresada =  t.value;

    //para ver lo que ingreso el usuario
    console.log("Usuario: " + op_ingresada);
         
    //El pc hace su elección
    var eleccion_pc = optionsbb[Math.floor(Math.random() * optionsbb.length)];
    console.log("PC: " + eleccion_pc); //para ver lo que pc eligió    
    
    //Se llama a la función que elige ganador
    console.log(quien_gana(op_ingresada, eleccion_pc));
    
    //Se entrega el resultado
    entrega_resultado.innerHTML = resultado + ", el Pc eligió: " + eleccion_pc;
}

function quien_gana(jugador, pc) {
    if(jugador === pc){
        return resultado = 'Empate';
    } else if((jugador == 'Piedra' && pc == 'Papel') || (jugador == 'Papel' && pc == 'Tijeras') || (jugador == 'Tijeras' && pc == 'Piedra')) {
        return resultado = 'Gana el PC';
    } else if((jugador == 'Piedra' && pc == 'Tijeras') || (jugador == 'Papel' && pc == 'Piedra') || (jugador == 'Tijeras' && pc == 'Papel')) {
        return resultado = 'Gana el Jugador';
    } else{
        return resultado = 'Ingrese alguno de los 3 valores';
    }
}
