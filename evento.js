
//Lista de parcipantes ainda restam vagas
const ListaDeparticipantes = ["Paulo", "Gabrielle", "Vitor","Maria", "Guilherme", "Felpe", "Anderson", "Alberto", "Laura"]
const ListaDepalestrantes = ["Marcos", "Agatha", "Nathan", "Danilo", "Daniela", "Jônatas", "Brenda"]

if(ListaDeparticipantes.length + ListaDepalestrantes.length < 100) {
    console.log("Próxima etapa: DIGITE A DATA DO SEU ANIVERSÁRIO")
} 
else {
    console.log("Não há mais vagas")
}

//BÔNUS PARA TESTADORES: ADICIONE SEU NOME NA LISTA TAMBÉM
//ListaDeparticipantes.push("digiteseunomeaqui");
//ListaDepalestrantes.push("digiteseunomeaqui");

//calculadora da idade
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
console.log (calculaIdade('31/10/2001'))

if(idade >= 18){
    console.log("Idade apropriada")
}
else {
    console.log("Apenas para maiores de 18 anos")
}

//validador data do evento
var today = new Date(2021, 11, 09);{
    console.log(today.toLocaleDateString())
    }
    
    let Evento = new Date(2021, 11, 25); 
    if (today.getTime() < Evento.getTime()) 
      console.log("ainda não chegou no dia do evento"); 
    else if (today.getTime() > Evento.getTime()) 
      console.log("Opa, o evento já aconteceu. Tá atrasado!"); 
    else
      console.log("É HOJE FI"); 

//mostrar listas
console.log ("Participantes:")
console.log (ListaDeparticipantes)
console.log ("Palestrantes:")
console.log (ListaDepalestrantes)
