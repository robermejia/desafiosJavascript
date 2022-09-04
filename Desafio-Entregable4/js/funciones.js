/* ////////////////////////////// FILTRO ////////////////////////////// */
$tipoDeConsumo.addEventListener('change',()=>{
    if($tipoDeConsumo.value == 'all'){ 
        mostrarPlatos(stockPlatos)
    }else{
        mostrarPlatos(stockPlatos.filter(item=> item.tipo == $tipoDeConsumo.value))
    }
})
/* ////////////////////////////// FILTRO 2 ////////////////////////////// */
const filtrar = document.querySelector('#filtrando');
    filtrar.addEventListener('click', () => {
        const desde = document.querySelector('#desde').value;
        const hasta = document.querySelector('#hasta').value;
        
        const encontrados = stockPlatos.filter( ( { precio } ) => {
            return  Number(precio) >= desde && Number(precio) <= hasta;
        });
        mostrarPlatos(encontrados);
    })
    
/* ////////////////////////////// BUSCADOR ////////////////////////////// */
$buscador.addEventListener('input',()=>{
    mostrarPlatos(stockPlatos.filter(item=> item.nombre.toLowerCase().includes($buscador.value.toLowerCase())))
})

/* ////////////////////////////// CARDS ////////////////////////////// */
const mostrarPlatos = (array) => {
    $contenedorDeCards.innerHTML = ''
    array.forEach(item => {
        let div = document.createElement('div')
        div.className = "platos"
        div.innerHTML = `<div class="card shadow-sm">
                            <img src="${item.img}" alt="">
                            <div class="card-body">
                            <h5>${item.nombre}</h5>
                            <p class="card-text">${item.descripcion}</p>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" id="botonAgregar${item.id}" class="btn btn-primary">Agregar al carrito</button>
                                    </div>
                                    <small class="text-muted">S./${item.precio}</small>
                                </div>
                            </div>
                            </div>` 
                            $contenedorDeCards.appendChild(div)
                            
        let btnAgregar = document.getElementById(`botonAgregar${item.id}`); 
        btnAgregar.addEventListener('click',() => {
            agregarAlCarrito(item.id);
        })
    })
}
mostrarPlatos(stockPlatos);

/* ////////////////////////////// CARRITO DE COMPRAS ////////////////////////////// */
const mostrarEnCarrito = (platoAgregar) => {
    let div = document.createElement('div')
    div.setAttribute('class', 'carrito') 
    div.innerHTML= `<li class="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 class="my-0">${platoAgregar.nombre}</h6>
                        </div>
                        <p id="cant${platoAgregar.id}">cantidad:${platoAgregar.cantidad}</p>
                        <i class="bi bi-trash" id="eliminar${platoAgregar.id}"></i>
                        <span class="text-muted">S./${platoAgregar.precio}</span>
                    </li>` 
    $contenedorDeCarrito.appendChild(div)
    
    let btnEliminar = document.getElementById(`eliminar${platoAgregar.id}`) 
    btnEliminar.addEventListener('click',() => {
        if(platoAgregar.cantidad == 1) {
            carritoDeCompras = carritoDeCompras.filter(item => item.id !== platoAgregar.id)
            btnEliminar.parentElement.remove()
            actualizarCarrito()
        }else{
            platoAgregar.cantidad = platoAgregar.cantidad - 1
            document.getElementById(`cant${platoAgregar.id}`).innerHTML = `<p id="cant${platoAgregar.id}">cantidad:${platoAgregar.cantidad}</p>`
            actualizarCarrito()
        }
    })    
}


const agregarAlCarrito = (id) =>{
    let existe = carritoDeCompras.find(producto => producto.id == id)
    if(existe){
        existe.cantidad = existe.cantidad + 1
        document.getElementById(`cant${existe.id}`).innerHTML = `<p id="cant${existe.id}">cantidad:${existe.cantidad}</p>`
        actualizarCarrito()
    }else{
        let platoAgregar = stockPlatos.find(item => item.id == id)
        platoAgregar.cantidad = 1
        carritoDeCompras.push(platoAgregar);
        mostrarEnCarrito(platoAgregar)
        actualizarCarrito()
    }
}


/* ////////////////////////////// IGV - TOTAL ////////////////////////////// */
const actualizarCarrito = () =>{
    $contadorCarrito1.innerText = carritoDeCompras.reduce((acc,el) => acc + el.cantidad, 0)
    $contadorCarrito2.innerText = carritoDeCompras.reduce((acc,el) => acc + el.cantidad, 0)
    /* == PROBLEMA CON DECIMALES (A veces cuando va sumando y cambia de producto aparece mas de 2 decimales) == */
    $precioTotal.innerText = carritoDeCompras.reduce((acc,el) => acc + ((el.precio + ((el.precio * 0.18) / 100)).toFixed(2) * el.cantidad), 0)
    $igv.innerText = 0.18
   
}