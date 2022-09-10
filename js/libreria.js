/* ========== RECUPERAR ESTADO DE REGISTRO ========== */
let recuperoLocalS= JSON.parse(localStorage.getItem('dato')) || []

/* == LIBRERÍA: TOADTIFY JS== */
Toastify({
    text: `¡Bienvenido, ${recuperoLocalS[0].nombre}!`,
    duration: 3000
}).showToast(); 




