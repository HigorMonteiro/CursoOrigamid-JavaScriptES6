
var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 1
}


var videoGames = ['Switch', 'PS4', 'XBOX', '3DS']

// complex form
for(var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
  if(videoGames[item] === 'XBOX'){
    break;
  }
}

// simple form

videoGames.forEach(function(){
  console.log('Oi sumida')
})

// Quando você passa um valor na sua função 
// ela vira dinamicamente um valor do Array 
videoGames.forEach(function(item){
  console.log(item)
})
// outras vareações
videoGames.forEach(function(item, index){
  console.log(item, index)
})

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002]
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${a

brasilCampeao.forEach(function(item){
  console.log(`O brasil ganhou a copa de ${item}`)
})
// Interaja com um loop nas frutas abaixo e pare ao chegar em Per
var fruts = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 0; i < fruts.length; i++){
  console.log(fruts[i])
  if(fruts[i] === 'Pera'){
    break
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var frutLast = fruts[fruts.length-1]
console.log(frutLast)