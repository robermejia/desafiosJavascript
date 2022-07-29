// MENSAJES
let presentacion = "En los siguiente mensajes tiene una lista con números. Elija uno";

let opcionesPrincipal =   
"= MENÚ PRINCIPAL ="                   + "\n" +
"1: Para ver la lista de desayunos."   + "\n" + 
"2: Para ver la lista de almuerzos"    + "\n" + 
"3: Para Salir."; 

let opcionesFinales =
"= MENÚ OPCIONAL ="                   + "\n" +
"1: Volver a ver la lista principal"   + "\n" + 
"2: Para Salir."; 

// MENSAJES CUENTAS
let mensajeCuentaDesayuno =
"Su cuenta en el desayuno es de S./ "; 

let mensajeCuentaAlmuerzo =
"Su cuenta en el almuerzo es de S./ "; 

let mensajeCuentaTotal =
"Su cuenta total es de S./ "; 

let mensajeError =
"Usted ingreso un dato no valido ";

let opcionesDesayuno = 
"= MENÚ DESAYUNO ="                    + "\n" +  
"1: Pan con chicharrón     S./ 2.00"   + "\n" +
"2: Pan con pejerrey       S./ 3.00"   + "\n" +
"3: Butifarra              S./ 2.00"   + "\n" +
"4: Salchicha huachana     S./ 2.00"   + "\n" +
"5: Lomo al jugo           S./ 3.00"   + "\n" +
"6: Tamal                  S./ 2.00"   + "\n" +
"7: Humita                 S./ 2.00"   + "\n" +
"8: Para salir.";

let opcionesAlmuerzo = 
"= MENÚ ALMUERZO ="                    + "\n" +  
"1: Ceviche                S./ 35.00"  + "\n" + 
"2: Polloa la aBrasa       S./ 25.00"  + "\n" +
"3: CausaRellena           S./ 24.00"  + "\n" +
"4: Papa a la Huancaina    S./ 23.00"  + "\n" +
"5: Ají de Gallina         S./ 25.00"  + "\n" +
"6: Anticuchos             S./ 15.00"  + "\n" +
"7: Lomo Saltado           S./ 35.00"  + "\n" +
"8: Para salir.";            

// CALCULOS
let cuentaDesayuno = 0;
let cuentaAlmuerzo = 0;
let cuentaDesayunoSuma = 0;
let cuentaAlmuerzoSuma = 0;
let cuentaTotal = cuentaDesayunoSuma + cuentaAlmuerzoSuma;

// DESAYUNO
let panConChicharon = 2;
let panConPejerrey = 3;
let butifarra = 2;
let salchichaHuachana = 2;
let lomoAlJugo = 3;
let tamal = 2;
let humita = 2;

// ALMUERZO
let ceviche = 35;
let polloALaBrasa = 25;
let causaRellena = 24;
let papaALaHuancaina = 23;
let ajiDeGallina = 25;
let anticuchos = 15;
let lomoSaltado = 35;

// DESCRIPCIÓN DESAYUNO
let panConChicharonDescripción = 
"1: Pan con chicharrón     S./ 2.00"   + "\n" + 
"Es de los desayunos más deseados. Los comensales suelen pedirlo en formato de sándwich, el cual incluye camote frito, morcilla y zarza criolla. El Pan con chicharrón va perfecto con un vaso de café con leche o con jugo natural.";

let panConPejerreyDescripción = 
"2: Pan con pejerrey       S./ 3.00"   + "\n" +
"Es un platillo muy solicitado en zonas costeras, donde se pesca el pejerrey fresco.";

let butifarraDescripción = 
"3: Butifarra              S./ 2.00"   + "\n" +
"El ingrediente principal para la Butifarra peruana es el jamón del país.";

let salchichaHuachanaDescripción = 
"4: Salchicha huachana     S./ 2.00"   + "\n" +
"Este embutido le debe su peculiar nombre a la ciudad de Huacho, provincia norteña donde se hizo popular. Está hecho de carne, grasa de cerdo y semillas de achiote, que le otorgan su característico color anaranjado. Se puede comer frito, combinado con pan, o revuelto con huevo. Se puede acompañar con café o jugo natural.";

let lomoAlJugoDescripción = 
"5: Lomo al jugo           S./ 3.00"   + "\n" +
"Si eres un amante del Lomo saltado, vas a disfrutar como nadie de este desayuno. El Lomo al jugo es un émulo del Lomo saltado. Ya lo verás.";

let tamalDescripción = 
"6: Tamal                  S./ 2.00"   + "\n" +
"Este preparado a base de maíz es típico de un desayuno familiar de domingo.";

let humitaDescripción = 
"7: Humita                 S./ 2.00"   + "\n" +
"Es la ‘hermana’ del tamal, aunque su sabor puede ser salado o dulce. Elaborada a base de maíz, su contenido puede variar. En las Humitas saladas, viene queso y carne de pollo o de  chancho. En las dulces, en cambio, solo se mezcla el maíz con el azúcar.";


// DESCRIPCIÓN ALMUERZO

let cevicheDescripcion = 
"1: Ceviche                S./ 35.00"  + "\n" + 
"El representante gastronómico peruano más reconocido a nivel internacional. Motivo de orgullo y símbolo de identidad nacional. Es tanto su éxito que es servido con diversas variaciones en otros países de Latinoamérica.";

let polloALaBrasaDescripcion = 
"2: Polloa la aBrasa       S./ 25.00"  + "\n" +
"Este plato típico de bandera es el más consumido en el Perú, su exquisito sabor hace que sea el favorito cuando las familias peruanas se reúnen. El pollo macerado es cocinado a las brasas en un horno especial,";

let causaRellenaDescripcion = 
"3: CausaRellena           S./ 24.00"  + "\n" +
"Normalmente se puede encontrar este plato en 2 presentaciones: “Causa rellena de pollo” y “Causa rellena de atún”, siendo las dos sumamente deliciosas.";

let papaALaHuancainaDescripcion = 
"4: Papa a la Huancaina    S./ 23.00"  + "\n" +
"Se puede consumir como entrada o como plato de fondo. Este exquisito platillo tiene sus orígenes en la ciudad de Huancayo, departamento de Junín.";

let ajiDeGallinaDescripcion = 
"5: Ají de Gallina         S./ 25.00"  + "\n" +
"Es un plato fusión de ingredientes quechuas y españoles. Este manjar típico de la gastronomía peruana consta de una crema espesa hecha con gallina desmenuzada, pan, ají verde, leche y caldo.";

let anticuchosDescripcion = 
"6: Anticuchos             S./ 15.00"  + "\n" +
"Hechos en base a corazón de res, aunque no suene muy apetitoso, ¡es realmente delicioso! Ensartados en palos de caña y aderezados con ají panca, los anticuchos suelen servirse acompañados de choclo, papas doradas o sancochadas y ají. ";

let lomoSaltadoDescripcion = 
"7: Lomo Saltado           S./ 35.00"  + "\n" +
"Un tradicional platillo criollo del Perú. Hecho en base a trozos de carne, cebolla, tomate y papas fritas. Particular por su distinta técnica de preparación, colocando todos los ingredientes en la sartén bien caliente y sazonando con pimienta, ajinomoto y comino.";





