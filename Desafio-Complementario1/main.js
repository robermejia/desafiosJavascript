// ALGORITMO DONDE PIDE INGRESAR NÚMERO DEL 1 AL 9. 
// CADA OPCIÓN NÚMERO TIENE DESAYUNO CON SU PRECIO Y VA SUMANDO AL DAR ACEPTAR.
// SALE DEL BUCLE AL TECLEAR "N".
// POSTERIORMENTE ARROJA LA SUMA DE LOS DESAYUNOS ACEPTADOS.
// SI ELIGE OTRA OPCIÓN LE ARROJA ESTA OPCIÓN NO ES VALIDA.

let panConChicharon = 2;
let panConPejerrey = 3;
let butifarra = 2;
let salchichaHuachana = 2;
let Sangrecita = 2.5;
let lomoAlJugo = 3;
let caldoDeCabeza = 2.5;
let tamal = 2;
let humita = 2;
let cuenta = 0;

let desayunoIngresado = prompt("La gastronomía peruana también se disfruta por las mañanas." + "\n" +
"Elige una opción y darle 'N' para salir." 
    + "\n" + "\n" +
    "1: Pan con chicharrón     S./ 2.00"   + "\n" +
    "2: Pan con pejerrey     S./ 3.00"     + "\n" +
    "3: Butifarra     S./ 2.00"            + "\n" +
    "4: Salchicha huachana     S./ 2.00"   + "\n" +
    "5: Sangrecita     S./ 2.50"           + "\n" +
    "6: Lomo al jugo     S./ 3.00"         + "\n" +
    "7: Caldo de cabeza     S./ 2.50"      + "\n" +
    "8: Tamal     S./ 2.00"                + "\n" +
    "9: Humita     S./ 2.00"  
    );
while (desayunoIngresado != "N") {
    switch (desayunoIngresado) {
        case "1":
            cuenta += panConChicharon;
            alert("¡EXELENTE OPCIÓN!" + "\n" + "\n" + 
            "1: Pan con chicharrón"   + "\n" +
            "S./ 2.00"                + "\n" + "\n" +
            "Es de los desayunos más deseados. Los comensales suelen pedirlo en formato de sándwich, el cual incluye camote frito, morcilla y zarza criolla. El Pan con chicharrón va perfecto con un vaso de café con leche o con jugo natural.");
            break;
        case "2":
            cuenta += panConPejerrey;
            alert("¡EXELENTE OPCIÓN!" + "\n" + "\n" + 
            "2: Pan con pejerrey"     + "\n" +
            "S./ 3.00"                + "\n" + "\n" +
            "Es un platillo muy solicitado en zonas costeras, donde se pesca el pejerrey fresco.");
            break;
        case "3":
            cuenta += butifarra;
            alert("¡EXELENTE OPCIÓN!" + "\n" + "\n" + 
            "3: Butifarra"            + "\n" +
            "S./ 2.00"                + "\n" + "\n" +
            "El ingrediente principal para la Butifarra peruana es el jamón del país.");
            break;
        case "4":
            cuenta += salchichaHuachana;
            alert("¡EXELENTE OPCIÓN!" + "\n" + "\n" + 
            "4: Salchicha huachana"   + "\n" +
            "S./ 2.00"                + "\n" + "\n" +
            "Este embutido le debe su peculiar nombre a la ciudad de Huacho, provincia norteña donde se hizo popular. Está hecho de carne, grasa de cerdo y semillas de achiote, que le otorgan su característico color anaranjado. Se puede comer frito, combinado con pan, o revuelto con huevo. Se puede acompañar con café o jugo natural.");
            break;
        case "5":
            cuenta += Sangrecita;
            alert("¡EXELENTE OPCIÓN!" + "\n" + "\n" + 
            "5: Sangrecita"           + "\n" + 
            "S./ 2.50"                + "\n" + "\n" +
            "Alimento muy nutritivo, que se utiliza en el país para combatir la anemia.");
            break;
        case "6":
            cuenta += lomoAlJugo;
            alert("¡EXELENTE OPCIÓN!" + "\n" + "\n" + 
            "6: Lomo al jugo"         + "\n" +
            "S./ 3.00"                + "\n" + "\n" +
            "Si eres un amante del Lomo saltado, vas a disfrutar como nadie de este desayuno. El Lomo al jugo es un émulo del Lomo saltado. Ya lo verás.");
            break;
        case "7":
            cuenta += caldoDeCabeza;
            alert("¡EXELENTE OPCIÓN!" + "\n" + "\n" + 
            "7: Caldo de cabeza"      + "\n" +
            "S./ 2.50"                + "\n" + "\n" +
            "Esta sopa es reponedora, sobre todo después de una jornada de desvelo. Su elaboración es laboriosa, pero el resultado es espectacular.");
            break;
        case "8":
            cuenta += tamal;
            alert("¡EXELENTE OPCIÓN!" + "\n" + "\n" + 
            "8: Tamal"                + "\n" + 
            "S./ 2.00"                + "\n" + "\n" +
            "Este preparado a base de maíz es típico de un desayuno familiar de domingo.");
            break;
        case "9":
            cuenta += humita;
            alert("¡EXELENTE OPCIÓN!" + "\n" + "\n" + 
            "9: Humita"               + "\n" +
            "S./ 2.00"                + "\n" + "\n" +
            "Es la ‘hermana’ del tamal, aunque su sabor puede ser salado o dulce. Elaborada a base de maíz, su contenido puede variar. En las Humitas saladas, viene queso y carne de pollo o de  chancho. En las dulces, en cambio, solo se mezcla el maíz con el azúcar.");
            break;
        default:
            alert("ELIGIO UNA OPCIÓN NO VALIDA");
            break;
    }
    desayunoIngresado = prompt("Elige una opción y darle 'N' para salir." 
    + "\n" + "\n" +
    "1: Pan con chicharrón     S./ 2.00"   + "\n" +
    "2: Pan con pejerrey     S./ 3.00"     + "\n" +
    "3: Butifarra     S./ 2.00"            + "\n" +
    "4: Salchicha huachana     S./ 2.00"   + "\n" +
    "5: Sangrecita     S./ 2.50"           + "\n" +
    "6: Lomo al jugo     S./ 3.00"         + "\n" +
    "7: Caldo de cabeza     S./ 2.50"      + "\n" +
    "8: Tamal     S./ 2.00"                + "\n" +
    "9: Humita     S./ 2.00"  
    );
}
alert("La cuenta seria de: S./ " + cuenta);
























// Enlace de referencia de los desayunos
// https://www.peru.travel/es/masperu/animate-a-probar-los-desayunos-peruanos-mas-representativos 