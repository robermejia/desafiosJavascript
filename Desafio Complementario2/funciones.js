const mostrarMenuPrincipal = () => {
    let mensaje = "ELIJA UNA DE LAS SIGUIENTES OPCIONES:" + "\n"
    servicios.forEach(serv => {
        mensaje += `Opción ${serv.opciones}: ${serv.desayuno} - ${serv.comida} - S./ ${serv.precio}` + "\n"
    })
    mensaje += `Opción 0: Salir del menú sin comprar nada.`
    let opcion = Number(prompt(mensaje))
    return opcion;
}

const mostrarMensajeCarrito = () => {
    let mensajeCarrito = "";
    if (carritoDeCompra.length > 0) {
        carritoDeCompra.forEach(serv => {
            mensajeCarrito += `USTED ELEGIO LA OPCIÓN: ${serv.opciones}` + "\n" + `Desayuno: ${serv.desayuno} - Almuerzo: ${serv.comida}` + "\n" + `Total: S./ ${serv.cantidad * serv.precio}` + "\n"
        })
        mensajeCarrito += `TOTAL DE LA COMPRA: S./ ${carritoDeCompra.reduce((total,serv) => total + (serv.precio * serv.cantidad),0)}` + "\n"
        alert(mensajeCarrito)
    } else {
        mensajeCarrito += 'Hoy no realizo ninguna compra.'
        alert(mensajeCarrito)
    }
}

const comprarComida = () => {
    while (comprado) {
        let opcion = mostrarMenuPrincipal();
    
        if (opcion >= 1 && opcion <= 5) {
            let servicioElegido = servicios.find((serv) => serv.opciones === opcion);
            if (carritoDeCompra.length === 0) {
                servicioElegido.cantidad = 1;
                carritoDeCompra.push(servicioElegido);
            } else {
                let servicioCarrito = carritoDeCompra.find((serv) => serv.opciones === opcion);
                if (servicioCarrito) {
                    servicioCarrito.cantidad++;
                } else {
                    servicioElegido.cantidad = 1;
                    carritoDeCompra.push(servicioElegido);
                }
            }
        } else {
            comprado = false;
        }
    }
    
    mostrarMensajeCarrito();
}
