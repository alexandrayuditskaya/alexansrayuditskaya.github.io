let att=15;
let words=["small","glasses","welcome","bells","safe","safe","wide","iron","selfish","church","office","supposedly","million","random","student","profesor","today","monday","computar","edit","popular","speech","fake","lipstick","together","friend","passcode","toystore","clock","pencil","butterfly","wall","football","tennis","water","table"]
let word=words[Math.floor(Math.random()*words.length)]
let letters=[]
document.querySelector(".new").onclick=function(){
    att=15;
    letters=[]
    word=words[Math.floor(Math.random()*words.length)]
    console.log(word)
    document.querySelector(".att").innerHTML=att;
    let out="";
    for(let i=0; i<word.length; i++){
        out=out+"🙃";
    }
    document.querySelector(".word").value=out;
    document.querySelector(".letter").disabled=false;
    document.querySelector(".check").disabled=false;
}
document.querySelector(".check").onclick=function(){
    let letter=document.querySelector(".letter").value;
    console.log(letter)
    letters.push(letter);
    console.log(letters)
    out="";
    for(let i=0; i<word.length; i++){
        let char=word[i];
        if(letters.indexOf(char)!= -1){
            out=out+char;
        }
        else{
            out=out+"🙃";
        }
    }
    if(word.indexOf(letter)== -1){ 
        att=att-1;
        document.querySelector(".att").innerHTML=att;
        if(att===0){
            document.querySelector(".check").disabled=true;
            document.querySelector(".letter").disabled=true;
        }
    }
    document.querySelector(".word").value=out;
    document.querySelector(".letter").value="";
    document.querySelector(".letter").focus();
}