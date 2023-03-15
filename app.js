let nombre = prompt("Bienvenido a Papel Madera. Ingrese su Nombre :");

let continuar = true;

while (continuar) {
    let confirmacion = confirm('hola ' + nombre + ', prosigamos con tu compra?');

    if (!confirmacion) {
        break;
    }



    class Mueble {

        constructor(tipo, material, valoracion, precio) {
            this.tipo = tipo;
            this.material = material;
            this.valoracion = valoracion;
            this.precio = precio;
        }

    }
    const muebles = [
        new Mueble('Mesa', 'Pino', 8, 15000),
        new Mueble('Rack', 'Pino', 9, 10000),
        new Mueble('Sillon', 'Tela', 10, 280000),
        new Mueble('Mesa de Luz', 'Melamina', 10, 5000),
        new Mueble('Respaldar', 'Melamina', 10, 25000)
    ]
    console.log(muebles);

    let criterio = prompt('Ordena tu busqueda:\n1 - Tipo (A a Z) \n2 - Varolacion \n3 - Precio');

    function ordenar(criterio, array) {
        let arrayOrdenado = array.slice(0);


        switch (criterio) {
            case '1':
                let nombreAscendente = arrayOrdenado.sort((a, b) => a.tipo.localeCompare(b.tipo));
                return nombreAscendente;
            case '2':
                return arrayOrdenado.sort((a, b) => b.valoracion - a.valoracion);
            case '3':
                return arrayOrdenado.sort((a, b) => a.precio - b.precio);
            default:
                alert('Criterio Invalido');
                break;
        }
    }


    function crearStringResultado(array) {
        let info = '';

        array.forEach(elemento => {
            info += 'Tipo: ' + elemento.tipo + '\nMaterial: ' + elemento.material + '\nValaoracion: ' + elemento.valoracion + '\nPrecio: ' + elemento.precio + ' puntos.\n\n'
        })

        return info;
    }

    alert(crearStringResultado(ordenar(criterio, muebles)));

    let total = 0;

    function agregarPrecioMueble(mueble) {
        const muebleEncontrado = muebles.find((m) => m.tipo.toLowerCase() === mueble.toLowerCase());

        if (muebleEncontrado) {
            total += muebleEncontrado.precio;
            return true;
        } else {
            return false;
        }
    }

    let tipoMueble = prompt('Escribí el mueble que buscas');
    let muebleEncontrado = agregarPrecioMueble(tipoMueble);

    if (!muebleEncontrado) {
        alert('Perdon, pero no contamos con ese tipo de Mobiliaro');
    } else {
        alert('Se ha agregado el mueble al carrito. Total actual: $' + total);
    }

    // Aquí puedes agregar más lógica si deseas agregar más muebles al carrito

    function sumar() {
        let descuento = total * 0.85;

        let pagoEfectivo = prompt("Abona en efectivo? ");

        if (pagoEfectivo.toLowerCase() === "si") {
            alert("Ha obtenido un descuento del 15%. Su monto a abonar es: $" + descuento);
        } else {
            alert("Su monto a abonar es: $" + total);
        }
    }

    sumar();

}

alert('Gracias por visitar Papel Madera. ¡Hasta pronto!');
