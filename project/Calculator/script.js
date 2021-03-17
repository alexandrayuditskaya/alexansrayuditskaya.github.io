document.querySelector(".add").onclick=function(){
    let numberOne=document.querySelector(".number1").value;
    let numberTwo=document.querySelector(".number2").value;
    let result=parseInt(numberOne)+parseInt(numberTwo);
    alert(numberOne+"+"+numberTwo+"="+result)
}
document.querySelector(".sub").onclick=function(){
    let numberOne=document.querySelector(".number1").value;
    let numberTwo=document.querySelector(".number2").value;
    let result=parseInt(numberOne)-parseInt(numberTwo);
    alert(numberOne+"-"+numberTwo+"="+result)
}
document.querySelector(".mult").onclick=function(){
    let numberOne=document.querySelector(".number1").value;
    let numberTwo=document.querySelector(".number2").value;
    let result=parseInt(numberOne)*parseInt(numberTwo);
    alert(numberOne+"*"+numberTwo+"="+result)
}
document.querySelector(".div").onclick=function(){
    let numberOne=document.querySelector(".number1").value;
    let numberTwo=document.querySelector(".number2").value;
    let result=parseInt(numberOne)/parseInt(numberTwo);
    alert(numberOne+"/"+numberTwo+"="+result)
}