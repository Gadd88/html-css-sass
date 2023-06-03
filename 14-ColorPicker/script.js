const color = document.querySelector('#color');
const salida = document.querySelector('#salida');
const body = document.querySelector('body');
const codColor = document.querySelector('.codColor')
const listaColores = document.querySelector('.lista-colores');
const btnfav = document.querySelector('.btnfav')
const borrarFav = document.querySelector('.limpiarFav')
const coloresArray = [];

let colorElegido = color.value;

document.addEventListener('DOMContentLoaded', () => {

    limpiarHTML();

    JSON.parse(coloresLocal).forEach( color => {
        let colorGuardado = document.createElement('li');
        colorGuardado.innerHTML = color;
        colorGuardado.style.backgroundColor = color;
        listaColores.appendChild(colorGuardado);
    })
});

color.addEventListener('input', () => {
    
    colorElegido = color.value;
    codColor.innerHTML = colorElegido;
    salida.style.backgroundColor = `${colorElegido}`;
    salida.style.color = '#fff';
});

btnfav.addEventListener('click', agregarFav)

function agregarFav(){

    let colorItem = document.createElement('li');
    colorItem.innerHTML = colorElegido;
    colorItem.style.background = colorElegido;
    listaColores.appendChild(colorItem);
    coloresArray.push(colorElegido);
    

    localStorage.setItem('coloresArray', JSON.stringify(coloresArray));
}

const coloresLocal = localStorage.getItem('coloresArray')

codColor.addEventListener('click', copiar);

function copiar(){
    navigator.clipboard.writeText(color.value)
    let copiado = document.createElement('p');
    copiado.classList.add('alerta')
    copiado.innerHTML = 'Codigo de color copiado';
    salida.appendChild(copiado);
    setTimeout(() => {
        salida.removeChild(copiado)
    }, 1000)
}

borrarFav.addEventListener('click', () => {
    localStorage.clear();
    limpiarHTML();
});

function limpiarHTML(){
    while(listaColores.firstChild){
        listaColores.removeChild(listaColores.firstChild);
    };
}
