/*
11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se
ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.


Regra para saber se um ano é bissexto ou não: 
Um ano é bissexto se for divisível por 4,
exceto quando também for divisível por 100,
a menos que seja divisível por 400.

Exemplos: 

O ano 2020 é divisível por 4, próximo passo.
O ano 2020 não é divisível por 100, então ele é bissexto.
---------------------------------------------------------------------
O ano 1900 é divisível por 4, próximo passo.
O ano 1900 é divisível por 100, próximo passo.
O ano 1900 não é divisível por 400, então ele não é bissexto.
---------------------------------------------------------------------
O ano 2000 é divisível por 4, próximo passo.
O ano 2000 é divisível por 100, próximo passo.
O ano 2000 é divisível por 400, então ele é bissexto.
---------------------------------------------------------------------
*/

function anoBissexto (ano){
    if (ano % 4 === 0 && ano % 100 !== 0){
        return true
    } else if (ano % 4 === 0 && ano % 100 === 0 && ano % 400 !== 0){
        return false
    } else if (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0){
        return true
    } else {
        return undefined
    }
}
console.log(anoBissexto(2020)) 
console.log(anoBissexto(1900)) 
console.log(anoBissexto(2000)) 
console.log(anoBissexto(5000)) 
console.log(anoBissexto("fc"))