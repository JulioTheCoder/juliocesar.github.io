//const miTitulo = document.querySelector("h1");//*Con esto selecionamos el elemento  con el que vamos a trabajar
//miTitulo.textContent= "Hola mundo!";//*Con cambiamos el contenido del elemento
let miImage = document.querySelector("img");
miImage.onclick = function (){
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "images/source-4280758_1280.jpg") {
        miImage.setAttribute("src","images/html.png");
    } else{
        miImage.setAttribute("src","images/source-4280758_1280.jpg");
    }
}


/*document.querySelector("html").onclick= function(){
    alert("Mmmm, que rico papi ;)");
}//! Es lo mismo que ingresar:
*/
/*let miHTML = document.querySelector('html');
miHTML.onclick = function(){};*/ 

let a=0, b=3;
 

function producto(a,b){
    return a*b;


}

let miBoton= document.querySelector("button");
let miTitulo= document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Ingresa tu nombre.");
    if(!miNombre){
        estableceNombreUsuario();
    } else{
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = miNombre+", Bienvenido a esta página de prueba MND";
    }
}

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else{
    let nombreAlmacenado= localStorage.getItem("nombre");
    miTitulo.textContent= nombreAlmacenado+", Bienvenido a esta página de prueba MND";
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}