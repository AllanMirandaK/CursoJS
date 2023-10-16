let dataParagrafo = document.querySelector('#data');
const data = new Date();
const diaSemana = data.getDay();

function getSemana(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}
function getDataExtenso (data) {
    let dataFormatada;

    if(data.getDate() < 10){
        dataFormatada = '0'+data.getDate();
    } else {
        dataFormatada = data.getDate();
    }

    switch(data.getMonth()){
        case 0:
            dataFormatada += ' de janeiro';
            break;
        case 1:
            dataFormatada += ' de fevereiro';
            break;
        case 2:
            dataFormatada += ' de março';
            break;
        case 3:
            dataFormatada += ' de abril';
            break;
        case 4:
            dataFormatada += ' de maio';
            break;
        case 5:
            dataFormatada += ' de junho';
            break;
        case 6:
            dataFormatada += ' de julho';
            break;
        case 7:
            dataFormatada += ' de agosto';
            break;
        case 8:
            dataFormatada += ' de setembro';
            break;
        case 9:
            dataFormatada += ' de outubro';
            break;
        case 10:
            dataFormatada += ' de novembro';
            break;
        case 11:
            dataFormatada += ' de dezembro';
            break;
        default:
            dataFormatada += ' ';
            break;
    }

    dataFormatada += ' de ' + data.getFullYear();
    return dataFormatada;
}

function getHora (data) {
    let horaFormatada;
    horaFormatada = data.getHours()+':'+data.getMinutes();
    return horaFormatada;
}

const dataFormatada = getDataExtenso(data);
const diaSemanaTexto = getSemana(diaSemana);
const horaFormatada = getHora(data);
dataParagrafo.innerHTML = diaSemanaTexto + ', ' + dataFormatada + '<br>' + horaFormatada;