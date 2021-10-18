"Use restrict"
/* */
//Objetos 
const usuario1 = {
    nombreUsuario: "Naty Sacías",
    contrasenia: "naty123"
}

const usuario2 = {
    nombreUsuario: "Eliana Kern",
    contrasenia: "eli1234"
}

const usuario3 = {
    nombreUsuario: "Mika Ayala",
    contrasenia: "uwu987"
}

//---------------- Funciones auxiliares---------------------------------
//Llamo a los elementos
const h1Html = document.querySelector("h1") 

// -------------- Función SALUDAR ----------------
const saludar = objeto => h1Html.innerHTML += `<p>Hola, ${objeto.nombreUsuario}</p>`


// ---------------Funcion Modificar Nombre De Usuario------------------------- 

const modificarNombreDeUsuario = (usuario, nuevoNombre) => usuario.nombreUsuario = nuevoNombre  
 
//---------------Función Modificar Contrasenia

const modificarContrasenia =  (usuario, nuevaContrasenia) => usuario.contrasenia = nuevaContrasenia


// Crea la función convertirAJSON. La función debe recibir un objeto usuario como parámetro y retornar el objeto convertido a JSON.

const convertirAJSON = (usuario) =>{

    const personaConvertidoAJSON = JSON.stringify(usuario)
    return personaConvertidoAJSON

}
//--------------------Función Convertir Desde JSON------------------------

const convertirDesdeJSON = (objetoJSON) => {   
    
    const objertoConvertido = JSON.parse(objetoJSON)
    return objertoConvertido

}

//--------------Función Guardar En Local Storage ------------------------

const guardarEnLocalStorage = (objeto, clave) =>{
  
  const convertirNuevamenteAJSON = convertirAJSON(objeto) 
    
  localStorage.setItem(clave, convertirNuevamenteAJSON)

}


//------------------ Función Leer Desde Local Storage---------------------

const leerDesdeLocalStorage = (clave) => {

    const JSONAObjeto = localStorage.getItem(clave)
    const nuevoObjeto = JSON.parse(JSONAObjeto)

    return nuevoObjeto

}

const botonIniciarSesion =  document.getElementById("boton")
const formulario = document.getElementById("inicio-de-sesion")


//----------------- Función desaparece el formulario-------------------------

botonIniciarSesion.onclick = () =>{

    formulario.classList.remove("is-hidden")

}

//-------------------------DATOS DE ESTADO -------------------------------
//hago esta variable para reducir codigo y compar siempre con el estado de esta para las acciones 

//---------variable SESION INICIADA---------
let sesionEstaIniciada = false

//-------- Objeto que necesito para probar las funciones----------

const usuario = {
    nombreUsuario: "mikisiwi@gmail.com ",
    contrasenia: "gatitos3",
}
//----llamo a los elementos-----
const saludo = document.querySelector(".saludo")
const botonSingIn = document.getElementById("singIn")
const botonesNuevos = document.querySelector(".div-botones")
const botonEnviarFormulario = document.getElementById("singIn")

// --------------- Funciones SESION iniciada/no iniciada------------------
const mostrarHTMLComoSesionIniciada = () => {
         botonIniciarSesion.classList.add("is-hidden")
        botonesNuevos.classList.remove("is-hidden")
         saludo.textContent = `Hola ${nombreUsuario}`
         formulario.classList.add("ocultar")
}
 
const mostrarHTMLComoSesionCerrada = () => {
    botonIniciarSesion.classList.remove("is-hidden")
   botonesNuevos.classList.add("is-hidden")
    saludo.textContent = "Hola"
    formulario.classList.add("is-hidden")
}
//Si los datos ingresados por el usuario en el form coinciden con los guardados en el objeto, la web debe:
// Mostrar como saludo "Hola {nombreUsuario}"
// Ocultar el botón "iniciar sesión"
// Mostrar dos botones nuevos: Cambiar mis datos, Cerrar sesión.
// Aca lo me conviene es crear variables de estado que generen un conjunto de acciones de acuerod a un estado especifico
// Pista: Definí una variable global para guardar si el usuario inició sesión o no, y determinar a partir de ella qué elementos se deben mostrar en la página.
// Si el usuario hace click en "cerrar sesión", el titulo debe volver a decir "Hola!" y el botón "Iniciar sesión" debe volver a ser visible.
// Si el usuario hace click en "Cambiar mis datos", se abre un formulario con un campo usuario y otro contraseña, y un botón para enviar el form. Al enviarse, se deben modificar las propiedades nombreUsuario y contrasenia del objeto usuario.
// Una vez completados todos los puntos anteriores, queremos que la sesión del usuario persista aunque cierre la página.

// Codigo de la aplicación 

const sesionEstaIniciadaLocalS = leerDesdeLocalStorage("sesion")

//la sesión está iniciada

if (sesionEstaIniciadaLocalS.sesionEstaIniciada === true) {
    mostrarHTMLComoSesionIniciada()
  }
  else {
    mostrarHTMLComoSesionCerrada()
  }
  
  //-------------------------hasta aca ya tengo
  // LLAMO A LOS ELEMENTOS DEL FORM
const inputNombreUsuario = document.querySelector("#nombre-usuario")
const inputContrasenia = document.querySelector("#contrasenia")

botonEnviarFormulario.onclick = () =>{
        // el usuario quiere iniciar sesion, o quiere cambiar datos? 
    if (sesionEstaIniciadaLocalS.sesionEstaIniciada === false){
        if (inputNombreUsuario.value === usuario.nombreUsuario && inputContrasenia.value === usuario.contrasenia){
            sesionEstaIniciada = true
            guardarEnLocalStorage({sesionEstaIniciada: true}, "sesion")
            mostrarHTMLComoSesionIniciada()
        }
        else {
            console.log("ingresaste datos erroneos")
          }
    }
    else { 
        usuario.nombreUsuario = inputNombreUsuario.value
        usuario.contrasenia = inputContrasenia.value
        titulo.textContent = `Hola, ${usuario.nombreUsuario}!!`
        formulario.classList.add("is-hidden")
    }
}
//llamo a los botones nuevos
const botonCerrarSesion = document.getElementById("cerrar-sesion")
const botonCambiarDatos = document.getElementById("cambiar-datos")

botonCerrarSesion.onclick = () =>{
    sesionEstaIniciada = false
    guardarEnLocalStorage( { sesionEstaIniciada: false }, "sesion" )
    mostrarHTMLComoSesionCerrada()
}



botonCambiarDatos.onclick = () => {
    formulario.classList.remove("is-hidden")
  }

// Al iniciar sesión, se deben guardar en localStorage el nombre del usuario y la propiedad: sesionIniciada: true.
// Al saludar al usuario, el título debe consumir la propiedad guardada en localStorage.
// Al cerrar sesión, la propiedad sesionIniciada debe pasar a ser false.
// Para determinar si la sesión está iniciada o no, usar la propiedad sesionIniciada desde localStorage.
// Si el usuario cambia su nombre o contraseña desde el formulario, los datos en localStorage deben actualizarse también.



 
