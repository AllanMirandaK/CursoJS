//  ?  :  ;
// (condicao) ? 'valor verdadeiro' : 'valor falso' ;

const scoreUser = 999;
const nivelUser = scoreUser >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUser = null;
const corPadrao = corUser || 'Laranja';

console.log(nivelUser, corPadrao);

/* if ( scoreUser>= 1000 ) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal!');
} */

