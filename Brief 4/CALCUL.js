function plus()
{
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    
    document.getElementById('result').value=n1+n2;
}
function dif()
{
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    
    document.getElementById('result').value=n1/n2;
}
function sou()
{
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    
    document.getElementById('result').value=n1-n2;
}
function mul()
{
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    
    document.getElementById('result').value=n1*n2;
}