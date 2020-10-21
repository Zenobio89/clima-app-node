const lugar = require('./lugar/lugar')
const clima = require('./lugar2/clima')

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demandOption: true
        }
    }).argv
    //getLatitud(argv.direccion).then(console.log)
    //getClima(58.93328, 22.83224).then(console.log)
const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLatitud(direccion);
        const clima2 = await clima.getClima(coordenadas.latitud, coordenadas.longuitud)
        return `El Clima de ${coordenadas.direccion2} es de ${clima2} Grados Centigrados.`
    } catch (error) {
        return `No se pudo determinar el clima de ${coordenadas.direccion2}.`
    }
}
getInfo(argv.direccion).then(console.log)
    .catch(console.log)