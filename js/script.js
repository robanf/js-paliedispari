var parola=prompt("inserisci parola palindroma");

var risultato=contrpali(parola);

console.log(risultato);


function contrpali(x){

    for(var i=0; i< x.length ; i++){
        
        if(x[i]!= x[(x.length-i-1)] ){
            return false
        }
    }
    return true;
}