let array = ['Miercoles', '1ro de julio', '2020 ', "4 de la tarde"];

console.log("hoy es " + array[1])
let tiempo = ['Esta parcialmente nublado, con un poco de humedad'];

let arrayTiempo = [...array, ...tiempo]

console.log('Hoy es ' +array + ' y el tiempo ' +tiempo)