import months from './months.js'
import animais from './animais.js'


// Filtra meses
const filteredMonths = months.filter( (months)=> {
    return months.days === 31
})

console.log(filteredMonths)

let toPrint = ''

const filteredAnimais =animais.filter ((animais) =>{
     return animais ===animal
})
console.log(filteredAnimais)

let toprint =''

// Lista meses
filteredMonths.forEach(month => {
   toPrint += month.month + ', '
});
filteredAnimais.forEach(animal =>{
    toPrint += animal.animal + ','
})

// for( let c = 0; c < filteredMonths.length; c++ ){

// }

let meses = [30,30,30] // array comum
let tipo = [Herbivoro]

// Reduce - função com todos os itens do array e devolve um valor único
let sumMonthDays = filteredMonths.reduce( (prev, next) => {
    return {days: prev.days + next.days}
})

// Map - funções em arrays de retorno individual (cada valor array)
let cachorros = [10, 15, 7, 8, 9]

let years = cachorros.map( (cachorro => {
    return cachorro * 7
}))

document.getElementById('main').innerHTML = 
    toPrint + '<br> Soma dos dias dos meses selecionados: ' 
    + sumMonthDays.days + '<br> idade humana dos cachorros: '  
    + years + ' '
