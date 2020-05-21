const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento/tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado a completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar un elemento/tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}