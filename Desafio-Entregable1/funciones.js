const funcionPrincipal = () => {
    let ingreseNumero = prompt(opcionesPrincipal);
        switch (ingreseNumero) {
        case "1":
            funcionDesayuno();
            break;
        case "2":
            funcionAlmuerzo();
            break;
        case "3":
            break;
        default:
            alert(mensajeError);
        }   
}

const funcionDesayuno = () => {
    let ingreseNumero = prompt(opcionesDesayuno);
    while (ingreseNumero != "8") {
        switch (ingreseNumero) {
        case "1":
            cuentaDesayuno += panConChicharon;
            alert(panConChicharonDescripción);
            break;
        case "2":
            cuentaDesayuno += panConPejerrey;
            alert(panConPejerreyDescripción);
            break;
        case "3":
            cuentaDesayuno += butifarra;
            alert(butifarraDescripción);
            break;
        case "4":
            cuentaDesayuno += salchichaHuachana;
            alert(salchichaHuachanaDescripción);
            break;
        case "5":
            cuentaDesayuno += lomoAlJugo;
            alert(lomoAlJugoDescripción);
            break;
        case "6":
            cuentaDesayuno += tamal;
            alert(tamalDescripción);
            break;
        case "7":
            cuentaDesayuno += humita;
            alert(humitaDescripción);
            break;
        default:
            alert(mensajeError);
            break;
        }
        ingreseNumero = prompt(opcionesDesayuno);
    }
    cuentaDesayunoSuma = cuentaDesayuno;
    alert(mensajeCuentaDesayuno + cuentaDesayunoSuma);
    funcionFinal();
}


const funcionAlmuerzo = () => {
    let ingreseNumero = prompt(opcionesAlmuerzo);
    while (ingreseNumero != "8") {
        switch (ingreseNumero) {
        case "1":
            cuentaAlmuerzo += ceviche;
            alert(cevicheDescripcion);
            break;
        case "2":
            cuentaAlmuerzo += polloALaBrasa;
            alert(polloALaBrasaDescripcion);
            break;
        case "3":
            cuentaAlmuerzo += causaRellena;
            alert(causaRellenaDescripcion);
            break;
        case "4":
            cuentaAlmuerzo += papaALaHuancaina;
            alert(papaALaHuancainaDescripcion);
            break;
        case "5":
            cuentaAlmuerzo += ajiDeGallina;
            alert(ajiDeGallinaDescripcion);
            break;
        case "6":
            cuentaAlmuerzo += anticuchos;
            alert(anticuchosDescripcion);
            break;
        case "7":
            cuentaAlmuerzo += lomoSaltado;
            alert(lomoSaltadoDescripcion);
            break;
        default:
            alert(mensajeError);
            break;    
        }
        ingreseNumero = prompt(opcionesAlmuerzo);
    }
    cuentaAlmuerzoSuma = cuentaAlmuerzo;
    alert(mensajeCuentaAlmuerzo + cuentaAlmuerzoSuma);
    funcionFinal();
}

const funcionFinal = () => {
    let ingreseNumero = prompt(opcionesFinales);
    switch (ingreseNumero) {
        case "1":
            funcionPrincipal();
            break;
        case "2":
            cuentaTotal = cuentaDesayunoSuma + cuentaAlmuerzoSuma;
            alert(mensajeCuentaDesayuno + cuentaDesayunoSuma + "\n" + 
            mensajeCuentaAlmuerzo + cuentaAlmuerzoSuma + "\n" +
            mensajeCuentaTotal + cuentaTotal); 
            break;
        default:
            alert(mensajeError);
    }   
}

