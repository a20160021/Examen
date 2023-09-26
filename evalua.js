var nombre = prompt("¿Cuál es tu nombre?")
var correcto = 0
var incorrecto = 0
alert("Buenos días, tardes o noches "+nombre+". Bienvenido al cuestionario sobre el turismo en el Perú. En total son 3 preguntas.")
//PREGUNTA 1
var res1 = prompt("¿En qué departamento se encuentra el lago Titicaca? A. Tacna B. Puno C. Cusco")
if (res1 == "B"){
    correcto = 1
} else if (res1=="A"){
    incorrecto = 1;
} else if (res1=="C") {
    incorrecto = 1;
}else{
    alert(nombre+", esa opción no es válida.")
}

//PREGUNTA 2
var res2 = prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas? A. Lima e Ica B. Arequiupa y Tacna C. Piura y Tumbes")
if (res2 == "C"){
    correcto = 1
} else if (res2=="A"){
    incorrecto = 1;
} else if (res2=="B") {
    incorrecto = 1;
}else{
    alert(nombre+", esa opción no es válida.")
}

//PREGUNTA 3
var res3 = prompt("Plato típico de la Selva peruana A. Tacacho con cecina B. Arroz con pollo C. Lomo saltado")
if (res2 == "A"){
    correcto = 1
} else if (res2=="C"){
    incorrecto = 1;
} else if (res2=="B") {
    incorrecto = 1;
}else{
    alert(nombre+", esa opción no es válida.")
}

if (correcto > 1){
    document.write("Lo has hecho muy bien "+nombre+", obtuviste "+correcto+" puntos.")
} else if (incorrecto > 1) {
    document.write("Debes mejorar, vuelve a intertarlo"+nombre+", obtuviste "+correcto+" puntos.")
} else { 
    document.write("Puedes hacerlo mejor, obtuviste "+correcto+" puntos.")
}
