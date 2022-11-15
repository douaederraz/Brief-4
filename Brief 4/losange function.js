function star() {
    var drawInp = document.getElementById("N1");
    var drawing = document.getElementById("N2");
    var i, k;
         drawing.innerHTML="";
    for (i = 1; i <= drawInp.value ; i++) 
    {
    for (k = 1; k <= i; k++) {
    drawing.innerHTML += "*";
    }
    drawing.innerHTML += "<br>";
    }
    }
