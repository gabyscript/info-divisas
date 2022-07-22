


async function renderizarDivisas () {
    let indicadores= await obtenerIndicadoresChile();          
    divisas.innerHTML = '';
    divisaUno = document.createElement('option');
    divisaDos = document.createElement('option');
    divisaTres = document.createElement('option');
    divisaUno.innerHTML = indicadores.bitcoin.nombre;
    divisaDos.innerHTML = indicadores.euro.nombre;
    divisaTres.innerHTML = indicadores.dolar.nombre;
    divisas.appendChild(divisaUno); 
    divisas.appendChild(divisaDos); 
    divisas.appendChild(divisaTres);   
}

async function calcularTotalDivisas() {    
    let indicadores= await obtenerIndicadoresChile();
    if (divisas.value == indicadores.bitcoin.nombre) {
        conversionTotal = cantidadDivisa.value * indicadores.bitcoin.valor * indicadores.dolar.valor;
        totalDivisa.innerHTML= 'Total ' + conversionTotal + ' CLP';
    } else if (divisas.value == indicadores.euro.nombre ) {
        conversionTotal = cantidadDivisa.value * indicadores.euro.valor;
        totalDivisa.innerHTML = 'Total ' + conversionTotal  + ' CLP';
    } else if (divisas.value == indicadores.dolar.nombre ) {
        conversionTotal = cantidadDivisa.value * indicadores.dolar.valor;
        totalDivisa.innerHTML = 'Total ' + conversionTotal  + ' CLP';
    } 
}
convertirDivisaBtn.addEventListener('click', function(){
    calcularTotalDivisas();
});