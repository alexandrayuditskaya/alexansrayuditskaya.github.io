let secretNumber=getRandomInt(1,10);
let att=15;
function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

document.querySelector(".check").onclick=function(){
    let userNumber=document.querySelector('.number').value;
    if(secretNumber>userNumber){
        document.querySelector(".hint").innerHTML="Your number is smaller";
    }
    if(secretNumber<userNumber){
        document.querySelector(".hint").innerHTML="Your number is bigger";
    }
    if(secretNumber==userNumber){
        document.querySelector(".hint").innerHTML="You win";
        document.querySelector(".number").disabled=true;
        document.querySelector(".check").disabled=true;
    }
    att=att-1;
    document.querySelector(".att").innerHTML=att;
    if(att==0){
        document.querySelector(".number").disabled=true;
        document.querySelector(".check").disabled=true;
    }
}
document.querySelector(".new").onclick=function(){
    secretNumber=getRandomInt(1,10);
    att=15;
    document.querySelector(".att").innerHTML=att;
    document.querySelector(".number").disabled=false;
        document.querySelector(".check").disabled=false;
}