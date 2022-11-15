

   //let j=parseInt(document.getElementById('jour'));
   let jo=document.getElementById("jour");
   let mo=document.getElementById('mois');
   let an=document.getElementById('année');
   let msg=(document.getElementById('message'));
   
   function vérifier(){
    let j=jo.value;
let m=mo.value;
let a=an.value;

   if((a>1900 && j>=1 &&(( m==4 || m==6 || m==9 || m==11) && j<=30)||
   ((m==1 || m==3 || m==5 || m==7 || m==8 ||m==10 || m== 12)  && j<=31) ||
    (m==2 && j<=28))) {
 
    msg.innerText='date valide';
   }

else{ 

  msg.innerText='date INvalide';
         }

}
  