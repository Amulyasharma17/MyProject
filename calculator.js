var x,y,res;
function add(){
     x=Number(document.getElementById('num1').value)
     y=Number(document.getElementById('num2').value)
     res=x+y
    document.getElementById('result').value=res

}
function sub(){
    x=document.getElementById('num1').value
    y=document.getElementById('num2').value
    res=x-y
    document.getElementById('result').value=res
}
function mul(){
    x=document.getElementById('num1').value
    y=document.getElementById('num2').value
    res=x*y
    document.getElementById('result').value=res
}
function div(){
    x=document.getElementById('num1').value
    y=document.getElementById('num2').value
    res=x/y
    document.getElementById('result').value=res
}