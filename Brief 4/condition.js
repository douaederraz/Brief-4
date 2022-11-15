
var num= Math.floor(Math.random()*51);
var tentative= document.getElementById('tentative');
var input = document.getElementById('n4');
var btnguess = document.getElementById('btnguess')
var counter = 0;

function guess()
{
counter++;
tentative.innerText = counter ;

    if (counter == 10 ){
        btnguess.disabled = true;
        document.getElementById('tentative').innerHTML= "score :" + counter +"/10";
    }
    else if(input.value == num){
     
        document.getElementById('text').innerHTML="Bravo";
    }
    
    else{  
         document.getElementById('text').innerHTML = "Réesseyez encore !";
         tentative.innerHTML= "score :" + counter +"/10";
    }
    
}
