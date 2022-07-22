/* Constantes Divisas*/

const divisas = document.querySelector('#divisas');
const cantidadDivisa = document.querySelector('#cantidad-divisa');
const convertirDivisaBtn = document.querySelector('#convertir-divisa-button');
const graficarDivisaBtn = document.querySelector('#graficar-divisa-button');
const totalDivisa = document.querySelector('#total-divisa');

/*Constantes indices*/

const indiceEconomico = document.querySelector('#indices-economicos');
const cantidadIndice = document.querySelector('#cantidad-indice');
const convertirIndiceBtn = document.querySelector('#convertir-indice-button');
const graficarIndiceBtn = document.querySelector('#graficar-indice-button');
const totalIndice = document.querySelector('#total-indice');

/* API's */

let apiURL = "https://mindicador.cl/api" ;

async function obtenerIndicadoresChile() {
    try {
        const res = await fetch(apiURL);
        const indicadores = await res.json();
        return indicadores;
    }
    catch (e) {
        alert("Error al cargar los datos, intente nuevamente")
    }    
}

/* Graficas */

const contenedorGraficas = document.querySelector('#canvas-div');
let graficas = document.querySelector('#chart');






