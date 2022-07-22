function definirAPI() {
    if (divisas.value === 'Bitcoin') {
        apiEspecifica = apiURL + '/bitcoin';        
    } else if (divisas.value === 'Euro') {
        apiEspecifica = apiURL + '/euro';        
    } else if (divisas.value === 'Dólar observado') {
        apiEspecifica = apiURL + '/dolar';        
    } else if (indiceEconomico.value === 'Unidad Tributaria Mensual (UTM)') {
        apiEspecifica = apiURL + '/utm';        
    } else if (indiceEconomico.value === 'Unidad de fomento (UF)') {       
        apiEspecifica = apiURL + '/uf';   
        console.log(apiEspecifica);     
    }      
}

async function conseguirDatos(){  
    definirAPI();
    const res = await fetch(apiEspecifica);
    const indicadores = await res.json();
    const arrayInfo = indicadores.serie.splice(1,10);
    arrayInfo.sort(function(a,b){
        if (a.fecha < b.fecha) {
            return -1;
        }
    })
    
    const labels = arrayInfo.map((indicador) => {        
        return indicador.fecha;
    });

    const data = arrayInfo.map((indicador) => {
       return indicador.valor;
    });

    const datasets = [
        {
            label: "Valores últimos días",
            borderColor: "rgb(255, 99, 132)",
            data
        }
    ];
    return {labels, datasets };
}

async function crearGrafica() {    
    const data = await conseguirDatos();
    const config = {
        type: "line",
        data
    };    
    window.grafica = new Chart(graficas, config); 
}

graficarDivisaBtn.addEventListener('click', function(){
    indiceEconomico.value = '';
    contenedorGraficas.style.display = 'flex';
    if (window.grafica){
        window.grafica.clear();
        window.grafica.destroy();
    }
    crearGrafica();
    
})

graficarIndiceBtn.addEventListener('click', function(){
    divisas.value = '';
    contenedorGraficas.style.display = 'flex';    
    if (window.grafica){
        window.grafica.clear();
        window.grafica.destroy();
    }
    crearGrafica();
    
    
})