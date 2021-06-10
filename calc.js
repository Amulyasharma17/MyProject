function dis(val){
    document.getElementById("output").value+=val
 }

function calculate(){
    var x=document.getElementById('output').value
    var y =eval(x)
    document.getElementById("output").value=y
}
function clearFunc(){
    console.log("123")
    document.getElementById("output").value=""
    
}