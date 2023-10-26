import { products } from './product.js';
// 1) Filtrar productos por categoría

const categoria1 = "men's clothing";
const categoria2 = "jewelery";

function filtrarCategorias(array, categoria1, categoria2) {
    return array.filter(producto => producto.category === categoria1 || producto.category === categoria2);
}

let productos = filtrarCategorias(products, categoria1, categoria2);
const products_names = productos.map(producto => producto.title);

function refactorizarProductos(array) {

    let list_products = "";
    array.sort();

    for (let i = 0; i < array.length; i++) {
        list_products += (i + 1) + ") " + array[i];

        if (i < array.length - 1) {
            list_products += "\n";
        }
    }

    return list_products;
}

let listaProductos = refactorizarProductos(products_names);


alert("Bienvenido a nuestra tienda en línea. ¡Gracias por visitarnos!");
alert("Categorías disponibles: \n Ropa de hombres \n Joyería");
let comprarProducto = parseInt(prompt("Por favor, elija un producto de la siguiente lista: \n ELEGIR EL PRODUCTO CON NÚMERO \n" + listaProductos));
if (isNaN(comprarProducto)) {
    alert("Muchas gracias por su visita!");
} else {
    while (comprarProducto < 1 || comprarProducto > 10) 
        comprarProducto = parseInt(prompt("Producto no encontrado. Por favor, ingrese numero del producto que desea \n" + listaProductos))
    }

    let productoSeleccionado;

//encuentra el producto y revela su informacion

    do {
        const nombreElegido = products_names[comprarProducto - 1];
        
        
        productoSeleccionado = productos.find(producto => producto.title === nombreElegido);

        if (productoSeleccionado) {
            const mensaje = `Nombre: ${productoSeleccionado.title} \n\n Descripción: ${productoSeleccionado.description} \n\n Precio: $${productoSeleccionado.price}`;
            const confirmarCompra = confirm(`Información del producto:\n\n${mensaje}\n\n¿Desea completar la compra?`);

//fechas de cuando lo reciba

            if (confirmarCompra) {
                const fechaActual = new Date();
                const fechaEntrega = new Date(fechaActual);
                fechaEntrega.setDate(fechaEntrega.getDate() + 2);
                alert("¡Gracias por su compra! La fecha estimada de entrega es: " + fechaEntrega);
            } else {
                alert("Muchas gracias por visitarnos");
            }
            } else {
                eleccionCompra = parseInt(prompt("Producto no encontrado. Por favor, ingrese numero del producto que desea:\n" + listaProductos));
            }
        } while (!productoSeleccionado);
        

