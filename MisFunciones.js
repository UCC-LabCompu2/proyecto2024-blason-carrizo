/**
 *Permite verificar que el usuario ingrese correctamente el dni, sin utilizar letras.
 * @method ValidarDNI
 * @param {number}id
 * @param {number}valor
 * @return
 */

let ValidarDNI = (id, valor) => {

    if (isNaN(valor)) {
        alert("El valor ingresado no es correcto");

    } else if (id == "DNI") {
        return DNI;
    }
    document.getElementById("DNI").value = "";

}

/**
 *Permite verificar que el usuario ingrese correctamente el nombre, sin utilizar numeros.
 * @method ValidarNombre
 * @param {string}id
 * @param {string}valor
 * @return
 */
let ValidarNombre = (id, valor) => {

    if (eval(valor)) {
        alert("El valor ingresado no es correcto");

    }
    document.getElementById("Nombre").value = "";

}

/**
 *Permite verificar que el usuario ingrese correctamente el apellido, sin utilizar numeros.
 * @method ValidarApellido
 * @param {string}id
 * @param {string}valor
 * @return
 */
let ValidarApellido = (id, valor) => {

    if (eval(valor)) {
        alert("El valor ingresado no es correcto");

    }
    document.getElementById("Apellido").value = "";

}

/**
 *Permite al usuario incribirse a las clases y verifica que haya completado todos los campos
 * @method cargarInscripcion
 * @return
 */
let cargarInscripcion = () => {
    var Sucursal, Actividad, Fecha, Hora;

    Sucursal = document.getElementById("Sucursal").value;
    Actividad = document.getElementById("Actividad").value;
    Fecha = document.getElementById("Fecha").value;
    Hora = document.getElementById("Hora").value;

    if (!Sucursal || Sucursal === "Seleccionar" ||
        !Actividad || Actividad === "Seleccionar" ||
        !Fecha ||
        !Hora || Hora === "Seleccionar") {
        alert("Por favor completa todos los campos antes de continuar.");
        return;
    }

    localStorage.setItem("sucursalLS", Sucursal);
    localStorage.setItem("actividadLS", Actividad);
    localStorage.setItem("fechaLS", Fecha);
    localStorage.setItem("horaLS", Hora);

    window.location.href = 'IMPERIOGYM2.html';

}

/**
 *Permite mostrar al usuario su inscripcion a la clase
 * @method mostrarInscripcion
 * @return
 */

let mostrarInscripcion = () => {
    var Sucursal, Actividad, Fecha, Hora;

    Sucursal = localStorage.getItem("sucursalLS");
    Actividad = localStorage.getItem("actividadLS");
    Fecha = localStorage.getItem("fechaLS");
    Hora = localStorage.getItem("horaLS");

    document.getElementById("Sucursal").value = Sucursal;
    document.getElementById("Actividad").value = Actividad;
    document.getElementById("Fecha").value = Fecha;
    document.getElementById("Hora").value = Hora;
}

/**
 *Guarda lo que el usuario escribio y eligió en los campos
 * @method serSocio
 * @return
 */
let serSocio = () => {
    var nombre, apellido, sexo, email, usuario, dni;

    nombre = document.getElementById("Nombre").value;
    apellido = document.getElementById("Apellido").value;
    sexo = document.querySelector('input[name="sexo"]:checked').value;
    email = document.getElementById("Email").value;
    usuario = document.getElementById("Usuario").value;
    dni = document.getElementById("DNI").value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("sexo", sexo);
    localStorage.setItem("email", email);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("dni", dni);

    window.open('miPerfilSocio.html');

}
/**
 *Permite mostrar al usuario su tarjeta de socio, con los datos ingresados mediante un canva
 * @method MostrarSocio
 * @return
 */
let MostrarSocio = () => {
    var nombre, apellido, sexo, email, usuario, dni;

    nombre = localStorage.getItem("nombre");
    apellido = localStorage.getItem("apellido");
    sexo = localStorage.getItem("sexo");
    email = localStorage.getItem("email");
    usuario = localStorage.getItem("usuario");
    dni = localStorage.getItem("dni");


    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#f8f8fa";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "20px Montserrat";
    ctx.fillStyle = "#090909";
    ctx.lineWidth = 3;
    ctx.strokeRect(50, 50, 700, 400);

    ctx.fillText("Tarjeta de Socio", 300, 80);
    ctx.fillText("Nombre: " + nombre, 100, 150);
    ctx.fillText("Apellido: " + apellido, 100, 180);
    ctx.fillText("Sexo: " + sexo, 100, 210);
    ctx.fillText("Email: " + email, 100, 240);
    ctx.fillText("Usuario: " + usuario, 100, 270);
    ctx.fillText("DNI: " + dni, 100, 300);

    const img = new Image();
    img.src = sexo === "Masculino" ? "Imágenes/Sexo_masc.jpeg" : "Imágenes/Sexo_fem.jpeg";
    img.onload = () => {
        ctx.drawImage(img, 500, 150, 150, 150);
    }
};
/**
 *Permite verificar que el dato ingresado por el usuario sea valido
 * @method validarPesoAltura
 * @param {number}id
 * @param {number}valor
 * @return
 */
let validarPesoAltura = (id, valor) => {

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)) {
        alert("El valor ingresado no es correcto");
        document.getElementById(id).value = "";

    } else if (id == "peso" || id == "altura") {
        document.getElementById(id).value = valor;
        calcularIMC();
    }

}
/**
 *Permite calcular el peso corporal ideal del usuario
 * @method calcularIMC
 * @return
 */
let calcularIMC = () => {
    let peso, altura;

    peso = Number(document.getElementById("peso").value);
    altura = Number(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        let imc = Number(peso) / Math.pow(altura, 2);
        document.getElementById("total").innerHTML = imc.toFixed(2);
    } else {
        document.getElementById("total").innerHTML = ("Por favor ingrese valores validos");
    }
}
