function sumSquare(x) {
  result = x * x
  return result
}

console.log(sumSquare(2))

// addEventListener('click', function(){console.log('Oi sumida')})

// Crie uma função para verificar se um valor é Truthy
function chekiValue(value){
  if (value == 10) {
    return true
  } else {
    return false
  }
}
console.log(chekiValue(10))
 function isTruthy(value){
  return !!value
 }
 console.log(isTruthy(20))
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimeterSquare(side){
  return side * 4
}
console.log(perimeterSquare(2))
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
var firstName = 'Higor'
var lastName = 'Monteiro'

function fullName(firstName, lastName){
  return `${firstName} ${lastName}`
}
console.log(fullName(firstName, lastName))
// Crie uma função que verifica se um número é par
function isEven(number){
  if ((number % 2) === 0){
    return 'Par'
  }else{
    return 'Impa'
  }
}
console.log(isEven(5))
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function checkType(value){
  return typeof(value)
}
console.log(checkType(true))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
  console.log('Higor Vinicius')
})

// Corrija o erro abaixo
let totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

precisoVisitar(20);
jaVisitei(20);