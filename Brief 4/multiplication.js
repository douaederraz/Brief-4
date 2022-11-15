function multiplication(){
    let span=document.getElementById('message').innerHTML;
    let num=document.getElementById('n3').value;
    document.getElementById('message').innerHTML=""
    for( let con=1 ; con<=10; con++  ){
        document.getElementById('message').innerHTML += "<br>"+ num +"x"+con +  "=" + num*con;

  
   }

}
