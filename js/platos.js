const stockPlatos = [
    // comidas
    {id: 1, nombre: "Arroz chaufa", tipo: "comida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 30, img: "img/comidas/Arroz-chaufa.webp"},
    {id: 2, nombre: "Brocheta de pollo" , tipo: "comida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 30, img: "img/comidas/Brocheta-de-pollo.webp"},
    {id: 3, nombre: "Cebiche de caballa", tipo: "comida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 35, img: "img/comidas/Ceviche-de-Caballa.webp"},
    {id: 4, nombre: "Chicharon de calamar", tipo: "comida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 20, img: "img/comidas/Chicharron-de-calamar.webp"},
    {id: 5, nombre: "Juane", tipo: "comida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 20, img: "img/comidas/Juane-peruano.webp"},
    {id: 6, nombre: "Pavo al horno", tipo: "comida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 35, img: "img/comidas/Pavo-al-horno-de-Navidad.webp"},
    {id: 7, nombre: "Picaña a la parrilla", tipo: "comida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 25, img: "img/comidas/Picana-a-la-parrilla.webp"},
    {id: 8, nombre: "Picante de mariscos", tipo: "comida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 35, img: "img/comidas/Picante-de-Mariscos-peruano.webp"},
    {id: 9, nombre: "Seco de carne", tipo: "comida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 30, img: "img/comidas/Seco-de-carne.webp"},
    // postres
    {id: 10, nombre: "Alfajores" , tipo: "postre", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 5, img: "img/postres/Alfajores.webp"},
    {id: 11, nombre: "Arroz con leche", tipo: "postre", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 5, img: "img/postres/Arroz-con-leche.webp"},
    {id: 12, nombre: "Besos de moza", tipo: "postre", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 8, img: "img/postres/Besos-de-moza.webp"},
    {id: 13, nombre: "Budin de pan", tipo: "postre", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 6, img: "img/postres/Budin-de-pan.webp"},
    {id: 14, nombre: "Keke de naranja", tipo: "postre", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 7, img: "img/postres/Keke-de-naranja-y-chocolate.webp"},
    {id: 15, nombre: "Mazamorra morada", tipo: "postre", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 5, img: "img/postres/Mazamorra-morada.webp"},
    {id: 16, nombre: "Picarones", tipo: "postre", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 9, img: "img/postres/Picarones-peruanos.webp"},
    {id: 17, nombre: "Pionono", tipo: "postre", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 8, img: "img/postres/Piono-peruano.webp"},
    {id: 18, nombre: "Torta helada", tipo: "postre", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 8, img: "img/postres/Torta-helada.webp"},
    // bebidas
    {id: 19, nombre: "Aguajina", tipo: "bebida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 10, img: "img/bebidas/Aguajina.webp"},
    {id: 20, nombre: "Chocolate navideño", tipo: "bebida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 10, img: "img/bebidas/Chocolate-Navideño-peruano.webp"},
    {id: 21, nombre: "Coctel de fresa", tipo: "bebida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 15, img: "img/bebidas/Coctel-de-fresa-con-pisco-peruano.webp"},
    {id: 22, nombre: "Coctel de Machu Picchu", tipo: "bebida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 15, img: "img/bebidas/Coctel-Machu-Picchu.webp"},    
    {id: 24, nombre: "Cremolada", tipo: "bebida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 15, img: "img/bebidas/Cremolada-peruana-casera.webp"},
    {id: 23, nombre: "Maracuya", tipo: "bebida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 12, img: "img/bebidas/Maracuya-Sour.webp"},
    {id: 25, nombre: "Ponche de habas", tipo: "bebida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 11, img: "img/bebidas/Ponche-de-habas-peruano.webp"},
    {id: 26, nombre: "Refresco de carambola", tipo: "bebida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 12, img: "img/bebidas/Refresco-de-carambola.webp"},
    {id: 27, nombre: "Refresco de cocona", tipo: "bebida", descripcion: "Como toda nuestra cocina, hay infinidades de formas de preparar un plato. Los ingredientes pueden ser reemplazados, restados, sumados y adaptados.", precio: 13, img: "img/bebidas/Refresco-de-cocona.webp"}
]
