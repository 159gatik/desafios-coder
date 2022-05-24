//Poder consultar, extraer y transferir dinero a un destinatario. Se agrega agregar destinatario mediante Arrays.


class Cliente {
    constructor(id, nombre, apellido, saldo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }
    mostrarCliente() {
        alert(`Bienvenido/a ${this.nombre} ${this.apellido}`)
    }

    getSaldoFormateado() {
        return "$ " + Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(this.saldo);
    }
}

const nombreIngresado = prompt("Ingresar su nombre");
const apellidoIngresado = prompt("Ingresar apellido");

const saldoPorDefecto = 30000;
const cliente1 = new Cliente(1, nombreIngresado, apellidoIngresado, saldoPorDefecto);
const cliente2 = new Cliente(2, nombreIngresado, apellidoIngresado, saldoPorDefecto);

cliente1.mostrarCliente();


class Contacto {
    constructor(nombre, cbu) {
        this.nombre = nombre;
        this.cbu = cbu;
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

    contactos.push(new Contacto(prompt("Ingresar nombre del contacto a agregar"), Number(prompt("Ingresar cbu del contacto a agregar"))));
}

const listarContactos = () => {

    let listado = ` `;

    for (let i = 0; i < contactos.length; i++) {

        const unContacto = contactos[i];

        listado += `Nombre: ${unContacto.nombre}
         CBU: ${unContacto.cbu}
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