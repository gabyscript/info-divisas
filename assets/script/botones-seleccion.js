const monedaFiatBtn = document.querySelector('#fiat-button');
const indiceBtn = document.querySelector('#indices-button');
const infoFiat = document.querySelector('#conversor-fiat-div');
const infoIndice = document.querySelector('#conversor-indices-div');

monedaFiatBtn.addEventListener('click', function(){    
    infoFiat.classList.add('vista');
    infoIndice.classList.remove('vista');
    renderizarDivisas () 
})

indiceBtn.addEventListener('click', function(){    
    infoIndice.classList.add('vista');
    infoFiat.classList.remove('vista');
    renderizarIndices();
})