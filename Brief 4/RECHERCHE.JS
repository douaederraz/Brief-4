var tx = document.getElementById('phrase');
var outputWord = document.getElementById('message');
var m = document.getElementById('mot');


function suprimer(){
    let mval = m.value
    let txval = tx.value;
while (txval.match(mval))   {txval = txval.replace(mval,"");}
    outputWord.innerHTML = txval
}
 
function recherche(){ 
    let mval = m.value
    let txval = tx.value;
    if (txval.match(mval))   {outputWord.innerHTML = "Ce mot existe"}
    else  {outputWord.innerHTML = "Ce mot n'existe pas"}
}


