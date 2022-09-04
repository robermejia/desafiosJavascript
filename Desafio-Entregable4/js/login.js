let datos = []
let btnRegistro = document.getElementById('registro')
let btnIngreso = document.getElementById('ingreso')

class Usuario {
    constructor(nombre, apellido, usuario, contraseña, email) {
        this.nombre = nombre
        this.apellido = apellido
        this.usuario = usuario
        this.contraseña = contraseña
        this.email = email
    }
}

const ingresar = (e) => {
    e.preventDefault()
    const usuario = document.getElementById('usuario').value
    const contraseña = document.getElementById('contraseña').value
    let validacion = validarIngreso(usuario, contraseña)
    let recuperoLocalS = JSON.parse(localStorage.getItem('dato'))

    if (validacion) {
        if ((recuperoLocalS[0].usuario == usuario) && (recuperoLocalS[0].contraseña == contraseña)) {
            document.getElementById('usuario').value = "";
            document.getElementById('contraseña').value = "";
            /* == REDIRIGIENDO == */
            setTimeout(() => {
                window.location.href = "comidas.html";
            }, 500)
        } else {
            /* == LIBRERÍA == */
            // alert('Vete intruso!')
            Swal.fire({
                title: '¡USTED INGRESO UN USUARIO O UNA CONTRASEÑA NO VALODOS!',
                text: 'Intente nuevamente',
            })
        }
    } else {
        // alert('lo siento algo debe estar mal!')
        Swal.fire({
            title: '¡TODOS LOS CAMPOS DEBEN ESTAR LLENOS!',
            text: 'Intente nuevamente',
        })
    }
}

if (btnRegistro) {
    btnRegistro.addEventListener('click', (e) => {
        e.preventDefault()
        const nombreRegistrado = document.getElementById('nombreRegistrado').value
        const apellidoRegistrado = document.getElementById('apellidoRegistrado').value
        const usuarioRegistrado = document.getElementById('usuarioRegistrado').value
        const contraseñaRegistrada = document.getElementById('contraseñaRegistrada').value
        const emailRegistrado = document.getElementById('emailRegistrado').value
        // ESTE ALERT SE APLICA PERO SE CORTA LA ANIMACIÓN PORQUE CAMBIA DE PAGINA        
        validar(nombreRegistrado, apellidoRegistrado, usuarioRegistrado, contraseñaRegistrada, emailRegistrado);
        setTimeout(() => {
            alert("Registrado");
        }, 500)
    })
} else {
    btnIngreso.addEventListener('click', ingresar)
}

const validar = (nombreRegistrado, apellidoRegistrado, usuarioRegistrado, contraseñaRegistrada, emailRegistrado) => {
    if (nombreRegistrado == "" || apellidoRegistrado == "" || usuarioRegistrado == "" || contraseñaRegistrada == "" || emailRegistrado == "") {
        // alert('los campos no deben estar vacio');
        // LIBRERÍA
        Swal.fire({
            title: '¡TODOS LOS CAMPOS DEBEN ESTAR LLENOS!',
            text: 'Intente nuevamente',
        })

    } else if (contraseñaRegistrada.length < 6) {
        // alert('la contraseña debe ser mayor a 6 digitos')
        Swal.fire({
            title: '¡LA CONTRASEÑA DEBE SER MAYOR A 6 DIGITOS!',
            text: 'Intente nuevamente',
        })
    } else {
        datos.push(new Usuario(nombreRegistrado, apellidoRegistrado, usuarioRegistrado, contraseñaRegistrada, emailRegistrado))
        localStorage.setItem('dato', JSON.stringify(datos))
        document.getElementById('nombreRegistrado').value = ""
        document.getElementById('apellidoRegistrado').value = ""
        document.getElementById('usuarioRegistrado').value = ""
        document.getElementById('contraseñaRegistrada').value = ""
        document.getElementById('emailRegistrado').value = ""

        /* == REDIRIGIENDO == */
        setTimeout(() => {
            window.location.href = "iniciar-sesion.html";
        }, 1000)
    }
}


const validarIngreso = (usuario, contraseña) => {
    if (usuario == "" || contraseña == "") {
        return false
    } else {
        return true
    }
}