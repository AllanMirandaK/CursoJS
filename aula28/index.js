/* const tresHoras = 60 * 60 *3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
 */

//const data = new Date(2019, 3, 20);
//const data = new Date('2019-04-20 20:20:59');

//console.log('Dia: ', data.getDate());
//console.log('Mês: ', data.getMonth());
// console.log('Ano: ', data.getFullYear());
// console.log('Horas: ', data.getHours());
// console.log('Minutos: ', data.getMinutes());
// console.log('Segundos: ', data.getSeconds());
// console.log('Dia da semana: ', data.getDay());
// console.log(data.toString());
// console.log(Date.now());

function formataData (data) {
    //console.log(data);
    let dia = data.getDate();
    let mes = data.getMonth()+1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
    let semana = data.getDay();

    if(dia < 10){
        dia = '0' + dia;
    }
    if(mes < 10){
        mes = '0' + mes;
    }

    if(semana == 0) {
        semana = "Dom.";
    }
    if(semana == 1) {
        semana = "Seg.";
    }
    if(semana == 2) {
        semana = "Ter.";
    }
    if(semana == 3) {
        semana = "Qua.";
    }
    if(semana == 4) {
        semana = "Qui.";
    }
    if(semana == 5) {
        semana = "Sex.";
    }
    if(semana == 6) {
        semana = "Sab.";
    }
    
    const dataBr = semana + ' ' + dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minuto + ':' + segundo;
    return dataBr;
}

const data = new Date();
const dataBr = formataData(data);
console.log(dataBr);