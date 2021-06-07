//numero gioco pari o dispari

do{
    var PoD=prompt("inserisci p per pari / d per dispari")
    var numero=prompt("inerisci numero da 1 a 5");
    numero=parseInt(numero);
}while(numero<1 || numero>5)

var numrandom=randomnum();

var vincitore=paridispari(numero,numrandom)

if(vincitore==PoD){
    console.log("hai vinto :)")
}else{
    console.log("hai perso :(")
}

//controllo parola palindroma
var parola=prompt("inserisci parola palindroma");

var risultato=contrpali(parola);

console.log(risultato);


function contrpali(x){

    for(var i=0; i< x.length ; i++){
        //analizzo la parola paragonando la prima lettere all'ultima come se fosse un array

        if(x[i]!= x[(x.length-i-1)] ){
            return false
        }
    }
    return true;
}

function randomnum(){
    //creo un numero random
    var num=Math.floor(Math.random()*5+1);
    return num
}

function paridispari(x,y){
    var z=x+y;
    if(z%2==0){
        return "p"
    }
    return "d"
}