function obtenerProducto() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id:1, nombre:'Macbook Pro 13'},
                {id:2, nombre:'HP Notebook'}
            ])
        }, 1000);
    })
}

function obtenerInformacion() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve({id:1, descripcion: 'Laptop Ultimo Modelo', precio: 24000})
        },1000)
    })
}

async function mostrarInfo() {
    try {
        const producto = await obtenerProducto();
        console.log('Productos en Stock: ', producto);
        
        const primerProducto = producto[0]
        const detalle = await obtenerInformacion(primerProducto.id)
        console.log('Detalle del Producto', detalle);
    } catch (error) {
        console.error('Error: ', error);
    }
}
mostrarInfo();
//TAREA: encontar solo el titulo de la id