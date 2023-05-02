//Declaramos todas las variables que nos van a hacer falta
let resultado = ""
let notas = ""
let media =""
let nota = ""
let medias = ""
let correspondencia = ""

//Bucle en el que recogemos los valores de las notas
for (let i =1; i<=6 ; i++) {
    nota = prompt("Que nota has sacado? Incluye los decimales de la nota")
    if (nota > 10){
        nota = prompt("La nota que has introducido no es valida, vuelve a intertarlo")
        i=i-1
    } else{
       notas = Number(notas)+Number(nota)
       console.log (notas)
    }
}

//Con esta funcion, a la que llamamos con el primer boton, hacemos la media de todas las notas recogidas y lo devolvemos
function hacermedia(){

    const contenido = document.getElementById("medianotas")

    medias =notas/6
    media = `<p> Tu media es de ${medias}</p>`
    contenido.innerHTML = media
    console.log(media)
}

//Con esta funcion, a la que llamamos con el segundo boton, juzgamos la media para clasificarla segun los estandares academicos
function correspondencias(){

    const elemento = document.getElementById("correspondencia")

    if(medias >= 9){
        correspondencia = `<p> Tu nota es de sobresaliente</p>`
        elemento.innerHTML = correspondencia
    } else if ( medias >= 7){
        correspondencia = `<p> Tu nota es un notable</p>`
        elemento.innerHTML = correspondencia
    } else if ( medias >= 6){
        correspondencia = `<p> Tu nota esta bien</p>`
        elemento.innerHTML = correspondencia
    } else if ( medias >= 5){
        correspondencia = `<p> Tu nota es un suficiente</p>`
        elemento.innerHTML = correspondencia
    } else if ( medias >= 3){
        correspondencia = `<p> Tu nota es de insuficiente</p>`
        elemento.innerHTML = correspondencia
    } else if (medias >= 0){
        correspondencia = `<p> Tu nota es muy insuficiente</p>`
        elemento.innerHTML = correspondencia
    }
}