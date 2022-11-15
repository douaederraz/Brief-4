function valider(){
    var ipts = document.getElementById('inputs')
    var tle = parseInt(document.getElementById('tl').value)
    inputs.innerHTML="";
    for(x=1 ; x<= tle ;x++){
        var createdinp = document.createElement('INPUT')
        createdinp.setAttribute('id', 'input'+x)
        ipts.appendChild(createdinp)
    }}
function tri(){
   var taille = parseInt(document.getElementById('tl').value)
   var  Inputs =  document.getElementById('Inputs')
   Inputs.innerHTML="";
for(i=0 ; i< taille ;i++){
    var createdTri = document.createElement('INPUT')
    createdTri.setAttribute('id', 'sortInp'+i)
   Inputs.appendChild(createdTri)}
const array1 = []
const array2 = []
    for (let k = 1; k<= taille; k++){ array1.push(parseInt(document.getElementById('input'+k).value))}
    for (let i = 0; i < taille; i++){
        let minvalue = Math.min(...array1)
        const deletmin = array1.indexOf(minvalue);
        array2.push(minvalue)
        document.getElementById('sortInp'+i).value = minvalue
        array1.splice(deletmin,1)
    }}


    
    



