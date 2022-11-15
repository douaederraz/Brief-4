function reverse(){
    let inp1="";
      let tailleinp=document.getElementById('tailleinp').value ;
        for (let i = 0; i <tailleinp;i++) {
          inp1=inp1+"<input id=en"+i+">"
          document.getElementById('output1').innerHTML=inp1
        }
      }
     
    
function recherchetabl() {
    var finalout = document.getElementById('finalout')
      let valeurArechercher=document.getElementById('valeurArechercher').value;
      let inp2="";
      for(let j=0 ; j<=10 ; j++){
        inp2=inp2+" "+document.getElementById("en"+j).value
        if(inp2.includes(valeurArechercher)){
       finalout.innerHTML=" La valeur " + valeurArechercher +" existe dans le tableau "
        }
        else {
         finalout.innerHTML="La  valeur "+ valeurArechercher +" n'existe pas dans le tableau "
        }
      }
  }

