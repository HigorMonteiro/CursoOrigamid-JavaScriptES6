// const href = window.location.href;

// console.log(href)

// if(href === 'http://127.0.0.1:5500/Dom/index.html'){
//   console.log('É igual')
// }

// const titulo = document.querySelector('h1')

// console.log(titulo)

// const idTitulo = titulo.id;
// const textElemento = titulo.innerText;
// const auturaElemento = titulo.offsetHeight;

// titulo.addEventListener('click', function(){
//   console.log('Clicou no titulo : ', titulo.innerText)
// });

// Retorne a URL da pagina atual ultizando o objecto window

const href = window.location.href
console.log('URL da pagina atual : ', href)

// Selecione o primero elemento da pagina que possua a classe ativo
console.log(document.querySelector('.ativo'))

// Retorna a linguagem do navegador
console.log(window.navigator.language)
// Retorne a largura da janela
console.log(window.window.innerWidth);