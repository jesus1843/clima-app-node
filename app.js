const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

let getInfo = async (direccion) => {
  try {
    let coors = await lugar.getLugarLatLng( direccion );
    let temp = await clima.getClima( coors.lat, coors.lng );

    return `El clima en ${ coors.direccion.green } es de ${ colors.cyan(temp) }${ '°C'.cyan }`;
  } catch(e) {
    return `No se pudo determinar el clima en '${ direccion }'`.red;
  }
}

getInfo( argv.direccion )
    .then( mensaje => console.log(mensaje) )
    .catch( e => console.log(e) );