
// --------------------------------------------------
// 1- Ver menu 
// 2- Mis pedidos
// 3- Cargar saldo
// 4- Consultar saldo
// 5- Confirmar pedido
// --------------------------------------------------

// Apretas 1:

// ---------------------- Variedades ----------------
// 1- Hamburguesas
// 2- Pizas
// 3- Empanadas
// 4- VOLVER
// --------------------------------------------------


// ------------------------ Hamburguesas 
// 1- Hamburguesa 1 - $790
// 2- Hamburguesa 2 - $900
// 3- Hamburguesa 3 - $1500
// 4- VOLVER
// --------------------------------------------------


//Se ha agregado la "Hamburguesa 1" a tu pedido. Total hasta ahora: $790



// ------------------------ Hamburguesas 
// 1- Hamburguesa 1 - $790
// 2- Hamburguesa 2 - $900
// 3- Hamburguesa 3 - $1500
// 4- VOLVER
// --------------------------------------------------






// --------------------------------------------------
// 1- Ver menu 
// 2- Mis pedidos
// 3- Cargar saldo
// 4- Consultar saldo
// 5- Confirmar pedido
// --------------------------------------------------

// Apretas 5:


// ------------------ TU PEDIDO:
// Hamburguesa 1 - $790
// Pizza 1 - $1000
// Envío: $300
// Sub Total: 1790
// Total: 1790

// 1- Confirmar
// 2- Volver
// --------------------------------------------------

// Apretas 5:






//Poder consultar y extraer saldo de un cajero



// TODO:
// 1 - Formatear el saldo, en la funcion getSaldoFormateado
// 2 - Poder transferir a un CBU
// 3 - Agregar agenda de destinatarios de CBU (cargando un nombre y un CBU)
// 4 - Validar el CBU (tiene que ser 18 numeros)






//Poder consultar, extraer y transferir dinero a un destinatario. Se agrega agregar destinatario mediante Arrays.


class Cliente {
    constructor(id, nombre, apellido, saldo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }
    mostrarCliente() {
        nodo.innerHTML = `<b>Que tenga un buen día, ${nombreIngresado} ${apellidoIngresado} </b>`
    }

    getSaldoFormateado() {
        return "$ " + Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(this.saldo);
    }
}
const nodo = document.getElementById("saludoUsuario");

const nombreIngresado = prompt("Ingresar su nombre");
const apellidoIngresado = prompt("Ingresar apellido");

const saldoPorDefecto = 30000;
const cliente1 = new Cliente(1, nombreIngresado, apellidoIngresado, saldoPorDefecto);
const cliente2 = new Cliente(2, nombreIngresado, apellidoIngresado, saldoPorDefecto);

cliente1.mostrarCliente();


class Contacto {
    constructor(nombre, cbu, referencia) 
    {
        this.nombre = nombre;
        this.cbu = cbu;
        this.referencia = referencia;
    }
}

const contactos = [];


const transferir = () => {

    let opcionIncorrectaCbu = true;
    let cbuDestinatario;

    while (opcionIncorrectaCbu) {

        cbuDestinatario = Number(prompt("Ingresar cbu"));

        if (!isNaN(cbuDestinatario) && cbuDestinatario.toString().length === 18){
         opcionIncorrectaCbu = false
        } else {
            alert (`Ingrese un cbu valido (Tiene que ser 18 números)`)
        }
    }

    let opcionIncorrecta = true;
    let saldoATransferir;

    while (opcionIncorrecta) {

        saldoATransferir = Number(prompt("Ingresar saldo"));

        if (saldoATransferir > cliente1.saldo) {
            alert(`El monto que desea transferir supera el saldo de su cuenta, el saldo maximo a transferir es de: ${cliente1.getSaldoFormateado()}`)
        }
        else {
            opcionIncorrecta = false
        }
    }

    cliente1.saldo -= saldoATransferir

    alert(
        `Usted transfirió $ ${saldoATransferir} al CBU ${cbuDestinatario} . Su saldo restante es ${cliente1.getSaldoFormateado()}`
    );
}



const agregarContacto = () => {

    let nombre= prompt("Ingrese nombre")
    let cbu = prompt("Ingrese cbu")
    let referencia = prompt("Ingrese una referencia")
    
    contactos.push(new Contacto (nombre, cbu, referencia));
}

const listarContactos = () => {
    
    let listado = ` `;

    for (let i = 0; i < contactos.length; i++) {

        let unContacto = contactos[i];

        listado += `Nombre: ${unContacto.nombre}
         CBU: ${unContacto.cbu}
         Referencia: ${unContacto.referencia}
         ------------------------------
         `
    }
    alert(listado)
        
}

 const consultarSaldo = () => {

    alert(`Su saldo es: ` + cliente1.getSaldoFormateado());
}


    const salir = () => {
    alert("¡NO SE OLVIDE DE RETIRAR LA TARJETA! GRACIAS :) .");
}

const extraccion = () => {
    let opcionCorrecta = false;
    let dineroIngresado;
    while (opcionCorrecta === false) {
        dineroIngresado = Number(
            prompt(`¿Cuánto querés retirar ${cliente1.nombre} ? Solo puede ingresar:
                                          $2500 
                                          $4000 
                                          $10000`)
        );
        console.log(dineroIngresado);
        if (
            dineroIngresado === 2500 ||
            dineroIngresado === 4000 ||
            dineroIngresado === 10000
        ) {
            opcionCorrecta = true;
            cliente1.saldo -= dineroIngresado;
        } else {
            alert("El monto es invalido :( , pruebe de nuevo");
        }
    }

    alert(
        "Usted extrajo $" + dineroIngresado + ". Su saldo restante es " + cliente1.getSaldoFormateado()
    );
}

const dibujarMenuDeContactos = () => {

    let seguir = true;

    while (seguir) {

        let opcion = prompt(`Ingrese opción: 
                  1. AGREGAR CONTACTO NUEVO
                  2. LISTAR CONTACTOS
                  3. VOLVER`);

        switch (opcion) {
            case "1":
                agregarContacto();
                break;
            case "2":
                listarContactos();
                break;
            case "3":
                seguir = false;
                break;
            default:
                alert("Ingrese una opción correcta");
                break;
        }

    }
}

const dibujarMenu = () => {

    let seguir = true;

    while (seguir) {

        let opcion = prompt(`Hola ${cliente1.nombre}, seleccione la siguiente operación: 
                    1. CONSULTAR SALDO
                    2. EXTRAER DINERO
                    3. TRANSFERIR DINERO
                    4. CONTACTOS
                    5. SALIR`);

        switch (opcion) {
            case "1":
                consultarSaldo();
                break;
            case "2":
                extraccion();
                break;
            case "3":
                transferir();
                break;
            case "4":
                dibujarMenuDeContactos();
                break;
            case "5":
                salir();
                seguir = false;
                break;
            default:
                alert("Ingrese una opción correcta");
                break;
        }
    }
}

dibujarMenu();

const secciones = ["CONSULTAR SALDO", "EXTRAER DINERO", "TRANSFERIR DINERO", "CONTACTOS"];

 const parrafo = document.getElementsByClassName("myParrafo");

 let index = 0;
 for(let seccion of parrafo)
 {
     seccion.innerText= secciones[index];
     index++;
 }
 