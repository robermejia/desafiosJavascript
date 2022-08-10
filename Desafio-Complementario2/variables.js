class ServicioIntegral {
    constructor(opciones, desayuno, comida, precio) {
        this.opciones = opciones;
        this.desayuno = desayuno;
        this.comida = comida;
        this.precio = precio
    }
}

let servicio1 = new ServicioIntegral(1, "Pan con Chicharon", "Ceviche", 38);
let servicio2 = new ServicioIntegral(2, "Pan con Pejerrey", "Pollo a la Brasa", 35);
let servicio3 = new ServicioIntegral(3, "Butifarra", "Causa Rellena", 42);
let servicio4 = new ServicioIntegral(4, "Salchicha Huachana", "Papa a la Huancaina", 39);
let servicio5 = new ServicioIntegral(5, "Tamal", "Aji de Gallina", 34);

let servicios = [servicio1, servicio2, servicio3, servicio4, servicio5];

let carritoDeCompra = [];

let comprado = true;




