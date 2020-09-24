// Objectos 
//Crie um objecto com seus dados pessoais 
var people = {
  firstName: 'Higor Vinicius',
  lastName: 'Monteiro',
  age: 27,
  isGraduation: true,
}

//Crie um método no objecto anterior, que mostre o seu nome e sobrenome
people.fullName = function() {  
  return `${this.firstName} ${this.lastName}`
}


// Modifique o valor da propriedade preço para 300
var car = {
  price: 1000,
  doors: 4,
  brand: 'Uno',
}

car.price = 3000

// Crie um objecto de um cachorro que  represente um labrador,
// preto que late ao ver uma pessoa

var dog = {
  breed: "Labrador",
  color: '#000',
  age: 10,
  run(sexo){
    if (sexo === 'M') {
      return 'to run'
    }else if (sexo === 'F'){
      return 'stopped'
    }else{
      return null
    }
  }
}