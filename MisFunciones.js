/**
 *Permite verificar que el usuario ingrese correctamente el dni, sin utilizar letras.
 * @method ValidarDNI
 * @param {number}id -El identificador del campo, usualmente "DNI"
 * @param {number}valor -El valor ingresado por el usuario, debe ser numérico
 * @return {void}
 */

const ValidarDNI = (id, valor) => {

    if (isNaN(valor)) {
        alert("El valor ingresado no es correcto");

    } else if (id == "DNI") {
        return;
    }
    document.getElementById("DNI").value = "";

}

/**
 *Permite verificar que el usuario ingrese correctamente el nombre, sin utilizar números.
 * @method ValidarNombre
 * @param {string}id -El identificador del campo, usualmente "Nombre"
 * @param {string}valor  -El valor ingresado por el usuario
 * @return {void}
 */
const ValidarNombre = (id, valor) => {

    if (eval(valor)) {
        alert("El valor ingresado no es correcto");

    }
    document.getElementById("Nombre").value = "";

}

/**
 *Permite verificar que el usuario ingrese correctamente el apellido, sin utilizar numeros.
 * @method ValidarApellido
 * @param {string}id  -El identificador del campo, usualmente "Apellido"
 * @param {string}valor  -El valor ingresado por el usuario
 * @return {void}
 */
const ValidarApellido = (id, valor) => {

    if (eval(valor)) {
        alert("El valor ingresado no es correcto");

    }
    document.getElementById("Apellido").value = "";

}

/**
 *Permite al usuario incribirse a las clases y verifica que haya completado todos los campos
 * @method cargarInscripcion
 * @return {void}
 */
const cargarInscripcion = () => {
    let Sucursal, Actividad, Fecha, Hora;

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
 *Permite verificar si la fecha de la clase es posterior a la fecha actual
 * @method validarFecha
 *@param {string} fecha -La fecha de la clase
 * @return {boolean} -Retorna true si la fecha es válida, de lo contrario false
 */

const validarFecha = (fecha) => {
    const fechaClase = new Date(fecha);
    const fechaActual = new Date();
    if (fechaClase <= fechaActual) {
        alert("La fecha de la clase debe ser posterior a la fecha actual.");
        return false;
    }
    return true;
}
/**
 *Permite mostrar al usuario su inscripcion a la clase.
 * @method mostrarInscripcion
 *@return {void}
 */
const mostrarInscripcion = () => {
    let Sucursal, Actividad, Fecha, Hora;

    Sucursal = localStorage.getItem("sucursalLS");
    Actividad = localStorage.getItem("actividadLS");
    Fecha = localStorage.getItem("fechaLS");
    Hora = localStorage.getItem("horaLS");

    if (!validarFecha(Fecha)) {
        window.location.href = "IMPERIOGYM.html";
        return;
    }


    document.getElementById("Sucursal").value = Sucursal;
    document.getElementById("Actividad").value = Actividad;
    document.getElementById("Fecha").value = Fecha;
    document.getElementById("Hora").value = Hora;


}

/**
 * Permite guardar los datos ingresados por el usuario y redirigirlo a su perfil.
 * @method serSocio
 * @return {void}
 */
const serSocio = () => {
    let nombre, apellido, sexo, email, usuario, dni;

    nombre = document.getElementById("Nombre").value;
    apellido = document.getElementById("Apellido").value;
    let sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
    sexo = sexoSeleccionado ? sexoSeleccionado.value : null;
    email = document.getElementById("Email").value;
    usuario = document.getElementById("Usuario").value;
    dni = document.getElementById("DNI").value;


    if (!nombre || !apellido || !sexo || !email || !usuario || !dni) {
        alert("Por favor completa todos los campos antes de continuar.");
        return;
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("sexo", sexo);
    localStorage.setItem("email", email);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("dni", dni);

    window.open('miPerfilSocio.html');
}
/**
 *Permite mostrar al usuario su tarjeta de socio, con los datos ingresados mediante un canvas.
 * @method MostrarSocio
 *@return {void}
 */
const MostrarSocio = () => {
    let nombre, apellido, sexo, email, usuario, dni;

    nombre = localStorage.getItem("nombre");
    apellido = localStorage.getItem("apellido");
    sexo = localStorage.getItem("sexo");
    email = localStorage.getItem("email");
    usuario = localStorage.getItem("usuario");
    dni = localStorage.getItem("dni");


    const canvas = document.getElementById("Canvas");
    const ctx = canvas.getContext("2d");
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
 * @param {string}id - El identificador del campo, puede ser "peso" o "altura".
 * @param {number}valor - El valor ingresado por le usuario, el cual si es ingresado con coma, se reemplaza por punto, Y debe ser positivo.
 * @return {void}
 */
const validarPesoAltura = (id, valor) => {

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor) || parseFloat(valor) < 0) {
        alert("El valor ingresado no es correcto");
        document.getElementById(id).value = "";

    } else if (id == "peso" || id == "altura") {
        document.getElementById(id).value = valor;
        calcularIMC();
    }

}
/**
 *Permite calcular el peso corporal ideal del usuario(IMC)
 * @method calcularIMC
 * @return {void}
 */
const calcularIMC = () => {
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


