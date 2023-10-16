const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido!', 3);
        return;
    }
    if(!altura){
        setResultado('Altura inválida!', 3);
        return;
    }

    const imc = getImc(peso, altura);
    const codNivelImc = getNivelImc(imc);
    const codGrau = getCodGrau(imc);

    console.log(codNivelImc);
    console.log(codGrau);
    console.log(imc);

    setResultado(codNivelImc, codGrau);
});

function getCodGrau(imc){
    if (imc >= 24.9) {
        return 3;
    }
    if (imc >= 18.5) {
        return 2;
    }
    if (imc < 18.5) {
        return 1;
    }
}

function getNivelImc(imc){
    const nivel = ["Abaixo do peso.", "Peso normal.", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

    if(imc >= 39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura){
    const imc = peso / (altura * 2);
    return imc.toFixed(2);
}

function setResultado (msg, codGrau) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');

    if(codGrau == 1) {
        p.classList.add('paragrafo-baixo');
        p.innerHTML = msg;
    }
    if(codGrau == 2) {
        p.classList.add('paragrafo-ok');
        p.innerHTML = msg;
    }
    if(codGrau == 3) {
        p.classList.add('paragrafo-alto');
        p.innerHTML = msg;
    }
    
    resultado.appendChild(p);
}