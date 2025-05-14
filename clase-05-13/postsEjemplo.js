function obtenerUsuario() {
    return new Promise((resolve) => {
        setTimeout(()=> resolve({id:124, nombre:'Jose'}), 2000)
    })
}

function obtenerPublicaciones(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve([
            {id:123, titulo:'Post 1'},
            {id:124, titulo:'Post 2'}
        ]), 2000)
    })
}

obtenerUsuario()
    .then(usuario => {
        console.log('Usuario: ', usuario.nombre);
        return obtenerPublicaciones(usuario.id)
    })
    .then(publicaciones => {
        console.log('Publicacion del Usuario');
        publicaciones.forEach(post => {
            console.log('---', post.titulo);
        });
    })
    .catch((error)=> {
        console.error('Error: ', error);
    })

async function mostrarDatos() {
    try {
        const user = await obtenerUsuario();
        console.log('Usuario: ',user.nombre);
        
        const publicacion = await obtenerPublicaciones();
        console.log('Publicacion del Usuario');
        publicacion.forEach(post => {
            console.log('---', post.titulo);
        });

    } catch (error) {
        console.error('Error: ', error);
    }
}
mostrarDatos();