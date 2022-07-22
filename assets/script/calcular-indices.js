

async function renderizarIndices () {
    let indicadores= await obtenerIndicadoresChile();       
    indiceEconomico.innerHTML = '';    
    indiceUno = document.createElement('option');
    indiceDos = document.createElement('option');    
    indiceUno.innerHTML = indicadores.utm.nombre;
    indiceDos.innerHTML = indicadores.uf.nombre;
    indiceEconomico.appendChild(indiceUno);
    indiceEconomico.appendChild(indiceDos);     
}

async function calcularTotalIndices() {    
    let indicadores= await obtenerIndicadoresChile();
    
    if (indiceEconomico.value == indicadores.utm.nombre) {       
        totalIndice.innerHTML = 'Total ' + (indicadores.utm.valor*cantidadIndice.value) + ' CLP';
    } else if (indiceEconomico.value == indicadores.uf.nombre) {       
        totalIndice.innerHTML = 'Total ' + (indicadores.uf.valor*cantidadIndice.value) + ' CLP';
    }
}

convertirIndiceBtn.addEventListener('click', function(){
    calcularTotalIndices();
})