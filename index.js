//Lista de parcipantes ainda restam vagas
let ListaDeparticipantes = ["Paulo", "Gabrielle", "Vitor","Maria", "Guilherme", "Fernanda", "João", "Marcela", "Pedro", "Luna", "Roberto"]

if(ListaDeparticipantes.length < 85) {
    console.log("Ainda restam vagas para participantes")
} 
else {
    console.log("Não há mais vagas")
}

//verificação +18 Participantes
const idadeParticipante = 18
if(idadeParticipante >= 18){
    console.log("Participante cadastrado")
}
else {
    console.log("Apenas para maiores de 18 anos")
}


//
//Lista de Palestranttes ainda restam vagas
let ListaDepalestrantes = ["Marcos", "Agatha", "Nathan", "Danilo", "Daniela", "Jônatas", "Brenda"]

if(ListaDeparticipantes.length < 15) {
    console.log("Ainda restam vagas para palestrantes")
}
else {
    console.log("Não há mais vagas")
}

//verificação +18 Participantes
//const idadePalestrante = 31
//if(idadePalestrante >=18){
//    console.log("Palestrante cadastrado")
//}
//else {
//    console.log("Apenas para maiores de 18 anos")
//}

//verificando datas
var today = new Date(2021, 11, 25);{
console.log(today.toLocaleDateString())
}

let Evento = new Date(2021, 11, 25); 
if (today.getTime() < Evento.getTime()) 
  console.log("ainda não chegou no dia do evento"); 
else if (today.getTime() > Evento.getTime()) 
  console.log("Opa, o evento já aconteceu. Tá atrasado!"); 
else
  console.log("É HOJE FI"); 


//validação idade Participantes
function calculaIdade(dataNasc){
   
    var dataAtual = new Date();
    var anoAtual = dataAtual.getUTCFullYear();
    var anoNascParts = dataNasc.split('/');
    var diaNasc = anoNascParts[0];
    var mesNasc = anoNascParts[1];
    var anoNasc = anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1;

if(mesAtual < mesNasc){
    idade--;
}
else{
    if(mesAtual == mesNasc){
        if(new Date().getDate() < diaNasc){
            idade--;
        
    }
}


}
return idade
}
console.log (calculaIdade('31/10/2011'))

