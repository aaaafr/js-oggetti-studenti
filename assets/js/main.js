// Istruzioni:
// Creare un oggetto che descriva uno studente, 
// con le seguenti proprietà:
// nome, cognome, età.
var studente = {
    "nome" : "Giulio",
    "cognome" : "Guglielmone",
    "eta" : 2021 - 1992 
}

console.log(studente);

//Stampare a schermo 
// attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(var key in studente){
    console.log(key, studente[key]);
}

 document.writeln(studente.nome + " " + studente.cognome + " " + studente.eta);





// Creare un array di oggetti di studenti.
var  classe = 
[
    {
        "nome" : "Federica",
        "cognome" : "Palmieri",
        "eta" : 2021 - 1994

    },
    
    {
        "nome" : "Mario",
        "cognome" : "Rossi",
        "eta" : 2021 - 1998

    },

    {
        "nome" : "Francesco",
        "cognome" : "Storti",
        "eta" : 2021 - 1995
    }
]

console.log(classe);
console.log(classe.push(studente));
// Ciclare su tutti gli studenti e 
// stampare per ognuno di essi, nome e cognome.

for(var i = 0; i < classe.length; i++){
    var elenco = classe[i];
    console.log(classe);

     for(var chiave in elenco){
         console.log(chiave, elenco.nome, elenco.cognome);
         
     }
}



// Dare la possibilità all’utente, 
// attraverso 3 prompt(),
//  di aggiungere un nuovo oggetto studente 
// inserendo nell’ordine: nome, cognome e età.

var nuovoStudente = {
    "nome" : prompt("Inserisci nome"),
    "cognome" :  prompt("Inserisci cognome"),
    "eta" : Number(prompt("Inserisci età"))
}

console.log(nuovoStudente);
console.log(classe.push(nuovoStudente));
