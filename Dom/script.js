const href = window.location.href;

console.log(href)

if(href === 'http://127.0.0.1:5500/Dom/index.html'){
  console.log('É igual')
}

const titulo = document.querySelector('h1')

console.log(titulo)

const idTitulo = titulo.id;
const textElemento = titulo.innerText;
const auturaElemento = titulo.offsetHeight;

titulo.addEventListener('click', function(){
  console.log('Clicou no titulo : ', titulo.innerText)
});