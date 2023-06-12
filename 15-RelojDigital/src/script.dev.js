let hora = document.getElementById('hora');
let min = document.getElementById('minuto');
let sec = document.getElementById('segundo');
let fechaDia = document.querySelector('.fecha');

function mostrarTiempo(){
    
    //obtenemos fecha actual
    let fecha = new Date();
    let hh = fecha.getHours();
    let mm = fecha.getMinutes();
    let ss = fecha.getSeconds();

    //mostarmos 0 delante si el valor es menor a 10, sino lo dejamos como esta
    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    hora.innerHTML = `${hh}`;
    min.innerHTML = `${mm}`;
    sec.innerHTML = `${ss}`;
};

mostrarTiempo();

setInterval(mostrarTiempo, 1000);

let dia = new Date().getDay();
let dia2 = new Date().getDate();
let mes = new Date().getMonth()+1;
let anio = new Date().getFullYear();

let diaNombre;
let mesNombre;

switch(dia){
    case 0:
        diaNombre = 'Domingo';
        break;
    case 1:
        diaNombre = 'Lunes';
        break;
    case 2:
        diaNombre = 'Martes';
        break;
    case 3:
        diaNombre = 'Miercoles';
        break;
    case 4:
        diaNombre = 'Jueves';
        break;
    case 5:
        diaNombre = 'Viernes';
        break;
    case 6:
        diaNombre = 'Sabado';
    default:
        diaNombre = 'Domingo';
}

switch(mes){
    case 1:
        mesNombre = 'Enero';
        break;
    case 2:
        mesNombre = 'Febrero';
        break;
    case 3:
        mesNombre = 'Marzo';
        break;
    case 4:
        mesNombre = 'Abril';
        break;
    case 5:
        mesNombre = 'Mayo';
        break;
    case 6:
        mesNombre = 'Junio';
        break
    case 7:
        mesNombre = 'Julio';
        break;
    case 8:
        mesNombre = 'Agosto';
        break;
    case 9:
        mesNombre = 'Septiembre';
        break;
    case 10:
        mesNombre = 'Octubre';
        break;    
    case 11:
        mesNombre = 'Noviembre';
        break;
    default:
        mesNombre = 'Diciembre';
        break;
}

fechaDia.innerHTML = `${diaNombre}, ${dia2} de ${mesNombre} del ${anio}`;


