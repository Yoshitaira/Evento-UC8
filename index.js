//Lista de parcipantes ainda restam vagas
let ListaDeparticipantes = ["Paulo", "Gabrielle", "Vitor","Maria", "Guilherme", "Fernanda", "João", "Marcela", "Pedro", "Luna", "Roberto"]

if(ListaDeparticipantes.length < 85) {
    console.log("Ainda restam vagas para participantes")
} 
else {
    console.log("Não há mais vagas")
}

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
console.log (calculaIdade('31/10/2001'))

//verificação +18
let idade = 

if ( idade> 18){
    console.log ("Cadastrado")
}
else{
    console.log("Apenas para maiores de 18")
}

//Lista de Palestranttes ainda restam vagas
let ListaDepalestrantes = ["Marcos", "Agatha", "Nathan", "Danilo", "Daniela", "Jônatas", "Brenda"]

if(ListaDeparticipantes.length < 15) {
    console.log("Ainda restam vagas para palestrantes")
}
else {
    console.log("Não há mais vagas")
}

//validação data de nascimento palestrantes

