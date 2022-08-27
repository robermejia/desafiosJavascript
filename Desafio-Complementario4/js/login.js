let datos = []
let btnRegistro = document.getElementById('registro')
let btnIngreso = document.getElementById('ingreso')

class Usuario{
    constructor(nombre, apellido, usuario, contraseña, email) {
        this.nombre = nombre
        this.apellido = apellido
        this.usuario = usuario
        this.contraseña = contraseña
        this.email = email
    }
}

if(btnRegistro) {
    btnRegistro.addEventListener('click', ()=>{
        const nombreRegistrado = document.getElementById('nombreRegistrado').value
        const apellidoRegistrado = document.getElementById('apellidoRegistrado').value
        const usuarioRegistrado = document.getElementById('usuarioRegistrado').value
        const contraseñaRegistrada = document.getElementById('contraseñaRegistrada').value
        const emailRegistrado = document.getElementById('emailRegistrado').value        
        validar(nombreRegistrado,apellidoRegistrado,usuarioRegistrado,contraseñaRegistrada,emailRegistrado);

        alert("Registrado");       
    })

}else {
    btnIngreso.addEventListener('click', ingresar)    
}

function validar(nombreRegistrado, apellidoRegistrado, usuarioRegistrado, contraseñaRegistrada, emailRegistrado){
    if(nombreRegistrado == "" || apellidoRegistrado == "" || usuarioRegistrado == "" || contraseñaRegistrada == "" || emailRegistrado == ""){
        Swal.fire({
            icon: 'error',
            title: '¡ALGO DEBE ESTAR MAL!',
            text: 'Usted ingreso un usuario o contraseña no validos',
        })
        // alert('los campos no deben estar vacio')     
    }else if(contraseñaRegistrada.length < 6){
        alert('la contraseña debe ser mayor a 6 digitos')
    }else{
        datos.push(new Usuario(nombreRegistrado,apellidoRegistrado,usuarioRegistrado,contraseñaRegistrada,emailRegistrado))

        localStorage.setItem('dato', JSON.stringify(datos))
        
        document.getElementById('nombreRegistrado').value = ""
        document.getElementById('apellidoRegistrado').value = ""
        document.getElementById('usuarioRegistrado').value = ""
        document.getElementById('contraseñaRegistrada').value= ""
        document.getElementById('emailRegistrado').value = ""
    }
        /* == REDIRIGIENDO == */
        window.location.href = "iniciar-sesion.html"; 
}

function ingresar(e){
    e.preventDefault()
    const usuario = document.getElementById('usuario').value
    const contraseña = document.getElementById('contraseña').value
    let validacion = validarIngreso(usuario,contraseña)
    let recuperoLocalS= JSON.parse(localStorage.getItem('dato'))
   
    if(validacion){
        if((recuperoLocalS[0].usuario == usuario) && (recuperoLocalS[0].contraseña == contraseña)){
            document.getElementById('usuario').value = "";
            document.getElementById('contraseña').value="";
            /* == REDIRIGIENDO == */
            window.location.href = "comidas.html";         
        }else{
            /* == LIBRERÍA == */
            Swal.fire({
                icon: 'error',
                title: '¡ERROR NO PUEDE INGRESAR!',
                text: 'Usted ingreso un usuario o contraseña no validos',
            })
            // alert('Vete intruso!')
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: '¡ALGO DEBE ESTAR MAL!',
            text: 'Usted ingreso un usuario o contraseña no validos',
        })
        // alert('lo siento algo debe estar mal!')
    }
    
}

function validarIngreso(usuario,contraseña) {
    if(usuario == "" || contraseña == ""){
        return false
    }else{
        return true
    }
}